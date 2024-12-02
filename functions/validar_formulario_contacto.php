<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_SESSION['nombre'] = trim($_POST['nombre']);
    $_SESSION['apellido'] = trim($_POST['apellido']);
    $_SESSION['telefono'] = trim($_POST['telefono']);
    $_SESSION['email'] = trim($_POST['email']);
    $_SESSION['mensaje'] = trim($_POST['mensaje']);
    $nombre = $_SESSION['nombre'];
    $apellido = $_SESSION['apellido'];
    $telefono = $_SESSION['telefono'];
    $email = $_SESSION['email'];
    $mensaje = $_SESSION['mensaje'];
    $exito = false;
    $errores = [];

    if (empty($nombre)) {
        $errores[] = "El nombre es obligatorio.";
    }

    if (empty($apellido)) {
        $errores[] = "El apellido es obligatorio.";
    }
    if (empty($telefono)) {
        $errores[] = "El telefono es obligatorio.";
    }

    if (empty($email)) {
        $errores[] = "El correo electrónico es obligatorio.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errores[] = "El correo electrónico no es válido.";
    }

    if (empty($mensaje)) {
        $errores[] = "El mensaje es obligatorio.";
    }
    if (empty($errores)) {
        $exito = "Formulario enviado exitosamente!";
    }
}
if (empty($errores)) {
    $_SESSION['exito'] = "Formulario enviado exitosamente!";
} else {
    $_SESSION['errores'] = $errores;
}
header('Location: ../contacto.php');