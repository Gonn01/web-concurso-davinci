<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Yenny - El Ateneo</title>
  <link rel="icon" type="image/x-icon" href="./imgs/favicon.ico">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/global.css">
  <link rel="stylesheet" href="./css/auth/auth.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Nanum+Brush+Script&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
    rel="stylesheet">
</head>

<body>
  <div id="barrier">NO DISPONIBLE, POR FAVOR CAMBIE LA RESOLUCION O ENTRE DESDE OTRO DISPOSITIVO</div>
  <main>
    <img id="lapices1" src="./imgs/lapices.png" alt="">
    <img id="lapices2" src="./imgs/lapices.png" alt="">
    <img id="libro" src="./imgs/libro.png" alt="">
    <div id="login-container">
      <section id="data">
        <div id="container-logeo">
          <h2>Registro</h2>
          <form style="width:300px" action="functions/validar_formulario_registro.php" method="POST"
            class="mx-auto pb-2">

            <div class="mb-4">
              <input type="text" name="nombre" class="form-control" placeholder="Nombre"
                value="<?= htmlspecialchars($_SESSION['nombre_registro'] ?? '') ?>">
              <?php
              if (isset($_SESSION['errorNombre'])) {
                echo $_SESSION['errorNombre'];
                unset($_SESSION['errorNombre']); // Limpia el error después de mostrarlo
              }
              ?>
            </div>

            <div class="mb-4">
              <input type="text" name="apellido" class="form-control" placeholder="Apellido"
                value="<?= htmlspecialchars($_SESSION['apellido_registro'] ?? '') ?>">
              <?php
              if (isset($_SESSION['errorApellido'])) {
                echo $_SESSION['errorApellido'];
                unset($_SESSION['errorApellido']);
              }
              ?>
            </div>

            <div class="mb-4">
              <input type="email" name="email" class="form-control mx-auto" placeholder="Email"
                value="<?= htmlspecialchars($_SESSION['email_registro'] ?? '') ?>">
              <?php
              if (isset($_SESSION['errorEmail'])) {
                echo $_SESSION['errorEmail'];
                unset($_SESSION['errorEmail']);
              }
              ?>
            </div>
            <div class="mb-4">
              <input type="password" name="contraseña" class="form-control mx-auto" placeholder="Contraseña"
                value="<?= htmlspecialchars($_SESSION['contraseña_registro'] ?? '') ?>">
              <?php
              if (isset($_SESSION['errorContraseña'])) {
                echo $_SESSION['errorContraseña'];
                unset($_SESSION['errorContraseña']);
              }
              ?>
            </div>


            <input type="submit" class="boton" value="Registrarse">
          </form>
          <div>o</div>
          <div class="boton-outlined" onclick="window.location.href='login.html'">Iniciar sesión</div>
        </div>
        <div id="container-bienvenida">
          <h2>Bienvenido a Yenny</h2>
          <div id="texto-bienvenida">
            Descubrí en Yenny - El Ateneo lo que más te gusta de Libros
            Físicos con las mejores ofertas. ¡Encontrá promociones y
            descuentos en toda la tienda!
          </div>
          <div class="boton-outlined" onclick="window.location.href='index.php'">
            Ir al inicio
          </div>
        </div>
      </section>
    </div>
  </main>
  <script src="./js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
</body>

</html>