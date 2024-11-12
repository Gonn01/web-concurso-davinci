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
  include_once 'header.php';
  require_once 'db_connection.php';
  ?>

  <main>
    <div>
      <div class="fadein fade-desktop" style="width:1920px; height: 1000px"></div>
      <div class="fadein fade-desktop">
        <img class="f3" src="imgs/2.webp" width="1920px" height="1000px">
        <img class="f2" src="imgs/1.webp" width="1920px" height="1000px">
        <img class="f1" src="imgs/5.jpg" width="1920px" height="1000px">
      </div>
      <div class="fadein fade-mobile">
        <img class="f3" src="imgs/2-phone.png" width="400px" height="800px">
        <img class="f2" src="imgs/1-phone.jpeg" width="400px" height="800px">
        <img class="f1" src="imgs/3-phone.jpg" width="400px" height="800px">
      </div>
      <svg id="waves" viewBox="0 0 900 600" preserveAspectRatio="none">
        <path
          d="M0 504L6.5 506.3C13 508.7 26 513.3 39 517.2C52 521 65 524 78 522.3C91 520.7 104 514.3 117.2 511.7C130.3 509 143.7 510 156.8 516C170 522 183 533 196 537.5C209 542 222 540 235 533.3C248 526.7 261 515.3 274 510.3C287 505.3 300 506.7 313 511.3C326 516 339 524 352 523.3C365 522.7 378 513.3 391 509.7C404 506 417 508 430.2 514C443.3 520 456.7 530 469.8 528.7C483 527.3 496 514.7 509 512.8C522 511 535 520 548 524.2C561 528.3 574 527.7 587 525.2C600 522.7 613 518.3 626 517C639 515.7 652 517.3 665 517.3C678 517.3 691 515.7 704 517.3C717 519 730 524 743.2 524.2C756.3 524.3 769.7 519.7 782.8 521.5C796 523.3 809 531.7 822 529.5C835 527.3 848 514.7 861 509C874 503.3 887 504.7 893.5 505.3L900 506L900 601L893.5 601C887 601 874 601 861 601C848 601 835 601 822 601C809 601 796 601 782.8 601C769.7 601 756.3 601 743.2 601C730 601 717 601 704 601C691 601 678 601 665 601C652 601 639 601 626 601C613 601 600 601 587 601C574 601 561 601 548 601C535 601 522 601 509 601C496 601 483 601 469.8 601C456.7 601 443.3 601 430.2 601C417 601 404 601 391 601C378 601 365 601 352 601C339 601 326 601 313 601C300 601 287 601 274 601C261 601 248 601 235 601C222 601 209 601 196 601C183 601 170 601 156.8 601C143.7 601 130.3 601 117.2 601C104 601 91 601 78 601C65 601 52 601 39 601C26 601 13 601 6.5 601L0 601Z"
          fill="#ffa24c" style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"></path>
        <path
          d="M0 551L6.5 548.5C13 546 26 541 39 538.2C52 535.3 65 534.7 78 532.8C91 531 104 528 117.2 525.8C130.3 523.7 143.7 522.3 156.8 523.2C170 524 183 527 196 527.2C209 527.3 222 524.7 235 527.8C248 531 261 540 274 541.2C287 542.3 300 535.7 313 534.7C326 533.7 339 538.3 352 539.3C365 540.3 378 537.7 391 535.2C404 532.7 417 530.3 430.2 531C443.3 531.7 456.7 535.3 469.8 538.2C483 541 496 543 509 544C522 545 535 545 548 541.3C561 537.7 574 530.3 587 526.8C600 523.3 613 523.7 626 526C639 528.3 652 532.7 665 534.8C678 537 691 537 704 539.8C717 542.7 730 548.3 743.2 550.5C756.3 552.7 769.7 551.3 782.8 551.2C796 551 809 552 822 548C835 544 848 535 861 534.8C874 534.7 887 543.3 893.5 547.7L900 552L900 601L893.5 601C887 601 874 601 861 601C848 601 835 601 822 601C809 601 796 601 782.8 601C769.7 601 756.3 601 743.2 601C730 601 717 601 704 601C691 601 678 601 665 601C652 601 639 601 626 601C613 601 600 601 587 601C574 601 561 601 548 601C535 601 522 601 509 601C496 601 483 601 469.8 601C456.7 601 443.3 601 430.2 601C417 601 404 601 391 601C378 601 365 601 352 601C339 601 326 601 313 601C300 601 287 601 274 601C261 601 248 601 235 601C222 601 209 601 196 601C183 601 170 601 156.8 601C143.7 601 130.3 601 117.2 601C104 601 91 601 78 601C65 601 52 601 39 601C26 601 13 601 6.5 601L0 601Z"
          fill="#ffb978" style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"></path>
        <path
          d="M0 546L6.5 545C13 544 26 542 39 543.3C52 544.7 65 549.3 78 550.5C91 551.7 104 549.3 117.2 547.8C130.3 546.3 143.7 545.7 156.8 548.2C170 550.7 183 556.3 196 559.8C209 563.3 222 564.7 235 563.5C248 562.3 261 558.7 274 554.7C287 550.7 300 546.3 313 544.7C326 543 339 544 352 547.8C365 551.7 378 558.3 391 558.7C404 559 417 553 430.2 552.3C443.3 551.7 456.7 556.3 469.8 557.2C483 558 496 555 509 551.5C522 548 535 544 548 543.7C561 543.3 574 546.7 587 547.8C600 549 613 548 626 545.7C639 543.3 652 539.7 665 542C678 544.3 691 552.7 704 555.3C717 558 730 555 743.2 555.5C756.3 556 769.7 560 782.8 560C796 560 809 556 822 551.8C835 547.7 848 543.3 861 545.8C874 548.3 887 557.7 893.5 562.3L900 567L900 601L893.5 601C887 601 874 601 861 601C848 601 835 601 822 601C809 601 796 601 782.8 601C769.7 601 756.3 601 743.2 601C730 601 717 601 704 601C691 601 678 601 665 601C652 601 639 601 626 601C613 601 600 601 587 601C574 601 561 601 548 601C535 601 522 601 509 601C496 601 483 601 469.8 601C456.7 601 443.3 601 430.2 601C417 601 404 601 391 601C378 601 365 601 352 601C339 601 326 601 313 601C300 601 287 601 274 601C261 601 248 601 235 601C222 601 209 601 196 601C183 601 170 601 156.8 601C143.7 601 130.3 601 117.2 601C104 601 91 601 78 601C65 601 52 601 39 601C26 601 13 601 6.5 601L0 601Z"
          fill="#ffd0a5" style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"></path>
        <path
          d="M0 573L6.5 571.3C13 569.7 26 566.3 39 565.7C52 565 65 567 78 565.3C91 563.7 104 558.3 117.2 557C130.3 555.7 143.7 558.3 156.8 561.8C170 565.3 183 569.7 196 568.5C209 567.3 222 560.7 235 558.5C248 556.3 261 558.7 274 562.5C287 566.3 300 571.7 313 571.8C326 572 339 567 352 564.5C365 562 378 562 391 562.3C404 562.7 417 563.3 430.2 564.8C443.3 566.3 456.7 568.7 469.8 570.2C483 571.7 496 572.3 509 570.8C522 569.3 535 565.7 548 563.2C561 560.7 574 559.3 587 561.3C600 563.3 613 568.7 626 568.2C639 567.7 652 561.3 665 558.5C678 555.7 691 556.3 704 558.8C717 561.3 730 565.7 743.2 567.3C756.3 569 769.7 568 782.8 566C796 564 809 561 822 559.2C835 557.3 848 556.7 861 558.5C874 560.3 887 564.7 893.5 566.8L900 569L900 601L893.5 601C887 601 874 601 861 601C848 601 835 601 822 601C809 601 796 601 782.8 601C769.7 601 756.3 601 743.2 601C730 601 717 601 704 601C691 601 678 601 665 601C652 601 639 601 626 601C613 601 600 601 587 601C574 601 561 601 548 601C535 601 522 601 509 601C496 601 483 601 469.8 601C456.7 601 443.3 601 430.2 601C417 601 404 601 391 601C378 601 365 601 352 601C339 601 326 601 313 601C300 601 287 601 274 601C261 601 248 601 235 601C222 601 209 601 196 601C183 601 170 601 156.8 601C143.7 601 130.3 601 117.2 601C104 601 91 601 78 601C65 601 52 601 39 601C26 601 13 601 6.5 601L0 601Z"
          fill="#ffe7d2" style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"></path>
        <path
          d="M0 588L6.5 588C13 588 26 588 39 586.3C52 584.7 65 581.3 78 581C91 580.7 104 583.3 117.2 583.2C130.3 583 143.7 580 156.8 578.2C170 576.3 183 575.7 196 575.5C209 575.3 222 575.7 235 575.5C248 575.3 261 574.7 274 575.7C287 576.7 300 579.3 313 580.8C326 582.3 339 582.7 352 582.7C365 582.7 378 582.3 391 580.7C404 579 417 576 430.2 574.3C443.3 572.7 456.7 572.3 469.8 572.7C483 573 496 574 509 574.5C522 575 535 575 548 576.8C561 578.7 574 582.3 587 581.5C600 580.7 613 575.3 626 573.5C639 571.7 652 573.3 665 575.7C678 578 691 581 704 580.2C717 579.3 730 574.7 743.2 573.2C756.3 571.7 769.7 573.3 782.8 574.7C796 576 809 577 822 578.2C835 579.3 848 580.7 861 580.2C874 579.7 887 577.3 893.5 576.2L900 575L900 601L893.5 601C887 601 874 601 861 601C848 601 835 601 822 601C809 601 796 601 782.8 601C769.7 601 756.3 601 743.2 601C730 601 717 601 704 601C691 601 678 601 665 601C652 601 639 601 626 601C613 601 600 601 587 601C574 601 561 601 548 601C535 601 522 601 509 601C496 601 483 601 469.8 601C456.7 601 443.3 601 430.2 601C417 601 404 601 391 601C378 601 365 601 352 601C339 601 326 601 313 601C300 601 287 601 274 601C261 601 248 601 235 601C222 601 209 601 196 601C183 601 170 601 156.8 601C143.7 601 130.3 601 117.2 601C104 601 91 601 78 601C65 601 52 601 39 601C26 601 13 601 6.5 601L0 601Z"
          fill="white" style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"></path>
      </svg>
    </div>
    <div id="entrevistas-section">
      <img class="entrevistas-img image-i" src="imgs/entrevista.png" alt="">
      <div class="entrevistas-text">
        <div class="entrevistas-title">#Entrevistaquid</div>
        <div class="entrevistas-description">Entrevista a Jorge Fernández Díaz</div>
        <a class="boton">Contactanos</a>
      </div>
    </div>
    <h2 class="section-title">ENCONTRANOS EN TODO BUENOS AIRES</h2>

    <div class="mapa"><iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1lsyFGgazkGDyvTNj0G_M9R6St2GLDyI&ehbc=2E312F&noprof=1"
        width="1250" height="480"></iframe></div>

    <h2 class="section-title">LAS CATEGORÍAS MAS DESTACADAS</h2>

    <div id="secciones">
      <?php
      require_once 'categoria_destacada_model.php';

      $sql = "SELECT * FROM categoria_destacada";

      $result = executeQuery($sql);

      $categorias = [];

      foreach ($result as $categoria_data) {
        $categoria = new Categoria(
          $categoria_data['id'],
          $categoria_data['title'],
          $categoria_data['description'],
          $categoria_data['color']
        );
        $categorias[] = $categoria;
      }

      $backgroundColors = ['#ffffff'];
      foreach ($categorias as $categoria) {
        array_push($backgroundColors, $categoria->color);
      }

      for (
        $i = 0;
        $i < count($categorias);
        $i++
      ) {

        $categoria = $categorias[$i];

        $sqlImgs = "SELECT img_categoria_destacada.url
        FROM img_categoria_destacada
        JOIN categoria_destacada_has_img_categoria_destacada ON img_categoria_destacada.id = categoria_destacada_has_img_categoria_destacada.img_categoria_destacada_id
        WHERE categoria_destacada_has_img_categoria_destacada.categoria_destacada_id = $categoria->id;
        ";

        $resultImgs = executeQuery($sqlImgs);
        $urls = array_map(function ($img) {
          return $img['url'];
        }, $resultImgs);
        $imagenes = json_encode($urls);

        $lastColor = end($backgroundColors);

        $html = "
        <div class='container-fluid mx-auto p-0'>
        <svg class='svg' width='1920' height='99' viewBox='0 0 1920 99' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' preserveAspectRatio='none'>
          <rect x='0' y='0' width='1920' height='99' fill=\"{$backgroundColors[$i]}\">
          </rect>
          <path d='M0 32L21.4 35.5C42.6 39 85.4 46 128 46.8C170.6 47.7 213.4 42.3 256 40C298.6 37.7 341.4 38.3 384 41.2C426.6 44 469.4 49 512 45.7C554.6 42.3 597.4 30.7 640 26.7C682.6 22.7 725.4 26.3 768 32.3C810.6 38.3 853.4 46.7 896 49.2C938.6 51.7 981.4 48.3 1024 41.8C1066.6 35.3 1109.4 25.7 1152 25.3C1194.6 25 1237.4 34 1280 37.3C1322.6 40.7 1365.4 38.3 1408 33.2C1450.6 28 1493.4 20 1536 18.7C1578.6 17.3 1621.4 22.7 1664 23.5C1706.6 24.3 1749.4 20.7 1792 16C1834.6 11.3 1877.4 5.69999 1898.6 2.79999L1920 0V99H1898.6C1877.4 99 1834.6 99 1792 99C1749.4 99 1706.6 99 1664 99C1621.4 99 1578.6 99 1536 99C1493.4 99 1450.6 99 1408 99C1365.4 99 1322.6 99 1280 99C1237.4 99 1194.6 99 1152 99C1109.4 99 1066.6 99 1024 99C981.4 99 938.6 99 896 99C853.4 99 810.6 99 768 99C725.4 99 682.6 99 640 99C597.4 99 554.6 99 512 99C469.4 99 426.6 99 384 99C341.4 99 298.6 99 256 99C213.4 99 170.6 99 128 99C85.4 99 42.6 99 21.4 99H0V32Z' fill={$categoria->color}>
          </path>
        </svg>
        <div class='row categoria-destacada categoria-responsive flex-row' style='background-color: $categoria->color;'>
          <div class='col my-auto col-responsive'>
            <div class='categoria-description'>
              <h2 class='categoria-destacada-title'>
                $categoria->title
              </h2>
              <p class='categoria-destacada-description'>
                $categoria->description
              </p>
              <a class='boton-outlined' id='btn-ver-mas' href='./libros.php' style='color: white; background-color: rgb(0, 87, 53);'>
                VER MÁS
              </a>
              <div style='height: 30px;'>
              </div>
            </div>
          </div>
          <div class='col col-responsive cat-dest'>
            <img src=\"{$urls[0]}\" alt='' class='categoria-destacada-item image-i' style='box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 10px 0px;'>
            </img> </div>
            <div class='col col-responsive cat-dest'>
              <img src=\"{$urls[1]}\" alt='' class='categoria-destacada-item image-i' style='box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 10px 0px;'>
              </img> </div>
              <div class='col col-responsive cat-dest'>
                <img src=\"{$urls[2]}\" alt='' class='categoria-destacada-item image-i' style='box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 10px 0px;'>
                </img>
              </div>
              <div class='carousel carousel2 slide' id='carouselDestacadas0' style='background-color: rgb(254, 219, 192);'>
                <div class='carousel-indicators'>
                  <button class='carousel-indicator active' data-bs-target='#carouselDestacadas0' data-bs-slide-to='0' type='button'>
                  </button>
                  <button class='carousel-indicator' data-bs-target='#carouselDestacadas0' data-bs-slide-to='1' type='button'>
                  </button>
                  <button class='carousel-indicator' data-bs-target='#carouselDestacadas0' data-bs-slide-to='2' type='button'>
                  </button>
                </div>
                <div class='carousel-inner'>
                  <div class='carousel-item image-i text-center active' style='background-color: rgb(254, 219, 192);'>
                    <img src='imgs/manga1.png'>
                    </img>
                    <div class='carousel-item image-i text-center' style='background-color: rgb(254, 219, 192);'>
                      <img src='imgs/manga2.png'>
                      </img>
                      <div class='carousel-item image-i text-center' style='background-color: rgb(254, 219, 192);'>
                        <img src='imgs/manga3.png'>
                        </img>
                      </div>
                      <button class='carousel-control-prev' type='button' data-bs-target='#carouselDestacadas0' data-bs-slide='prev'>
                        <span class='carousel-control-prev-icon' aria-hidden='true'>
                        </span>
                        <span class='visually-hidden'>
                          Previous
                        </span>
                      </button>
                      <button class='carousel-control-next' type='button' data-bs-target='#carouselDestacadas0' data-bs-slide='next'>
                        <span class='carousel-control-next-icon' aria-hidden='true'>
                        </span>
                        <span class='visually-hidden'>
                          Next
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        ";
        echo $html;

      }
      echo "<svg class='svg' width='1920' height='99' viewBox='0 0 1920 99' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' preserveAspectRatio='none' style='transform: rotate(180deg);'>
          <rect x='0' y='0' width='1920' height='99' fill='#ffffff'></rect>
          <path d='M0 32L21.4 35.5C42.6 39 85.4 46 128 46.8C170.6 47.7 213.4 42.3 256 40C298.6 37.7 341.4 38.3 384 41.2C426.6 44 469.4 49 512 45.7C554.6 42.3 597.4 30.7 640 26.7C682.6 22.7 725.4 26.3 768 32.3C810.6 38.3 853.4 46.7 896 49.2C938.6 51.7 981.4 48.3 1024 41.8C1066.6 35.3 1109.4 25.7 1152 25.3C1194.6 25 1237.4 34 1280 37.3C1322.6 40.7 1365.4 38.3 1408 33.2C1450.6 28 1493.4 20 1536 18.7C1578.6 17.3 1621.4 22.7 1664 23.5C1706.6 24.3 1749.4 20.7 1792 16C1834.6 11.3 1877.4 5.69999 1898.6 2.79999L1920 0V99H1898.6C1877.4 99 1834.6 99 1792 99C1749.4 99 1706.6 99 1664 99C1621.4 99 1578.6 99 1536 99C1493.4 99 1450.6 99 1408 99C1365.4 99 1322.6 99 1280 99C1237.4 99 1194.6 99 1152 99C1109.4 99 1066.6 99 1024 99C981.4 99 938.6 99 896 99C853.4 99 810.6 99 768 99C725.4 99 682.6 99 640 99C597.4 99 554.6 99 512 99C469.4 99 426.6 99 384 99C341.4 99 298.6 99 256 99C213.4 99 170.6 99 128 99C85.4 99 42.6 99 21.4 99H0V32Z' fill=\"{$lastColor}\"></path>
        </svg>"
        ?>
    </div>

    <h2 class="section-title">MÉTODOS DE PAGO</h2>
    <div id="section-metodos-de-pago" class="container-sm">
      <div class="row">
        <div class="col mx-auto">
          <div class="metodo-de-pago">
            <div>Compra desde cualquier lugar</div>
            <div class="metodo-de-pago-img-wrapper">
              <img class="metodo-de-pago-img" src="imgs/metodo_pago1.png" alt="">
            </div>
            <div>
              Sumá los productos que quieras al carrito.<br>
              Te los llevamos hasta dónde estés.
            </div>
            <a href="./404.php" class="boton-outlined my-2">Conocer más</a>
          </div>
        </div>
        <div class="col mx-auto">
          <div class="metodo-de-pago">
            <div>Compra desde cualquier lugar</div>
            <div class="metodo-de-pago-img-wrapper">
              <img class="metodo-de-pago-img" src="imgs/metodo_pago2.png" alt="">
            </div>
            <div>
              Sumá los productos que quieras al carrito.<br>
              Te los llevamos hasta dónde estés.
            </div>
            <a href="./404.php" class="boton-outlined my-2">Conocer más</a>
          </div>
        </div>
        <div class="col mx-auto">
          <div class="metodo-de-pago">
            <div>Compra desde cualquier lugar</div>
            <div class="metodo-de-pago-img-wrapper">
              <img class="metodo-de-pago-img" src="imgs/metodo_pago3.png" alt="">
            </div>

            <div>
              Sumá los productos que quieras al carrito.<br>
              Te los llevamos hasta dónde estés.
            </div>
            <a href="./404.php" class="boton-outlined my-2">Conocer más</a>
          </div>
        </div>
      </div>
    </div>
    <div id="carouselMetodosDePago" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselMetodosDePago" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselMetodosDePago" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselMetodosDePago" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="metodo-de-pago">
            <div class="metodo-de-pago-text">Compra desde cualquier lugar</div>
            <div class="metodo-de-pago-img-wrapper">
              <img class="metodo-de-pago-img" src="imgs/metodo_pago3.png" alt="">
            </div>

            <div class="metodo-de-pago-text">
              Sumá los productos que quieras al carrito.<br>
              Te los llevamos hasta dónde estés.
            </div>
            <a href="./404.php" class="boton-outlined my-2">Conocer más</a>
          </div>
        </div>
        <div class="carousel-item">
          <div class="metodo-de-pago">
            <div class="metodo-de-pago-text">Compra desde cualquier lugar</div>
            <div class="metodo-de-pago-img-wrapper">
              <img class="metodo-de-pago-img" src="imgs/metodo_pago3.png" alt="">
            </div>

            <div class="metodo-de-pago-text">
              Sumá los productos que quieras al carrito.<br>
              Te los llevamos hasta dónde estés.
            </div>
            <a href="./404.php" class="boton-outlined my-2">Conocer más</a>
          </div>
        </div>
        <div class="carousel-item">
          <div class="metodo-de-pago">
            <div class="metodo-de-pago-text">Compra desde cualquier lugar</div>
            <div class="metodo-de-pago-img-wrapper">
              <img class="metodo-de-pago-img" src="imgs/metodo_pago3.png" alt="">
            </div>

            <div class="metodo-de-pago-text">
              Sumá los productos que quieras al carrito.<br>
              Te los llevamos hasta dónde estés.
            </div>
            <a href="./404.php" class="boton-outlined my-2">Conocer más</a>
          </div>
        </div>
      </div>
      <div style="height: 50px;"></div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselMetodosDePago" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" sty type="button" data-bs-target="#carouselMetodosDePago"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" class="footer-wave svg">
    <path fill="#202020" fill-opacity="1"
      d="M0,128L80,122.7C160,117,320,107,480,117.3C640,128,800,160,960,149.3C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
    </path>
  </svg>
  <?php include_once 'footer.php'; ?>
  <script src="./js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
</body>

</html>