<?php
include('../../config/Crud_bd.php');

class Registro_Calidad extends Crud_bd{

    function insertar($Lote, $Alcohol, $Metanol, $AlcoholesSuperiores){
        $this->conexion_bd();
        $q1 = "INSERT INTO calidad (Lote, Azucares, Madurez, TamañoMateria) VALUES (:Lote, :Alcohol, :Metanol, :AlsoholesSuperiores)";
        $parametros = [":Lote" => $Lote, ":Azucares" => $Alcohol, ":Madurez" => $Metanol, ":Materia" => $AlcoholesSuperiores];
        $ejecucion = $this->insertar_eliminar_actualizar($q1, $parametros);
        $this->cerrar_conexion();
        return $ejecucion;
    }

}