<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {

    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['idProducto']) || !isset($data['sku']) || !isset($data['nombre']) || !isset($data['precio']) || !isset($data['urlImagen'])) {
        echo json_encode([
            'success' => false,
            'message' => 'Faltan datos'
        ]);
        return;
    }

    $idProducto = $data['idProducto'];
    $sku = $data['sku'];
    $nombre = $data['nombre'];
    $precio = $data['precio'];
    $urlImagen = $data['urlImagen'];

    $query = "UPDATE productos SET sku = ?,nombre = ?, precio = ?, url_imagen = ? WHERE id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('ssssi', $sku, $nombre, $precio, $urlImagen, $idProducto);
    $stmt->execute();
    if ($stmt->affected_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontró el producto'
        ]);
    }
    $stmt->close();

    echo json_encode([
        'success' => true,
        'message' => 'Producto actualizado correctamente'
    ]);
} catch (\Throwable $th) {
    echo json_encode([
        'success' => false,
        'message' => "Error al obtener datos: $th"
    ]);
}
