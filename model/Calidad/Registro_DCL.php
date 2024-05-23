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

    function insertar($Clave, $Lote, $Alcohol, $Metanol, $Superiores)
{
    $lote_existente = $this->verificar_lote_existente($Lote);
            
    if ($lote_existente) {
        echo json_encode('loterep');
    }else {

        $query = "SELECT * FROM valoresminmaxdcl";
        $resultados = $this->base->mostrar($query);
        $resultados = $resultados[0];

        $cumplimiento = 1;
        if ($Alcohol < $resultados['PorcentajeAlcoholMin'] || $Alcohol > $resultados['PorcentajeAlcoholMax']) {
            $cumplimiento = 2;
        }
        if ($Metanol < $resultados['MetanolMin'] || $Metanol > $resultados['MetanolMax']) {
            $cumplimiento = 2;
        }
        if ($Superiores < $resultados['AlcoholesSuperioresMin'] || $Superiores > $resultados['AlcoholesSuperioresMax']) {
            $cumplimiento = 2;
        }

        $referencia = 1;
        $q1 = "INSERT INTO analisisdestilado (Clave, Lote, PorcentajeAlcohol, Metanol, AlcoholesSuperiores, Referencia, cumplimiento)
                VALUES(:Clave, :Lote, :Alcohol, :Metanol, :AlcoholesSuperiores, :Referencia, :cumplimiento)";
        $a1 = [
            ":Clave" => $Clave,
            ":Lote" => $Lote,
            ":Alcohol" => $Alcohol,
            ":Metanol" => $Metanol,
            ":AlcoholesSuperiores" => $Superiores,
            ":Referencia" => $referencia,
            ":cumplimiento" => $cumplimiento
        ];
        $querry = $q1;
        $parametros = $a1;

        $this->base->insertar_eliminar_actualizar($querry, $parametros);
        $this->base->cerrar_conexion();
        echo json_encode('exito');}
}

function verificar_lote_existente($lote){
    $q2 = "SELECT COUNT(*) as count FROM analisisdestilado WHERE Lote = :Lote";
    $a2 = [":Lote" => $lote];
    $resultado = $this->base->mostrar($q2, $a2);
    
    if ($resultado && $resultado[0]['count'] > 0) {
        return true;
    } else {
        return false;
    }
}}