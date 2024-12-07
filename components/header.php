<?php
session_start();
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<header class="container-fluid m-0 p-0" style="position: fixed; z-index: 1000">
  <nav class="navbar navbar-expand-lg fixed-top ">
    <img id="logo-nav" src="imgs/logo_yenny.png" alt="Logo">
    <div class="container-fluid header-custom">
      <a class="navbar-brand" href="index.php">Yenny - El Ateneo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link <?php echo ($currentPage == 'index.php') ? 'active' : ''; ?>" href="index.php">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php echo ($currentPage == 'libros.php') ? 'active' : ''; ?>"
              href="libros.php">Libros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php echo ($currentPage == 'peliculas.php') ? 'active' : ''; ?>"
              href="peliculas.php">Películas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php echo ($currentPage == 'articulos_libreria.php') ? 'active' : ''; ?>"
              href="articulos_libreria.php">Artículos de librería</a>
          </li>
          <li id="carrito-list">
            <div id="carrito-ref" class="nav-link" onclick="window.location.href = './carrito.php'">
              <a class="d-flex flex-row">
                <span id="carrito-text">Carrito</span>
                <div id="carrito-valor"></div>
              </a>
              <div class="carrito-container-header">
                <img src="./imgs/carrito.png" alt="">
                <div class="a-hidden" id="carrito-valor"></div>
              </div>
            </div>
          </li>
          <li>
            <div id="perfil-ref" onclick="window.location.href='perfil.php'" class="nav-link" style="display:none">
              <a><span id="perfil-text">Perfil</span></a>
              <img id="perfil-img" src="imgs/user.png" alt="">
            </div>
          </li>
          <li>
            <div id="login-ref" onclick="window.location.href='login.html'" class="nav-link" style="display:none">
              <a><span>Login</span></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>