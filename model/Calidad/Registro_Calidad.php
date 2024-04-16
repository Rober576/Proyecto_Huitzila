<?php
include('../../config/Crud_bd.php');

class Registro_Calidad extends Crud_bd{

    function insertar($Lote, $Azucares, $Madurez, $Materia){
        $this->conexion_bd();
        $q1 = "INSERT INTO calidad (Lote, Azucares, Madurez, TamañoMateria) VALUES (:Lote, :Azucares, :Madurez, :Materia)";
        $parametros = [":Lote" => $Lote, ":Azucares" => $Azucares, ":Madurez" => $Madurez, ":Materia" => $Materia];
        $ejecucion = $this->insertar_eliminar_actualizar($q1, $parametros);
        $this->cerrar_conexion();
        return $ejecucion;
    }

}