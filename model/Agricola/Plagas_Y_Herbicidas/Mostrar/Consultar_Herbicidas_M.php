<?php
include('../../../../config/Crud_bd.php');

class Mostrar {
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT * FROM herbicidas";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($busqueda){
        $query = "SELECT * FROM herbicidas WHERE NombreHerbicidas LIKE :busqueda OR Fabricante LIKE :busqueda OR Descripcion LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
}

$obj = new Mostrar();
$obj->instancias();
