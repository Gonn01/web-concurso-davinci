<?php
$query = 'SELECT * FROM productos WHERE id IN (' . implode(',', $_POST['productos']) . ')';
$stmt = $db->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
if (count($result) > 0) {
    foreach ($result as $row) {
        if ($result['cantidad'] < $_POST['cantidad']) {
            echo json_encode(['success' => false, 'data' => 'No hay suficiente stock para el producto ' . $result['nombre']]);
            exit;
        }
    }
    foreach ($result as $row) {
        $query = 'UPDATE productos SET cantidad = cantidad - :cantidad WHERE id = :id';
        $stmt = $db->prepare($query);
        $stmt->execute(['cantidad' => $_POST['cantidad'], 'id' => $row['id']]);
    }

}
echo json_encode(['success' => true, 'data' => 'Compra realizada con éxito']);