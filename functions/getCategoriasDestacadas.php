<?php
require_once 'db_connection.php';
require_once '../models/categoria_destacada.php';
require_once '../models/imagen_categoria_destacada.php';

$sql = "SELECT * FROM categoria_destacada";
$stmt = $conn->prepare($sql);
$stmt->execute();

$result = $stmt->get_result();

$categorias = [];

while ($categoria_data = $result->fetch_assoc()) {
    $sqlImgs = "SELECT img_categoria_destacada.url
    FROM img_categoria_destacada
    JOIN categoria_destacada_has_img_categoria_destacada ON img_categoria_destacada.id = categoria_destacada_has_img_categoria_destacada.img_categoria_destacada_id
    WHERE categoria_destacada_has_img_categoria_destacada.categoria_destacada_id = ?";
    $stmtImgs = $conn->prepare($sqlImgs);

    // Vincular el parámetro: el ID de la categoría
    $stmtImgs->bind_param("i", $categoria_data['id']);

    // Ejecutar la consulta
    $stmtImgs->execute();
    $resultImgs = $stmtImgs->get_result();

    // Recopilar las imágenes
    $imagenes = [];
    while ($img_data = $resultImgs->fetch_assoc()) {
        $imagenes[] = $img_data['url'];
    }

    // Crear el objeto CategoriaDestacada
    $producto = new CategoriaDestacada(
        $categoria_data['id'],
        $categoria_data['title'],
        $categoria_data['description'],
        $categoria_data['color'],
        $imagenes
    );

    // Agregar el producto al array de categorías
    $categorias[] = $producto;
}

// Codificar el array completo de productos en formato JSON
header('Content-Type: application/json');
echo json_encode($categorias, JSON_PRETTY_PRINT);


$conn->close();
?>