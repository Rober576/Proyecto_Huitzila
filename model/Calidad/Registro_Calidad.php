<?php
include('../../config/Crud_bd.php');

class Registro_Calidad extends Crud_bd{

    function insertar($Lote, $Azucares, $Madurez, $Materia){
        $this->conexion_bd();
        $q1 = "INSERT INTO calidad (Lote, Azucares, Madurez, TamañoMateria) VALUES(:Lote, :Azucares, :Madurez, :TamañoMateria)";
        $a1= [":Lote"=>$Lote, ":Azucares"=>$Azucares, ":Madurez"=>$Madurez, ":TamañoMateria"=>$Materia];
        $querry = [$q1];
        $parametros = [$a1];
        $ejecucion=$this->insertar_eliminar_actualizar($querry, $parametros);
        return $ejecucion;
        $this->base->cerrar_conexion();
    }

    
}
