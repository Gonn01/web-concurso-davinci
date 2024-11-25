<?php
class Usuario
{
    public $id;
    public $nombre;
    public $apellido;
    public $email;
    public $contraseña;

    public $esAdmin;
    public function __construct($id, $nombre, $apellido, $email, $contraseña)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->email = $email;
        $this->contraseña = $contraseña;
    }

    public function setEsAdmin($esAdmin)
    {
        $this->esAdmin = $esAdmin;
    }
}