<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $idProducto = $data['idProducto'];

    $query = "DELETE FROM productos WHERE id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('i', $idProducto);
    $stmt->execute();

    if ($stmt->affected_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontró el producto'
        ]);
        return;
    }

    $stmt->close();

    echo json_encode([
        'success' => true,
        'message' => 'Producto eliminado correctamente'
    ]);
} catch (\Throwable $th) {

    echo json_encode([
        'success' => false,
        'message' => "Error al eliminar producto: $th"
    ]);
}
