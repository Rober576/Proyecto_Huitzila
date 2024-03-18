<?php
include('../../../config/Crud_bd.php');

class MostrarMez extends Crud_bd {
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT * FROM registromezcal";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($busqueda){
        $query = "SELECT * FROM registromezcal WHERE Lote LIKE :busqueda OR Tanque LIKE :busqueda OR IDCategoria LIKE :busqueda OR IDClase LIKE :busqueda OR Edad LIKE :busqueda OR NombrePlanta LIKE :especie ";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    function buscar_datos($id){
        echo $id;
        $this->conexion_bd();
        $consulta = "SELECT * FROM registromezcal WHERE Lote='$id'";
        $resultados = $this->mostrar($consulta);
        $this->cerrar_conexion();
        return $resultados;
    }
}
