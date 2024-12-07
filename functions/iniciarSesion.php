<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';
require_once '../models/usuario.php';

try {
    // Get JSON input
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    $contraseña = $data['contraseña'];

    // Prepare and execute the query
    $sql = "SELECT * FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        // User found
        $user = $result->fetch_assoc();
        $hashAlmacenado = $user['contraseña'];

        // Verify password
        if (password_verify($contraseña, $hashAlmacenado)) {
            // Create Usuario object
            $usuario = new Usuario(
                $user['id'],
                $user['nombre'],
                $user['apellido'],
                $user['email'],
                $user['contraseña'],
                $user['telefono'],
                $user['urlImagen']
            );

            // Get user role
            $sql = "SELECT * FROM usuarios_has_roles WHERE usuarios_id='{$usuario->getId()}'";

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();

            // Asignar el rol al usuario
            $usuario->setRol($row);

            // Return success response
            echo json_encode([
                'success' => true,
                'message' => 'Usuario logeado correctamente',
                'body' => [
                    'id' => $usuario->getId(),
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
            // Password incorrect
            echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta']);
            exit();
        }
    } else {
        // User not found
        echo json_encode(['success' => false, 'message' => 'Usuario no encontrado']);
        exit();
    }
} catch (Throwable $th) {
    // Catch and display errors
    echo json_encode(['success' => false, 'message' => $th->getMessage()]);
    exit();
}
