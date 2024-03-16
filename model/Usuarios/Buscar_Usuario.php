<?php
include('../../config/Crud_bd.php');

class Buscar_usuarios
{
    private $base;

    function conexion()
    {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }


    function buscar($Clave)
    {
        $query = "SELECT * FROM usuarios WHERE campo1 LIKE :busqueda OR campo2 LIKE :busqueda OR campo3 LIKE :busqueda OR campo4 LIKE :busqueda OR campo5 LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$Clave."%"]);
        $this->base->cerrar_conexion();
        echo $_POST['consulta'];
        return $resultados;
        echo $resultados;
    }
}
