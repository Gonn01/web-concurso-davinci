<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';
require_once '../models/usuario.php';

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    $contraseña = $data['contraseña'];

    $sql = "SELECT * FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        $hashAlmacenado = $user['contraseña'];

        if (password_verify($contraseña, $hashAlmacenado)) {
            $usuario = new Usuario(
                $user['id'],
                $user['nombre'],
                $user['apellido'],
                $user['email'],
                $user['contraseña'],
                $user['telefono'],
                $user['urlImagen']
            );

            $sql = "SELECT * FROM usuarios_has_roles WHERE usuarios_id='{$usuario->getId()}'";

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();

            $usuario->setRol($row);

            echo json_encode([
                'success' => true,
                'message' => 'Usuario logeado correctamente',
                'body' => [
                    'idUsuario' => $usuario->getId(),
                    'nombre' => $usuario->getNombre(),
                    'apellido' => $usuario->getApellido(),
                    'email' => $usuario->getEmail(),
                    'rol' => $usuario->getRol(),
                    'telefono' => $usuario->getTelefono(),
                    'urlImagen' => $usuario->getUrlImagen()
                ]
            ]);
            exit();
        } else {
            echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta']);
            exit();
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Usuario no encontrado']);
        exit();
    }
} catch (Throwable $th) {
    echo json_encode(['success' => false, 'message' => $th->getMessage()]);
    exit();
}
