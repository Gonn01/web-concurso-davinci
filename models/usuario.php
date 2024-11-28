<?php
class Usuario
{
    private $id;
    private $nombre;
    private $apellido;
    private $email;
    private $contraseña;

    private $rol;
    public function __construct($id, $nombre, $apellido, $email, $contraseña)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->email = $email;
        $this->contraseña = $contraseña;
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
}