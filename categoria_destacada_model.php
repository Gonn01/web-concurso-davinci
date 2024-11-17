<?php
class CategoriaDestacada
{
    public $id;
    public $title;
    public $description;
    public $color;

    public function __construct($id, $title, $description, $color)
    {
        $this->id = $id;
        $this->title = $title;
        $this->$description = $description;
        $this->color = $color;
    }
}