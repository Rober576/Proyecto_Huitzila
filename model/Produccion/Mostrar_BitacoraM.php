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
        $query = "SELECT * FROM bitacoramezcal WHERE  Lote LIKE :busqueda ";
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