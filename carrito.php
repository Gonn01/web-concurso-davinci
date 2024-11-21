<!DOCTYPE html>
<html lang="en">

<head>
  <title>Yenny - El Ateneo</title>
  <link rel="icon" type="image/x-icon" href="./imgs/favicon.ico">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/carrito/carrito.css">
  <link rel="stylesheet" href="./css/global.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Nanum+Brush+Script&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
    rel="stylesheet">
</head>

<body>
  <?php include 'components/header.php'; ?>
  <div style="height: 80px;"></div>
  <main>
    <div id="carrito-container">
      <div id="carrito-title">CARRITO DE COMPRAS</div>
      <div id="lista-items-carrito"></div>
    </div>
    <div id="envio-section">
      <div id="envio-title">Envío</div>
      <hr>
      <div id="envio-container">
        <div class="envio-input-data">
          <input class="clean-input" type="text" placeholder="Código postal">
          <div class="envio-data">
            Ingresa tu código postal para calcular el costo de envío
          </div>
          <div class="envio-data">
            Agregá un punto de envío o retiro
            <span class="envio-data-clickable">desde acá</span>
          </div>
        </div>
        <div id="opciones-envio">
          <div class="envio-opcion">
            <img class="envio-opcion-img" src="./imgs/logo-oca.png" alt="">
            <div class="envio-opcion-texto">DOMICILIO</div>
          </div>
          <div class="envio-opcion">
            <img class="envio-opcion-img" src="./imgs/logo-oca.png" alt="">
            <div class="envio-opcion-texto">SUCURSAL</div>
          </div>
          <div class="envio-opcion">
            <div class="envio-opcion-texto">MENSAJERIA</div>
          </div>
        </div>
        <div class="envio-opcion-dinero">$4.000</div>
      </div>
    </div>
    <div class="container-total">
      <div class="fs-2 fw-bold">Pago</div>
      <hr>
      <div class="row rowe">
        <div class="col">
          <div class="text-start">
            <input class="form-check-input" type="radio" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">

              Depósito o Transferencia Bancaria
            </label>
          </div>
          <div class="text-start">
            <input class="form-check-input" type="radio" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">

              Mercadopago - Tarjetas Online, PagoFacil, RapiPago
            </label>
          </div>
          <div class="text-start">
            <input class="form-check-input" type="radio" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
              Tarjetas de crédito ¡Hasta 12 cuotas!
            </label>
          </div>
          <div class="text-start">¡Importante! La cuenta desde la que transfieras debe coincidir con tu cuenta de
            facturación.</div>
        </div>
        <div id="total-text" class="col align-items-center"></div>
      </div>

    </div>

  </main>

  <?php include 'components/footer.php'; ?>
  <script src="./js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/6912da1432.js" crossorigin="anonymous"></script>
</body>

</html>