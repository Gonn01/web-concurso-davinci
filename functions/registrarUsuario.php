<?php
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
    return ($count > 0); // Return true if email exists
}
// Configuración de errores (opcional, para desarrollo)
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

// Obtener datos del formulario (enviados desde JavaScript en formato JSON)
$data = json_decode(file_get_contents('php://input'), true);
$nombre = $data['nombre'];
$apellido = $data['apellido'];
$email = $data['email'];
$contraseña = password_hash($data['contraseña'], PASSWORD_DEFAULT); // Hashear la contraseña

// Validar datos (agregar más validaciones según sea necesario)
if (empty($nombre) || empty($apellido) || empty($email) || empty($contraseña)) {
    echo json_encode(['success' => false, 'message' => 'Por favor, completa todos los campos']);
    exit();
}

// Validar formato de correo electrónico
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'El correo electrónico no es válido']);
    exit();
}

if (emailExists($email)) {
    echo json_encode(['success' => false, 'message' => 'El correo electrónico ya está registrado']);
    exit();
}

// Insertar nuevo usuario
$sql = "INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nombre, $apellido, $email, $contraseña);
$stmt->execute();
$affectedRows = $stmt->affected_rows;
$stmt->close();
print_r($stmt);

$sql = "INSERT INTO usuarios_has_roles (usuario_id, roles_id) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nombre, $apellido, $email, $contraseña);
$stmt->execute();
$affectedRows = $stmt->affected_rows;
$stmt->close();

if ($affectedRows > 0) {
    echo json_encode(['success' => true, 'message' => 'Usuario registrado correctamente']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al registrar el usuario']);
}