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
                    <button type="button" class="boton btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Modificar Stock
                    </button>
                </div>
            </div>
        </div>
        <div class="m-5">
            <h2>PRODUCTOS</h2>
            <div id="lista-productos-inventario"></div>
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
                        $result = executeQuery($query);
                        foreach ($result as $producto) {
                            $producto = new Producto(
                                $producto['nombre'],
                                $producto['precio'],
                                $producto['sku'],
                                $producto['url_imagen'],
                                $producto['cantidad_disponible']
                            );
                            $productos[] = $producto;
                        }
                        foreach ($productos as $producto) {
                            echo "<tr>
                                <td class='align-middle'>$producto->sku</td>
                                <td class='align-middle'>$producto->nombre</td>
                                <td class='align-middle'>$$producto->precio</td>
                                <td class='align-middle'>$producto->cantidadDisponible</td>
                                <td><img style='width: 50px;height: 75px' src=\"$producto->urlImagen\"</td>
                                <td class='align-middle'>
                                    <i class='bi bi-caret-up-fill fs-3 text-success-emphasis me-3'style='cursor: pointer;'></i>
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
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modificacion de stock</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <label for="sku" class="col-form-label">SKU:</label>
                            <input type="text" class="form-control" id="sku">
                        </div>
                        <div class="col mb-3">
                            <label for="cantidad" class="col-form-label">Cantidad:</label>
                            <input type="number" class="form-control" id="cantidad">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-success-emphasis">Aplicar</button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>