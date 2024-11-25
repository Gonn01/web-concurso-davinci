<?php
class Categoria
{
    private $nombre;
    private $productos = [];

    public function __construct($nombre)
    {
        $this->nombre = $nombre;
    }

    public function agregarProducto(Producto $producto)
    {
        $this->productos[] = $producto;
    }

    public function getProductos()
    {
        return $this->productos;
    }
}