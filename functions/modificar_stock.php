<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_SESSION['sku'] = trim($_POST['sku']);
    $_SESSION['cantidad'] = trim($_POST['cantidad']);
    // Assign values to variables for validation
    $sku = $_SESSION['sku'];
    $cantidad = $_SESSION['cantidad'];
    $exito = false;
    // Validaciones
    $errores = [];

    $query = "UPDATE productos SET cantidad_disponible = cantidad_disponible + $cantidad WHERE sku = '$sku'";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("", $sku, $cantidad, $exito);
    $stmt->execute();

    if (empty($sku)) {
        $errores[] = "El sku es obligatorio.";
    }

    if (empty($cantidad) || $cantidad == 0) {
        $errores[] = "La cantidad es obligatoria.";
    }
    // Check for errors
    if (empty($errores)) {
        // Validation successful, handle success case (e.g., send email)
        $exito = "Formulario enviado exitosamente!";
    }
}
if (empty($errores)) {
    $_SESSION['exito'] = "Formulario enviado exitosamente!";
} else {
    $_SESSION['errores'] = $errores;
}
header('Location: ../ajuste_stock.php');