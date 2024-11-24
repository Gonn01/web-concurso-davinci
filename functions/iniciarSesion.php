<?php
require_once 'db_connection.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);
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

$sql = "SELECT * FROM usuarios_has_roles WHERE usuarios_id='$resu'";

if ($result->num_rows > 0) {
    echo json_encode(['success' => true, 'message' => 'Usuario logueado correctamente'],'esAdmin'=);
} else {
    echo json_encode(['success' => false, 'message' => 'Usuario o contraseña incorrectos']);
}

$conn->close();