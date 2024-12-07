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
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Nanum+Brush+Script&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        rel="stylesheet">
</head>

<body>
    <div id="barrier">NO DISPONIBLE, POR FAVOR CAMBIE LA RESOLUCION O ENTRE DESDE OTRO DISPOSITIVO</div>
    <div style="height: 50px;"></div>
    <main>
        <div class="m-5">
            <div class="row">
                <div class="col">
                    <h1>Ajuste de stock</h1>
                </div>
                <div class="col text-end">

                </div>
            </div>
        </div>
        <div class="m-5">
            <h2>PRODUCTOS</h2>
            <div class="producto">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">SKU</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        include 'functions/db_connection.php';
                        include 'models/producto.php';

                        $query = "SELECT * FROM productos";
                        $stmt = $conn->prepare($query);
                        $stmt->execute();
                        $result = $stmt->get_result();

                        foreach ($result as $producto) {
                            $producto = new Producto(
                                $producto['id'],
                                $producto['nombre'],
                                $producto['precio'],
                                $producto['sku'],
                                $producto['url_imagen'],
                                $producto['cantidad_disponible'],
                                $producto['categoria_id']
                            );
                            $productos[] = $producto;
                        }

                        foreach ($productos as $producto) {
                            echo "<tr>
                                <td class='align-middle'>{$producto->getSku()}</td>
                                <td class='align-middle'>{$producto->getNombre()}</td>
                                <td class='align-middle'>{$producto->getPrecio()}</td>
                                <td class='align-middle'>{$producto->getCantidadDisponible()}</td>
                                <td><img style='width: 50px;height: 75px' src=\"{$producto->getUrlImagen()}\"</td>
                                <td class='align-middle'>
                                    <i class='bi bi-caret-up-fill fs-3 text-success me-3'style='cursor: pointer;'></i>
                                    <i class='bi bi-caret-down-fill fs-3 text-danger'style='cursor: pointer;'></i>
                                </td>
                            </tr>";
                        }
                        ?>

                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>