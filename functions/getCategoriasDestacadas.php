<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';
require_once '../models/categoria_destacada.php';
require_once '../models/imagen_categoria_destacada.php';

try {

    $sql = "SELECT * FROM categoria_destacada";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    $categorias = [];

    while ($categoria_data = $result->fetch_assoc()) {
        $sqlImgs = "SELECT img_categoria_destacada.url
                    FROM img_categoria_destacada
                    JOIN categoria_destacada_has_img_categoria_destacada ON img_categoria_destacada.id = categoria_destacada_has_img_categoria_destacada.img_categoria_destacada_id
                    WHERE categoria_destacada_has_img_categoria_destacada.categoria_destacada_id = ?";
        $stmtImgs = $conn->prepare($sqlImgs);
        $stmtImgs->bind_param("i", $categoria_data['id']);
        $stmtImgs->execute();
        $resultImgs = $stmtImgs->get_result();
        $stmtImgs->close();


        $imagenes = [];
        while ($img_data = $resultImgs->fetch_assoc()) {
            $imagenes[] = $img_data['url'];
        }
        $producto = new CategoriaDestacada(
            $categoria_data['id'],
            $categoria_data['title'],
            $categoria_data['description'],
            $categoria_data['color'],
            $imagenes
        );

        $categorias[] = $producto;
    }

    echo json_encode(['success' => true, 'message' => 'Categorías destacadas obtenidas correctamente', 'body' => $categorias]);

} catch (\Throwable $th) {
    echo json_encode(['success' => false, 'message' => $th->getMessage()]);
}