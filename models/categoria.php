<?php
class Categoria
{
    public $nombre;
    public $productos = [];

    public function __construct($nombre)
    {
        $this->nombre = $nombre;
    }

    public function agregarProducto(Producto $producto)
    {
        $this->productos[] = $producto;
    }
}