<?php
include 'db_connection.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Inicializar variables de error
    $errorNombre = "";
    $errorApellido = "";
    $errorEmail = "";
    $errorContraseña = "";

    $_SESSION['nombre_registro'] = trim($_POST['nombre']);
    $_SESSION['apellido_registro'] = trim($_POST['apellido']);
    $_SESSION['email_registro'] = trim($_POST['email']);
    $_SESSION['contraseña_registro'] = trim($_POST['contraseña']);

    $nombre = $_SESSION['nombre_registro'];
    $apellido = $_SESSION['apellido_registro'];
    $email = $_SESSION['email_registro'];
    $contraseña = $_SESSION['contraseña_registro'];

    // Validaciones
    if (empty($nombre)) {
        $errorNombre = '<div style="color:red">El nombre es obligatorio.</div>';
    }

    if (empty($apellido)) {
        $errorApellido = '<div style="color:red">El apellido es obligatorio.</div>';
    }

    if (empty($email)) {
        $errorEmail = '<div style="color:red">El correo electrónico es obligatorio.</div>';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errorEmail = '<div style="color:red">El correo electrónico no es válido.</div>';
    }

    if (empty($contraseña)) {
        $errorContraseña = '<div style="color:red"">La contraseña es obligatoria.</div>';
    }

    // Guardar errores en la sesión
    $_SESSION['errorNombre'] = $errorNombre;
    $_SESSION['errorApellido'] = $errorApellido;
    $_SESSION['errorEmail'] = $errorEmail;
    $_SESSION['errorContraseña'] = $errorContraseña;

    // Si no hay errores
    if (empty($errorNombre) && empty($errorApellido) && empty($errorEmail) && empty($errorContraseña)) {
        $query = "INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES ('$nombre', '$apellido', '$email', '$contraseña')";
        try {
            executeQuery($query);
            header('Location: ../login.php');
        } catch (\Throwable $th) {
            header('Location: ../registro.php');
        }
    }
    exit();
}
