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

    function insertar($Clave, $Lote, $Alcohol, $Metanol, $Superiores) {
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
    $q1 = "UPDATE analisisdestilado SET Lote=:Lote, PorcentajeAlcohol=:Alcohol, Metanol=:Metanol, AlcoholesSuperiores=:AlcoholesSuperiores, Referencia=:Referencia, cumplimiento=:cumplimiento
            WHERE Clave=:Clave";
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
    echo json_encode('exito');
    }
}