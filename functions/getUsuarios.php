<?php
require_once 'db_connection.php';
require_once '../models/usuario.php';
require_once '../models/rol.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    $sql = "SELECT 
            u.id AS usuario_id,
            u.nombre AS usuario_nombre,
            u.apellido AS usuario_apellido,
            u.email AS usuario_email,
            u.contraseña AS usuario_contraseña,
            r.id AS rol_id,
            r.nombre AS rol_nombre
        FROM usuarios u
        LEFT JOIN usuarios_has_roles ur ON u.id = ur.usuarios_id
        LEFT JOIN roles r ON ur.roles_id = r.id
    ";

    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();

    $usuarios = [];

    while ($row = $result->fetch_assoc()) {
        // Crear objeto Rol
        $rol = new Rol($row['rol_id'], $row['rol_nombre']);

        // Crear objeto Usuario y asignarle el rol
        $usuario = new Usuario(
            $row['usuario_id'],
            $row['usuario_nombre'],
            $row['usuario_apellido'],
            $row['usuario_email'],
            $row['usuario_contraseña']
        );

        // Asignar rol al usuario (modificar la clase para permitir setRol)
        $usuario->setRol($rol);

        // Agregar usuario a la lista
        $usuarios[] = [
            'id' => $usuario->getId(),
            'nombre' => $usuario->getNombre(),
            'apellido' => $usuario->getApellido(),
            'email' => $usuario->getEmail(),
            'rol' => [
                'id' => $rol->getId(),
                'nombre' => $rol->getNombre()
            ]
        ];
    }

    // Respuesta JSON
    echo json_encode([
        'success' => true,
        'message' => 'Usuarios obtenidos',
        'body' => $usuarios
    ]);

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error al conectar a la base de datos',
        'error' => $e->getMessage()
    ]);
    exit;
}

$conn->close();
