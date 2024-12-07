<?php
class Usuario
{
    private $id;
    private $nombre;
    private $apellido;
    private $email;
    private $contraseña;
    private $rol;
    private $telefono;
    private $urlImagen;
    public function __construct($id, $nombre, $apellido, $email, $contraseña, $telefono, $urlImagen)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->email = $email;
        $this->contraseña = $contraseña;
        $this->telefono = $telefono;
        $this->urlImagen = $urlImagen;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getApellido()
    {
        return $this->apellido;
    }

    public function getEmail()
    {
        return $this->email;
    }


    public function getRol()
    {
        return $this->rol;
    }
    public function setRol($rol)
    {
        $this->rol = $rol;
    }

    public function getTelefono()
    {
        return $this->telefono;
    }

    public function getUrlImagen()
    {
        return $this->urlImagen;
    }
}