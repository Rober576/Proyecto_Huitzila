<?php
include('../../../../config/Crud_bd.php');

class Mostrar {
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function buscador($claveplantacion){{
        $query = "SELECT IdActividad, Fecha, Costo, NumeracionActividad, Descripcion, Semana FROM actividadplantacion WHERE ClavePlantacion= :codigoP";
        $resultados = $this->base->mostrar($query, [":codigoP" => $claveplantacion]);
        $this->base->cerrar_conexion();
        return $resultados;
    }   
    }

    function getInfo_ActividadR($Num) {
        $query = "SELECT Actividad FROM actividadespredios WHERE IdActividad = :id LIMIT 1";
        $resultados = $this->base->mostrar($query, [":id" => $Num]);
        if ($resultados) {
            $primerResultado = reset($resultados); 
            return $primerResultado['Actividad'];
        } else {
            return null;
        }
    }

}