<?php
include('../../../../config/Crud_bd.php');

class Mostrar {
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }



    function getInfo_TipoPlantas($ClaveP) {
        $query = "SELECT NombrePlanta FROM tipoplantas WHERE ClavePlantacion = :id LIMIT 1";
        $resultados = $this->base->mostrar($query, [":id" => $ClaveP]);
        if ($resultados) {
            $primerResultado = reset($resultados); 
            return $primerResultado['NombrePlanta'];
        } else {
            return null;
        }
    }
    function getInfo_Plantacionpredio($ClaveP) {
        $query = "SELECT CodigoArea FROM plantacionpredio WHERE ClavePlantacion = :id LIMIT 1";
        $resultados = $this->base->mostrar($query, [":id" => $ClaveP]);
        if ($resultados) {
            $primerResultado = reset($resultados); 
            return $primerResultado['CodigoArea'];
        } else {
            return null;
        }
    }

    function getInfo_Predios($CodigoA) {
        $query = "SELECT Nombre FROM predios WHERE CodigoArea = :id LIMIT 1";
        $resultados = $this->base->mostrar($query, [":id" => $CodigoA]);
        if ($resultados) {
            $primerResultado = reset($resultados); 
            return $primerResultado['Nombre'];
        } else {
            return null;
        }
    }

    

    function getInfo_Plantaciones(){
        $query = "SELECT * FROM plantaciones";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }



    function buscador($busqueda){
        $query = "SELECT * FROM plantaciones WHERE ClavePlantacion LIKE :busqueda OR Superficie LIKE :busqueda OR CantidadPlantas LIKE :busqueda OR Fecha LIKE :busqueda ";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
}

$obj = new Mostrar();
$obj->instancias();