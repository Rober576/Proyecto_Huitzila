<?php
include('../../config/Crud_bd.php');

class Modificar_Contraseña extends Crud_bd
{
    private $base;

    function conexion()
    {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function insertar($correo, $contra)
    {
        $q1 = "UPDATE usuarios 
       SET Password = :Password 
       WHERE Correo = :Correo";

        $a1 = [":Password" => $contra, ":Correo" => $correo];

        $querry = $q1;
        $parametros = $a1;

        $this->base->insertar_eliminar_actualizar($querry, $parametros);

        $this->cerrar_conexion();
        //return $ejecucion;
    }
}

?>