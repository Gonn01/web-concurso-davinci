<?php
include 'db_connection.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Inicializar variables de error
    $errorEmail = "";
    $errorContraseña = "";

    $_SESSION['email_login'] = trim($_POST['email']);
    $_SESSION['contraseña_login'] = trim($_POST['contraseña']);

    $email = $_SESSION['email_login'];
    $contraseña = $_SESSION['contraseña_login'];

    if (empty($email)) {
        $errorEmail = '<div style="color:red">El correo electrónico es obligatorio.</div>';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errorEmail = '<div style="color:red">El correo electrónico no es válido.</div>';
    }

    if (empty($contraseña)) {
        $errorContraseña = '<div style="color:red"">La contraseña es obligatoria.</div>';
    }

    $_SESSION['errorEmail'] = $errorEmail;
    $_SESSION['errorContraseña'] = $errorContraseña;

    // Si no hay errores
    echo $errorEmail;
    echo $errorContraseña;
    if (isset($email) && isset($contraseña)) {
        try {
            $query = "SELECT * FROM usuarios WHERE email = '$email' AND contraseña = '$contraseña'";
            $user = executeQuery($query);
            if (isset($user)) {
                echo 'Usuario encontrado';
                header('Location: ../menu_admin.php');
            } else {
                echo 'Usuario no encontrado';
                header('Location: ../login.php');
            }
        } catch (\Throwable $th) {
            echo "Error en la consulta $th";
            // header('Location: ../login.php');
        }
    }
}
