<?php
include('../../../config/Crud_bd.php');

class MostrarBit {
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
        $query = "SELECT * FROM registromezcal WHERE Lote LIKE :busqueda OR NombrePlanta LIKE :busqueda OR Tanque LIKE :busqueda OR IDClase LIKE :busqueda OR Edad LIKE :busqueda OR IDMovimiento LIKE :busqueda OR Volumen LIKE :busqueda OR Concentracion LIKE :busqueda OR DestinoSalida LIKE :busqueda OR IDCategoria LIKE :busqueda ";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
}

$obj = new MostrarBit();
$obj->instancias();
