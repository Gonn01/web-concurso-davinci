<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';
require_once '../models/producto.php';

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $tipoDeProductoId = $data['tipoDeProductoId'] ?? null;

    if ($tipoDeProductoId == null) {
        $query = "SELECT 
        p.nombre AS producto, 
        p.id,
        p.precio, 
        p.sku, 
        p.url_imagen, 
        p.cantidad_disponible, 
        c.id AS idCategoria, 
        c.nombre AS nombreCategoria, 
        p.tipo_de_producto_id
      FROM productos p
      INNER JOIN categoria c ON p.categoria_id = c.id
      ORDER BY c.id;";

        $stmt = $conn->prepare($query);
        if (!$stmt) {
            die("Error preparando consulta: " . $conn->error);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
    } else {
        $query = "SELECT 
            p.nombre AS producto, 
            p.precio, 
            p.id,   
            p.sku, 
            p.url_imagen, 
            p.cantidad_disponible, 
            c.id AS idCategoria, 
            c.nombre AS nombreCategoria, 
            p.tipo_de_producto_id
        FROM productos p
        INNER JOIN categoria c ON p.categoria_id = c.id
        WHERE p.tipo_de_producto_id = ?
        ORDER BY c.id;";

        $stmt = $conn->prepare($query);
        if (!$stmt) {
            die("Error preparando consulta: " . $conn->error);
        }

        $stmt->bind_param('i', $tipoDeProductoId, );
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
    }


    $categorias = [];

    while ($productoData = $result->fetch_assoc()) {
        $producto = new Producto(
            $productoData['id'],
            $productoData['producto'],
            $productoData['precio'],
            $productoData['sku'],
            $productoData['url_imagen'],
            $productoData['cantidad_disponible'],
            $productoData['idCategoria']

        );

        $idCategoria = $productoData['idCategoria'];
        $nombreCategoria = $productoData['nombreCategoria'];

        if (!isset($categorias[$idCategoria])) {
            $categorias[$idCategoria] = [
                'nombreCategoria' => $nombreCategoria,
                'productos' => []
            ];
        }
        $categorias[$idCategoria]['productos'][] = $producto;
    }

    $body = array_values($categorias);

    if (empty($body)) {
        echo json_encode([
            'success' => false,
            'message' => 'Productos no encontrados',
            'body' => $body
        ]);
    } else {
        echo json_encode([
            'success' => true,
            'message' => 'Productos encontrados correctamente',
            'body' => $body
        ]);
    }
} catch (\Throwable $th) {
    echo json_encode([
        'success' => false,
        'message' => $th->getMessage()
    ]);
}
