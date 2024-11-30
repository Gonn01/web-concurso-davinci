<?php
require_once 'db_connection.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');
try {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!isset($data['idUsuario']) || !isset($data['nombre']) || !isset($data['apellido']) || !isset($data['email'])) {
        echo json_encode([
            'success' => false,
            'message' => 'Faltan datos'
        ]);
        return;
    }

    $idUsuario = $data['idUsuario'];
    $nombre = $data['nombre'];
    $apellido = $data['apellido'];
    $email = $data['email'];

    $query = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ? WHERE id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('sssi', $nombre, $apellido, $email, $idUsuario);
    $stmt->execute();

    if ($stmt->affected_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontró el usuario'
        ]);
        exit;
    }

    echo json_encode([
        'success' => true,
        'message' => 'Usuario actualizado correctamente'
    ]);
} catch (\Throwable $th) {
    echo json_encode([
        'success' => false,
        'message' => "Error al obtener datos: $th"
    ]);
    exit;
}
