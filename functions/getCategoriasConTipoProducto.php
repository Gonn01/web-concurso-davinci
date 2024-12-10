<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {
    $query = "
        SELECT 
            t.id AS idTipoDeProducto,
            t.nombre AS nombreTipoDeProducto,
            c.id AS idCategoria,
            c.nombre AS nombreCategoria
        FROM tipo_de_producto t
        INNER JOIN categoria_has_tipo_de_producto ch ON t.id = ch.tipo_de_producto_id
        INNER JOIN categoria c ON ch.categoria_id = c.id
        ORDER BY t.id, c.id";

    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $tiposDeProducto = [];
        while ($row = $result->fetch_assoc()) {
            $idTipoDeProducto = $row['idTipoDeProducto'];
            $nombreTipoDeProducto = $row['nombreTipoDeProducto'];

            if (!isset($tiposDeProducto[$idTipoDeProducto])) {
                $tiposDeProducto[$idTipoDeProducto] = [
                    'idTipoDeProducto' => $idTipoDeProducto,
                    'nombreTipoDeProducto' => $nombreTipoDeProducto,
                    'categorias' => []
                ];
            }

            $tiposDeProducto[$idTipoDeProducto]['categorias'][] = [
                'idCategoria' => $row['idCategoria'],
                'nombreCategoria' => $row['nombreCategoria']
            ];
        }

        $body = array_values($tiposDeProducto);

        echo json_encode([
            'success' => true,
            'message' => 'Tipos de producto con sus categorías encontradas',
            'body' => $body
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontraron tipos de producto con categorías'
        ]);
    }
} catch (\Throwable $th) {
    echo json_encode([
        'success' => false,
        'message' => "Error al obtener tipos de producto con categorías: $th"
    ]);
}
?>