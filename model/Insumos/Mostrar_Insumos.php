<?php

include('../../config/Crud_bd.php');

class MostrarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }
    
    function getInsumos(){
        $query = "SELECT * FROM insumos";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    
    function buscador($busqueda){
        $query = "SELECT * FROM insumos WHERE IDInsumo LIKE :busqueda OR NombreInsumo LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
    }

}

$obj = new MostrarCampos();
$obj->instancias();

?>
