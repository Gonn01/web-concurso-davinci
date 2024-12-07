<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {
    // Obtengo los datos enviados
    $data = json_decode(file_get_contents('php://input'), true);
    $idUsuario = $data['idUsuario'];

    // Elimino el usuario de la tabla usuarios_has_roles
    $query = "DELETE FROM usuarios_has_roles WHERE usuarios_id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('i', $idUsuario);
    $stmt->execute();
    $stmt->close();

    // Elimino el usuario de la tabla usuarios
    $query = "DELETE FROM usuarios WHERE id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('i', $idUsuario);
    $stmt->execute();

    // Verifico si se eliminó el usuario
    if ($stmt->affected_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontró el usuario'
        ]);
        return;
    }
    $stmt->close();

    //  Si todo salió bien, devuelvo un mensaje de éxito
    echo json_encode([
        'success' => true,
        'message' => 'Usuario eliminado correctamente'
    ]);
} catch (\Throwable $th) {

    // Si hubo un error, devuelvo un mensaje de error
    echo json_encode([
        'success' => false,
        'message' => "Error al eliminar usuario $th"
    ]);
}

