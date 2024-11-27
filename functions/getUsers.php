<?php
require_once 'db_connection.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);

$sql = "SELECT * FROM usuarios";
$smtm = $conn->prepare($sql);
$smtm->execute();
$result = $smtm->get_result()->fetch_all(MYSQLI_ASSOC);

if ($result > 0) {
    echo json_encode(['success' => true, 'data' => $result]);
} else {
    echo json_encode(['success' => false, 'message' => 'Usuario o contraseña incorrectos']);
}

$conn->close();