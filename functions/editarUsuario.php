<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {

    // Obtengo los datos enviados
    $data = json_decode(file_get_contents('php://input'), true);

    // Verifico que se hayan enviado los datos necesarios
    if (!isset($data['idUsuario']) || !isset($data['nombre']) || !isset($data['apellido']) || !isset($data['email'])) {
        echo json_encode([
            'success' => false,
            'message' => 'Faltan datos'
        ]);
        return;
    }

    // Obtengo los datos
    $idUsuario = $data['idUsuario'];
    $nombre = $data['nombre'];
    $apellido = $data['apellido'];
    $email = $data['email'];

    // Actualizo los datos del usuario
    $query = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ? WHERE id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('sssi', $nombre, $apellido, $email, $idUsuario);
    $stmt->execute();
    $stmt->close();
    // Verifico si se actualizó el usuario
    if ($stmt->affected_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontró el usuario'
        ]);
    }

    // si todo salió bien, devuelvo un mensaje de éxito
    echo json_encode([
        'success' => true,
        'message' => 'Usuario actualizado correctamente'
    ]);
} catch (\Throwable $th) {
    // Si hubo un error, devuelvo un mensaje de error
    echo json_encode([
        'success' => false,
        'message' => "Error al obtener datos: $th"
    ]);
}
