<?php
include('../../../../config/Crud_bd.php');

class Mostrar {
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }



    function getInfo_TipoPlantas($Plantacion) {
        $query = "SELECT NombrePlanta FROM tipoplantas WHERE ClavePlantacion = :id LIMIT 1";
        $resultados = $this->base->mostrar($query, [":id" => $Plantacion]);
        if ($resultados) {
            $primerResultado = reset($resultados); 
            return $primerResultado['NombrePlanta'];
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



    function buscador($codigoArea) {
        $query = "SELECT ClavePlantacion FROM plantacionpredio WHERE CodigoArea = :codigoArea";
        $resultados = $this->base->mostrar($query, [":codigoArea" => $codigoArea]);
        $this->base->cerrar_conexion();
        return $resultados;


    }

    function getInfo_Plantaciones($claveplantacion) {
        $query = "SELECT Superficie, CantidadPlantas, Fecha FROM plantaciones WHERE ClavePlantacion= :codigoP";
        $resultados = $this->base->mostrar($query, [":codigoP" => $claveplantacion]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
}

$obj = new Mostrar();
$obj->instancias();