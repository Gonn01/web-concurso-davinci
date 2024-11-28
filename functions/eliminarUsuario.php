<?php
require_once 'db_connection.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);
try {
    $data = json_decode(file_get_contents('php://input'), true);
    $idUsuario = $data['idUsuario'];
    $query = "DELETE FROM usuarios_has_roles WHERE usuarios_id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('i', $idUsuario);
    $stmt->execute();
    $query = "DELETE FROM usuarios WHERE id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('i', $idUsuario);
    $stmt->execute();

    if ($stmt->affected_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontró el usuario'
        ]);
        return;
    }
    echo json_encode([
        'success' => true,
        'message' => 'Usuario eliminado correctamente'
    ]);
} catch (\Throwable $th) {
    echo json_encode([
        'success' => false,
        'message' => "Error al eliminar usuario $th"
    ]);
}

