<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

try {
    // Selecciono los productos que se van a comprar para verificar que hay suficiente stock, son enviados en formato [1,2,3]
    $query = 'SELECT * FROM productos WHERE id IN (' . implode(',', $_POST['productos']) . ')';
    $stmt = $db->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Verifico que esten esos productos en la base de datos
    if (count($result) > 0) {

        // Verifico que hay suficiente stock para los productos seleccionados
        foreach ($result as $row) {
            if ($result['cantidad'] < $_POST['cantidad']) {
                echo json_encode(['success' => false, 'data' => 'No hay suficiente stock para el producto ' . $result['nombre']]);
                exit;
            }
        }

        // Si hay suficiente stock, actualizo la cantidad de los productos seleccionados
        foreach ($result as $row) {
            $query = 'UPDATE productos SET cantidad = cantidad - :cantidad WHERE id = :id';
            $stmt = $db->prepare($query);
            $stmt->execute(['cantidad' => $_POST['cantidad'], 'id' => $row['id']]);
        }

    }

    // Si todo salió bien, devuelvo un mensaje de éxito
    echo json_encode(['success' => true, 'message' => 'Compra realizada con éxito']);
} catch (\Throwable $th) {

    // Si hubo un error, devuelvo un mensaje de error
    echo json_encode(['success' => false, 'message' => $th->getMessage()]);
}