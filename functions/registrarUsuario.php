<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db_connection.php';
function emailExists($email)
{
    global $conn;

    $sql = "SELECT COUNT(*) FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->close();

    return $count > 0;
}

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $nombre = $data['nombre'];
    $apellido = $data['apellido'];
    $email = $data['email'];
    $contraseña = password_hash($data['contraseña'], PASSWORD_DEFAULT);
    $telefono = $data['telefono'];

    if (empty($nombre) || empty($apellido) || empty($email) || empty($contraseña) || empty($telefono)) {
        echo json_encode(['success' => false, 'message' => 'Por favor, completa todos los campos']);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'El correo electrónico no es válido']);
        exit();
    }

    if (emailExists($email)) {
        echo json_encode(['success' => false, 'message' => 'El correo electrónico ya está registrado']);
        exit();
    }

    $rol_id = 1;

    $sql = "SELECT MAX(id) AS max_id FROM usuarios";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $ultimo_id = $row['max_id'];
    $nuevo_id = $ultimo_id + 1;
    $urlImagen = "https://robohash.org/$email";
    $sql = "INSERT INTO usuarios (id, nombre, apellido, email, contraseña,telefono, urlImagen) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("issssss", $nuevo_id, $nombre, $apellido, $email, $contraseña, $telefono, $urlImagen);
    $stmt->execute();

    $sql = "INSERT INTO usuarios_has_roles (usuarios_id, roles_id) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $nuevo_id, $rol_id);
    $stmt->execute();

    if ($conn->affected_rows > 0) {
        echo json_encode(['success' => true, 'message' => 'Usuario registrado correctamente']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al registrar el usuario']);
    }
    $stmt->close();
} catch (\Throwable $th) {
    echo json_encode(['success' => false, 'message' => 'Error al registrar el usuario']);
}
