<?php
class ImagenCategoriaDestacada
{
    private $id;
    private $url;

    public function __construct($id, $url)
    {
        $this->id = $id;
        $this->url = $url;
    }

}