<?php
include('../../config/Crud_bd.php');

class Registro_CC
{
    private $base;

    function conexion()
    {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function insertar($Clave)
{
    
    $q1 = "INSERT INTO analisisdestilado (Clave)
            VALUES(:Clave)";
    $a1 = [
        ":Clave" => $Clave,

    ];
    $querry = $q1;
    $parametros = $a1;

    $this->base->insertar_eliminar_actualizar($querry, $parametros);
    $this->base->cerrar_conexion();
    echo json_encode('exito');
}

}