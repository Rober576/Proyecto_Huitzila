<?php
include('../../../../config/Crud_bd.php');

class Mostrar extends Crud_bd {
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT * FROM plagas";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($busqueda){
        $query = "SELECT * FROM plagas WHERE Nombre LIKE :busqueda OR Cientifico LIKE :busqueda OR Descripcion LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscar_datos($id){
        $this->conexion_bd();
        $consulta = "SELECT * FROM plagas WHERE Nombre='$id'";
        $resultados = $this->mostrar($consulta);
        $this->cerrar_conexion();
        return $resultados;
    }
}

$obj = new Mostrar();
$obj->instancias();
