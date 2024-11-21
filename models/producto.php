<?php
class Producto
{
    public $nombre;
    public $precio;
    public $url_imagen;
    public $cantidadDisponible;

    public function __construct($nombre, $precio, $url_imagen, $cantidadDisponible)
    {
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->url_imagen = $url_imagen;
        $this->cantidadDisponible = $cantidadDisponible;
    }
}

