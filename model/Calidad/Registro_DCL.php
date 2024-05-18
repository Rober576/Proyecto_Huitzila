<?php
include('../../config/Crud_bd.php');

class Registro_DCL
{
    private $base;

    function conexion()
    {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function insertar($Clave, $Lote, $PorcentajeAlcohol,  $Metanol, $AlcoholesSuperiores)
    {
       
        $query = "SELECT * FROM valoresminmax";
        $resultados = $this->base->mostrar($query);
        $resultados=$resultados[0];

        $cumplimiento=1;
        if($PorcentajeAlcohol<$resultados['ALCVolMin'] || $PorcentajeAlcohol>$resultados['ALCVolMax']) {
            $cumplimiento=2;
        }
        if($Metanol<$resultados['MetanolMin'] || $Metanol>$resultados['MetanolMax']) {
            $cumplimiento=2;
        }
        if($AlcoholesSuperiores<$resultados['AlcoholesSuperioresMin'] || $AlcoholesSuperiores>$resultados['AlcoholesSuperioresMax']) {
            $cumplimiento=2;
        }

        $referencia = 1;
        $q1 = "INSERT INTO analisisdestilado (Clave, Lote, PorcentajeAlcohol,  Metanol, AlcoholesSuperiores, Referencia, Cumplimiento )
                VALUES(:Clave, :Lote, :PorcentajeAlcohol, :Metanol, :AlcoholesSuperiores, :Referencia, :Cumplimiento)";
        $a1 = [
        ":Clave" => $Clave, 
        ":Lote" => $Lote, 
        ":Alcohol" => $PorcentajeAlcohol, 
        ":Metanol" => $Metanol, 
        ":AlcoholesSuperiores" => $AlcoholesSuperiores, 
        ":Referencia" => $referencia, 
        ":Cumplimiento" => $cumplimiento];
        $querry = $q1;
        $parametros = $a1;

        $this->base->insertar_eliminar_actualizar($querry, $parametros);
        $this->base->cerrar_conexion();
        echo json_encode('exito');
    }
}