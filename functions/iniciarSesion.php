<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'db_connection.php';
require_once '../models/usuario.php';
header('Content-Type: application/json');
// Conexión a la base de datos (reemplaza con tus credenciales)

// Obtener datos del formulario (enviados desde JavaScript en formato JSON)
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$contraseña = $data['contraseña'];

// Consulta a la base de datos
$sql = "SELECT * FROM usuarios WHERE email='$email' AND contraseña='$contraseña'";
$smtm = $conn->prepare($sql);
$smtm->execute();
$result = $smtm->get_result();

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

$sql = "SELECT COUNT(*) AS total FROM usuarios_has_roles WHERE usuarios_id='$usuario->id' AND roles_id=1";

$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

$total = $row['total'];

$usuario->setEsAdmin(esAdmin: $total > 0);

echo json_encode([
    'success' => true,
    'message' => 'Usuario logeado correctamente',
    'esAdmin' => $usuario->esAdmin
]);

$conn->close();