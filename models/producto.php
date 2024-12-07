<?php
class Producto implements JsonSerializable
{
    private $id;
    private $nombre;
    private $precio;
    private $sku;
    private $urlImagen;
    private $cantidadDisponible;
    private $idCategoria;

    public function __construct($id, $nombre, $precio, $sku, $url_imagen, $cantidad_disponible, $idCategoria)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->sku = $sku;
        $this->urlImagen = $url_imagen;
        $this->cantidadDisponible = $cantidad_disponible;
        $this->idCategoria = $idCategoria;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getPrecio()
    {
        return $this->precio;
    }

    public function getSku()
    {
        return $this->sku;
    }

    public function getUrlImagen()
    {
        return $this->urlImagen;
    }

    public function getCantidadDisponible()
    {
        return $this->cantidadDisponible;
    }

    public function getIdCategoria()
    {
        return $this->idCategoria;
    }

    // Implementación de jsonSerialize
    public function jsonSerialize(): mixed
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'precio' => $this->precio,
            'sku' => $this->sku,
            'urlImagen' => $this->urlImagen,
            'cantidadDisponible' => $this->cantidadDisponible,
            'idCategoria' => $this->idCategoria
        ];
    }
}

