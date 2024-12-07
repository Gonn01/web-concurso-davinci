<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {
    // Obtengo los datos enviados
    $data = json_decode(file_get_contents('php://input'), true);

    // Verifico que se hayan enviado los datos necesarios
    if (!isset($data['sku']) || !isset($data['nombre']) || !isset($data['precio']) || !isset($data['categoriaSeleccionada']) || !isset($data['tipoDeProductoSeleccionado'])) {
        echo json_encode([
            'success' => false,
            'message' => 'Faltan datos para crear el producto'
        ]);
        return;
    }

    // Obtengo los datos
    $sku = $data['sku'];
    $nombre = $data['nombre'];
    $precio = $data['precio'];
    $urlImagen = $data['urlImagen'] ?? null;
    $categoriaSeleccionada = $data['categoriaSeleccionada'];
    $tipoDeProductoSeleccionado = $data['tipoDeProductoSeleccionado'];

    // Consulta para obtener la ID de la categoría
    $queryCategoria = "SELECT id FROM categoria WHERE nombre = ?";
    $stmtCategoria = $conn->prepare($queryCategoria);
    if (!$stmtCategoria) {
        die("Error preparando consulta categoría: " . $conn->error);
    }
    $stmtCategoria->bind_param('s', $categoriaSeleccionada);
    $stmtCategoria->execute();
    $resultCategoria = $stmtCategoria->get_result();

    if ($resultCategoria->num_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'Categoría no encontrada'
        ]);
        return;
    }
    $categoria = $resultCategoria->fetch_assoc();
    $idCategoria = $categoria['id'];

    // Consulta para obtener la ID de la categoría
    $queryTipoDeProducto = "SELECT id FROM tipo_de_producto WHERE nombre = ?";
    $stmtTipoDeProducto = $conn->prepare($queryTipoDeProducto);
    if (!$stmtTipoDeProducto) {
        die("Error preparando consulta categoría: " . $conn->error);
    }
    $stmtTipoDeProducto->bind_param('s', $tipoDeProductoSeleccionado);
    $stmtTipoDeProducto->execute();
    $resultTipoDeProducto = $stmtTipoDeProducto->get_result();

    if ($resultTipoDeProducto->num_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'Categoría no encontrada'
        ]);
        return;
    }
    $tipoProducto = $resultTipoDeProducto->fetch_assoc();
    $idTipoDeProducto = $tipoProducto['id'];



    // Obtener el último ID
    $sql = "SELECT MAX(id) AS max_id FROM productos";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $ultimo_id = $row['max_id'];
    $nuevo_id = $ultimo_id + 1;
    if ($urlImagen == "" || $urlImagen == null) {
        $urlImagen = "https://robohash.org/$nuevo_id";
    }
    $cantidadDisponible = 0;
    // Inserto el producto en la base de datos
    $query = "INSERT INTO productos (id, sku, nombre, precio, url_imagen, cantidad_disponible, categoria_id, tipo_de_producto_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('issssiii', $nuevo_id, $sku, $nombre, $precio, $urlImagen, $cantidadDisponible, $idCategoria, $idTipoDeProducto);
    $stmt->execute();

    // Verifico si se creó el producto
    if ($stmt->affected_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'No se pudo crear el producto'
        ]);
        $stmt->close();
        return;
    }

    // Obtener el ID del producto creado
    $nuevoId = $stmt->insert_id;

    $stmt->close();

    // Devuelvo un mensaje de éxito
    echo json_encode([
        'success' => true,
        'message' => 'Producto creado correctamente',
        'body' => [
            'id' => $nuevo_id,
            'sku' => $sku,
            'nombre' => $nombre,
            'precio' => $precio,
            'urlImagen' => $urlImagen,
            'cantidadDisponible' => $cantidadDisponible,
            'idCategoria' => $idCategoria,
            'idTipoDeProducto' => $idTipoDeProducto
        ]
    ]);
} catch (\Throwable $th) {
    // Si hubo un error, devuelvo un mensaje de error
    echo json_encode([
        'success' => false,
        'message' => "Error al crear producto: $th"
    ]);
}
