<?php
include('../../config/Crud_bd.php');

class MostrarBit extends Crud_bd{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT * FROM bitacoramezcal";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($busqueda){
        $query = "SELECT * FROM bitacoramezcal WHERE Procedencia LIKE :busqueda OR Costo LIKE :busqueda OR Lote LIKE :busqueda OR FechaEntrada LIKE :busqueda OR NoGuia LIKE :busqueda OR NombrePlanta LIKE :busqueda OR KgAgave LIKE :busqueda OR Brix LIKE :busqueda OR KgArt LIKE :busqueda OR KgCoccion LIKE :busqueda OR FechaInicio LIKE :busqueda OR FechaFinal LIKE :busqueda ";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscar_datos($id){
        $this->conexion_bd();
        $consulta = "SELECT * FROM bitacoramezcal WHERE NoGuia='$id'";
        $resultados = $this->mostrar($consulta);
        $this->cerrar_conexion();
        return $resultados;
    }
}