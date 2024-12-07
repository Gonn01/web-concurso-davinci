<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {
    // Obtengo los datos enviados
    $data = json_decode(file_get_contents('php://input'), true);
    $idProducto = $data['idProducto'];

    // Validar que se recibió el ID del producto
    if (!$idProducto) {
        echo json_encode([
            'success' => false,
            'message' => 'ID de producto no proporcionado'
        ]);
        exit();
    }

    // Elimino el producto de la tabla principal
    $query = "DELETE FROM productos WHERE id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('i', $idProducto);
    $stmt->execute();

    // Verifico si se eliminó el producto
    if ($stmt->affected_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontró el producto'
        ]);
        return;
    }

    $stmt->close();

    // Devuelvo un mensaje de éxito
    echo json_encode([
        'success' => true,
        'message' => 'Producto eliminado correctamente'
    ]);
} catch (\Throwable $th) {

    // Si hubo un error, devuelvo un mensaje de error
    echo json_encode([
        'success' => false,
        'message' => "Error al eliminar producto: $th"
    ]);
}
