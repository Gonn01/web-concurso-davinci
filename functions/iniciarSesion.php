<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';
require_once '../models/usuario.php';

try {
    // Obtengo los datos enviados
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    $contraseña = $data['contraseña'];

    // Verificar si los datos son válidos
    $sql = "SELECT * FROM usuarios WHERE email='$email' AND contraseña='$contraseña'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    // Si no se encuentra el usuario, devolver un mensaje de error
    if ($row = $result->fetch_assoc()) {
        $usuario = new Usuario(
            $row['id'],
            $row['nombre'],
            $row['apellido'],
            $row['email'],
            $row['contraseña']
        );

    } else {
        echo json_encode(['success' => false, 'message' => 'Usuario o contraseña incorrectos']);
        $conn->close();
        exit();
    }

    // Obtener el rol del usuario
    $sql = "SELECT * FROM usuarios_has_roles WHERE usuarios_id='{$usuario->getId()}'";

    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    // Asignar el rol al usuario
    $usuario->setRol($row);

    // Devolver un mensaje de éxito
    echo json_encode([
        'success' => true,
        'message' => 'Usuario logeado correctamente',
        'body' => [
            'id' => $usuario->getId(),
            'nombre' => $usuario->getNombre(),
            'apellido' => $usuario->getApellido(),
            'email' => $usuario->getEmail(),
            'rol' => $usuario->getRol()
        ]
    ]);

} catch (\Throwable $th) {
    echo json_encode(['success' => false, 'message' => $th->getMessage()]);
}
