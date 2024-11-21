<?php
class Producto
{
    public $nombre;
    public $precio;
    public $sku;
    public $urlImagen;
    public $cantidadDisponible;

    public function __construct($nombre, $precio, $sku, $url_imagen, $cantidad_disponible)
    {
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->sku = $sku;
        $this->urlImagen = $url_imagen;
        $this->cantidadDisponible = $cantidad_disponible;
    }
}

