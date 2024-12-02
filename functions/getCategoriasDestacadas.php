<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';
require_once '../models/categoria_destacada.php';
require_once '../models/imagen_categoria_destacada.php';

try {

    // Obtengo las categorías destacadas
    $sql = "SELECT * FROM categoria_destacada";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    $categorias = [];

    // Por cada categoría destacada obtengo las imágenes
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
        // Por cada imagen obtengo la URL
        while ($img_data = $resultImgs->fetch_assoc()) {
            $imagenes[] = $img_data['url'];
        }
        // Crear una instancia de la clase CategoriaDestacada
        $producto = new CategoriaDestacada(
            $categoria_data['id'],
            $categoria_data['title'],
            $categoria_data['description'],
            $categoria_data['color'],
            $imagenes
        );

        // Agregar la categoría al array de categorías
        $categorias[] = $producto;
    }

    // Si todo salió bien, devuelvo un mensaje de éxito
    echo json_encode(['success' => true, 'message' => 'Categorías destacadas obtenidas correctamente', 'body' => $categorias]);

} catch (\Throwable $th) {

    // Si hubo un error, devuelvo un mensaje de error
    echo json_encode(['success' => false, 'message' => $th->getMessage()]);
}