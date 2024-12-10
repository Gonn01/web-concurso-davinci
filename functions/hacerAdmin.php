<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {

    $data = json_decode(file_get_contents('php://input'), true);
    $idUsuario = $data['idUsuario'];

    $query = "SELECT roles_id FROM usuarios_has_roles WHERE usuarios_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('i', $idUsuario);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 0) {
        echo json_encode([
            'success' => false,
            'message' => 'El usuario no tiene registros en la tabla usuarios_has_roles'
        ]);
        return;
    }

    $row = $result->fetch_assoc();

    if ($row['roles_id'] == 0) {
        echo json_encode([
            'success' => false,
            'message' => 'El usuario ya tiene el rol asignado'
        ]);
        return;
    }

    $query = "UPDATE usuarios_has_roles SET roles_id = 0 WHERE usuarios_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('i', $idUsuario);
    $stmt->execute();
    $stmt->close();

    echo json_encode([
        'success' => true,
        'message' => 'Rol del usuario actualizado correctamente'
    ]);
} catch (\Throwable $th) {

    echo json_encode([
        'success' => false,
        'message' => "Error al procesar datos: $th"
    ]);
}
