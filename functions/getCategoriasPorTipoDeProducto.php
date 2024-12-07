<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {
    // Obtener el tipo de producto enviado
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['tipoDeProductoId'])) {
        echo json_encode([
            'success' => false,
            'message' => 'Falta el ID del tipo de producto'
        ]);
        return;
    }

    $tipoDeProductoId = $data['tipoDeProductoId'];

    // Consulta para obtener las categorías asociadas al tipo de producto
    $query = "
        SELECT c.id, c.nombre
        FROM categoria c
        INNER JOIN categoria_has_tipo_de_producto ch ON c.id = ch.categoria_id
        WHERE ch.tipo_de_producto_id = ?";

    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }

    $stmt->bind_param('i', $tipoDeProductoId);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    // Verificar si hay resultados
    if ($result->num_rows > 0) {
        $categorias = [];
        while ($row = $result->fetch_assoc()) {
            $categorias[] = [
                'id' => $row['id'],
                'nombre' => $row['nombre']
            ];
        }

        // Respuesta exitosa
        echo json_encode([
            'success' => true,
            'message' => 'Categorías encontradas',
            'body' => $categorias
        ]);
    } else {
        // Si no hay resultados
        echo json_encode([
            'success' => false,
            'message' => 'No se encontraron categorías para este tipo de producto'
        ]);
    }
} catch (\Throwable $th) {
    // Manejo de errores
    echo json_encode([
        'success' => false,
        'message' => "Error al obtener categorías: $th"
    ]);
}
?>