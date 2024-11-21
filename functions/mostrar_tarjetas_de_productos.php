<?php
include 'db_connection.php';
function mostrarTarjetasDeProductos($idTipoProducto)
{
    $query = "SELECT p.nombre AS producto, c.nombre AS categoria, p.precio, p.url_imagen, p.cantidad_disponible
      FROM productos p
      INNER JOIN categoria c ON p.categoria_id = c.id
      WHERE p.tipo_de_producto_id = $idTipoProducto
      ORDER BY c.nombre;";

    $result = executeQuery($query);

    foreach ($result as $productoData) {
        // Armo un producto
        $producto = new Producto(
            $productoData['producto'],
            $productoData['precio'],
            $productoData['sku'],
            $productoData['url_imagen'],
            $productoData['cantidad_disponible']
        );

        // Armo una categoria
        $categoria = $productoData['categoria'];

        // Si la categoria no existe dentro del array, la creo
        if (!isset($categorias[$categoria])) {
            $categorias[$categoria] = new Categoria($categoria);
        }

        // le agrego el producto
        $categorias[$categoria]->agregarProducto($producto);
    }


    foreach ($categorias as $categoria) {
        $cantidad = count($categoria->productos);

        echo "<div class='categoria-container'>
                <div class='py-4 text-center'>
                    <h3 class='px-4 fs-2 fw-bold'>$categoria->nombre</h3>
                    <p class='categoria-resultados px-4'>$cantidad resultados</p>
                </div>
                <div class='categoria-wrapper'>";
        foreach ($categoria->productos as $producto) {
            echo "<div class='tarjeta'><img class='card-img-top' src=\"{$producto->url_imagen}\" alt=\"{$producto->nombre}\">
                    <div class='card-body'>
                        <h5 class='card-title'>$producto->nombre</h5>
                        <p class='card-text'>$&nbsp;$producto->precio</p><button class='boton btn-tienda'>Comprar</button>
                    </div>
                  </div>";
        }
        echo "</div>
              </div>
            </div>";
    }
}