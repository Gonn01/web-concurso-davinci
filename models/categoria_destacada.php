<?php
class CategoriaDestacada implements JsonSerializable
{
    private $id;
    private $title;
    private $description;
    private $color;
    private $images;
    public function __construct($id, $title, $description, $color, $images)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->color = $color;
        $this->images = $images;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getColor()
    {
        return $this->color;
    }

    public function getImages()
    {
        return $this->images;
    }

    public function jsonSerialize(): mixed
    {
        return [
            'id' => $this->getId(),
            'title' => $this->getTitle(),
            'description' => $this->getDescription(),
            'color' => $this->getColor(),
            'images' => $this->getImages(),
        ];
    }
}
