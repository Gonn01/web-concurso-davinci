<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {
    $query = "SELECT * FROM tipo_de_producto";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    if ($result->num_rows > 0) {
        $tiposDeProducto = [];
        while ($row = $result->fetch_assoc()) {
            $tiposDeProducto[] = [
                'id' => $row['id'],
                'nombre' => $row['nombre']
            ];
        }

        echo json_encode([
            'success' => true,
            'message' => 'Tipos de producto encontrados',
            'body' => $tiposDeProducto
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontraron tipos de producto'
        ]);
    }
} catch (\Throwable $th) {
    echo json_encode([
        'success' => false,
        'message' => "Error al obtener tipos de producto: $th"
    ]);
}
?>