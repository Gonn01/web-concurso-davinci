<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {

    // Obtengo los datos enviados
    $data = json_decode(file_get_contents('php://input'), true);
    $idUsuario = $data['idUsuario'];

    // Obtengo el rol actual del usuario
    $query = "SELECT roles_id FROM usuarios_has_roles WHERE usuarios_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('i', $idUsuario);
    $stmt->execute();
    $result = $stmt->get_result();

    // Verificar si el usuario tiene registros en la tabla usuarios_has_roles
    if ($result->num_rows == 0) {
        echo json_encode([
            'success' => false,
            'message' => 'El usuario no tiene registros en la tabla usuarios_has_roles'
        ]);
        return;
    }

    $row = $result->fetch_assoc();

    // Verificar si el usuario ya tiene el rol asignado
    if ($row['roles_id'] == 1) {
        echo json_encode([
            'success' => false,
            'message' => 'El usuario ya tiene el rol asignado'
        ]);
        return;
    }

    // Actualizo el rol del usuario
    $query = "UPDATE usuarios_has_roles SET roles_id = 1 WHERE usuarios_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('i', $idUsuario);
    $stmt->execute();
    $stmt->close();

    // Si todo sale bien, devuelvo un mensaje de éxito 
    echo json_encode([
        'success' => true,
        'message' => 'Rol del usuario actualizado correctamente'
    ]);
} catch (\Throwable $th) {

    // Si ocurre un error al procesar los datos, devuelvo un mensaje de error
    echo json_encode([
        'success' => false,
        'message' => "Error al procesar datos: $th"
    ]);
}
