<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';

try {

    // Obtengo los datos enviados
    $data = json_decode(file_get_contents('php://input'), true);
    // Verifico que se hayan enviado los datos necesarios
    if (!isset($data['idUsuario']) || !isset($data['nombre']) || !isset($data['apellido']) || !isset($data['email']) || !isset($data['telefono']) || !isset($data['urlImagen'])) {
        echo json_encode([
            'success' => false,
            'message' => 'Faltan datos',
            'body' => $data
        ]);
        return;
    }

    // Obtengo los datos
    $idUsuario = $data['idUsuario'];
    $nombre = $data['nombre'];
    $apellido = $data['apellido'];
    $email = $data['email'];
    $telefono = $data['telefono'];
    $urlImagen = $data['urlImagen'];

    // Actualizo los datos del usuario
    $query = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, telefono = ?, urlImagen = ? WHERE id = ?";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die("Error preparando consulta: " . $conn->error);
    }
    $stmt->bind_param('sssssi', $nombre, $apellido, $email, $telefono, $urlImagen, $idUsuario);
    $stmt->execute();
    // Verifico si se actualizó el usuario
    if ($stmt->affected_rows === 0) {
        echo json_encode([
            'success' => false,
            'message' => 'No se encontró el usuario'
        ]);
        exit();
    }
    $stmt->close();

    // si todo salió bien, devuelvo un mensaje de éxito
    echo json_encode([
        'success' => true,
        'message' => 'Usuario actualizado correctamente',
        'body' => [
            'idUsuario' => $idUsuario,
            'nombre' => $nombre,
            'apellido' => $apellido,
            'email' => $email,
            'telefono' => $telefono,
            'urlImagen' => $urlImagen
        ]
    ]);
} catch (\Throwable $th) {
    // Si hubo un error, devuelvo un mensaje de error
    echo json_encode([
        'success' => false,
        'message' => "Error al obtener datos: $th"
    ]);
}
