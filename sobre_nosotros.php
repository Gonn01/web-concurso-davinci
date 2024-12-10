<!DOCTYPE html>
<html lang="en">

<head>
  <title>Yenny - El Ateneo</title>
  <link rel="icon" type="image/x-icon" href="./imgs/favicon.ico">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/index/index.css">
  <link rel="stylesheet" href="./css/index/categorias_destacadas.css">
  <link rel="stylesheet" href="./css/index/entrevistas.css">
  <link rel="stylesheet" href="./css/index/metodos_de_pago.css">
  <link rel="stylesheet" href="./css/global.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Nanum+Brush+Script&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
    rel="stylesheet">
</head>
<script type="module" src="js/index.js"></script>
<script type="module" src="./js/carrito/inicializarCarrito.js"></script>

<body>
  <a href="#" style="z-index: 1000; position: fixed; bottom: 10px; right: 10px;
    transition: 0.5s;">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#ffa24c" class="bi bi-arrow-up-circle-fill"
      viewBox="0 0 16 16">
      <path
        d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
    </svg>
  </a>
  <?php
  include 'components/header.php';
  ?>
  <div class="my-5">.</div>
  <div class="container my-5">
    <div class="text-center mb-4">
      <h1 class="display-4 text-primary">Sobre Nosotros</h1>
      <p class="lead">Bienvenidos a <strong>Yenny</strong>, tu hogar para las historias y el conocimiento.</p>
    </div>
    <div class="row">
      <div class="col-lg-6 mb-4">
        <h2 class="text-secondary">Nuestra Misión</h2>
        <p>En <strong>Yenny</strong>, creemos en el poder de los libros para inspirar, educar y transformar vidas.
          Nuestra misión es fomentar el amor por la lectura y el aprendizaje continuo, trayendo historias de todos los
          rincones del mundo a tu alcance.</p>
      </div>
      <div class="col-lg-6 mb-4">
        <h2 class="text-secondary">Lo Que Ofrecemos</h2>
        <ul class="list-group">
          <li class="list-group-item"><strong>Colección Extensa:</strong> Desde clásicos hasta textos académicos, hay
            algo para todos.</li>
          <li class="list-group-item"><strong>Espacio Comunitario:</strong> Un lugar para clubes de lectura y talleres
            culturales.</li>
          <li class="list-group-item"><strong>Asesoramiento Experto:</strong> Nuestro equipo te ayudará a encontrar tu
            próxima gran lectura.</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 mb-4">
        <h2 class="text-secondary">¿Por Qué Elegir Yenny?</h2>
        <ul class="list-group">
          <li class="list-group-item"><strong>Calidad y Variedad:</strong> Selección diversa de títulos para cada
            lector.</li>
          <li class="list-group-item"><strong>Local y Global:</strong> Celebramos a autores locales e internacionales.
          </li>
          <li class="list-group-item"><strong>Sostenibilidad:</strong> Comprometidos con prácticas ecológicas.</li>
        </ul>
      </div>
    </div>
  </div>

  <?php include 'components/footer.php'; ?>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <script src="./js/header.js"></script>
</body>

</html>