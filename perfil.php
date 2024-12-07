<!DOCTYPE html>
<html lang="en">

<head>
  <title>Yenny - El Ateneo</title>
  <link rel="icon" type="image/x-icon" href="./imgs/favicon.ico">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/perfil/perfil.css">
  <link rel="stylesheet" href="./css/global.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Nanum+Brush+Script&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
    rel="stylesheet">
</head>
<script type="module" src="./js/carrito/inicializarCarrito.js"></script>
<script type="module" src="./js/perfil.js"></script>
<script>
  if (localStorage.getItem('logeado') === 'false') {
    window.location.href = './index.php';
  }
</script>

<body>

  <?php include 'components/header.php'; ?>
  <div style="height: 50px;"></div>
  <main>
    <div class="container mt-5">
      <div class="row">
        <!-- Columna izquierda -->
        <div class="col-md-4">
          <div class="card">
            <img id="imagenUsuario" class="card-img-top rounded-circle mx-auto mt-4" alt="Foto de perfil"
              style="width: 150px;">
            <div class="card-body text-center">
              <h3 id="nombreUsuario" class="card-title"></h3>
              <div id="cerrarSesionButton" class="btn bg-danger text-light">Cerrar sesion</div>
            </div>
          </div>
        </div>
        <!-- Columna derecha -->
        <div class="col-md-8">
          <!-- Información del perfil -->
          <div class="card mb-4">
            <div class="card-header">
              <h5>Información del Perfil</h5>
            </div>
            <div class="card-body">
              <div style="display:flex">
                <strong class="mx-1">Correo: </strong>
                <p id="mailUsuario"> /p>
              </div>
              <div style="display:flex">
                <strong class="mx-1">Teléfono: </strong>
                <p id="telefonoUsuario"> </p>
              </div>
              <div style="display:flex">
                <div id="boton-editar-perfil" class="boton">Editar perfil</div>

              </div>
            </div>
          </div>

          <!-- Facturas -->
          <div class="card mb-4">
            <div class="card-header">
              <h5>Facturas</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <strong>Factura #001:</strong> $120.00 - Pagada el 05/12/2024
                </li>
                <li class="list-group-item">
                  <strong>Factura #002:</strong> $75.00 - Pendiente
                </li>
                <li class="list-group-item">
                  <strong>Factura #003:</strong> $200.00 - Pagada el 20/11/2024
                </li>
              </ul>
              <button class="btn btn-link mt-2">Ver todas las facturas</button>
            </div>
          </div>
          <!-- Reservas -->
          <div class="card mb-4">
            <div class="card-header">
              <h5>Reservas</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <strong>Reserva #101:</strong> Mesa para 2 - 10/12/2024 a las 8:00 PM
                </li>
                <li class="list-group-item">
                  <strong>Reserva #102:</strong> Sala de reuniones - 15/12/2024 a las 3:00 PM
                </li>
              </ul>
              <button class="btn btn-link mt-2">Ver todas las reservas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <?php include 'components/footer.php'; ?>
  <script>
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    document.getElementById('nombreUsuario').textContent = usuario['nombre'];
    document.getElementById('mailUsuario').textContent = usuario['email'];
    document.getElementById('telefonoUsuario').textContent = usuario['telefono'];
    document.getElementById('imagenUsuario').src = usuario['urlImagen'];
  </script>
  <script src="./js/header.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>

</html>