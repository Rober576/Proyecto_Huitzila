<?php
include('../../config/Crud_bd.php');

class Registro_cuotas
{
    private $base;

    function conexion()
    {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function insertar($Clave, $Lote, $Alcohol, $Extracto, $Metanol, $Superiores, $Aldehidos, $Furfural, $Plomo, $Cobre, $archivo)
    {
       
        $query = "SELECT * FROM valoresminmax";
        $resultados = $this->base->mostrar($query);
        $resultados=$resultados[0];

        $cumplimiento=1;
        if($Alcohol<$resultados['ALCVolMin'] || $Alcohol>$resultados['ALCVolMax']) {
            $cumplimiento=2;
        }
        if($Extracto<$resultados['ExtractoSecoMin'] || $Extracto>$resultados['ExtractoSecoMax']) {
            $cumplimiento=2;
        }
        if($Metanol<$resultados['MetanolMin'] || $Metanol>$resultados['MetanolMax']) {
            $cumplimiento=2;
        }
        if($Superiores<$resultados['AlcoholesSuperioresMin'] || $Superiores>$resultados['AlcoholesSuperioresMax']) {
            $cumplimiento=2;
        }
        if($Aldehidos<$resultados['AldehidosMin'] || $Aldehidos>$resultados['AldehidosMax']) {
            $cumplimiento=2;
        }
        if($Furfural<$resultados['FurfuralMin'] || $Furfural>$resultados['FurfuralMax']) {
            $cumplimiento=2;
        }
        if($Plomo<$resultados['PlomoMin'] || $Plomo>$resultados['PlomoMax']) {
            $cumplimiento=2;
        }
        if($Cobre<$resultados['ArsenicoMin'] || $Cobre>$resultados['ArsenicoMax']) {
            $cumplimiento=2;
        }

        $referencia = 1;
        $q1 = "UPDATE analisisficoquimico SET Lote=:Lote, Alcohol=:Alcohol, ExtractoSeco=:ExtractoSeco, Metanol=:Metanol, AlcoholesSuperiores=:AlcoholesSuperiores, Aldehidos=:Aldehidos, Furfural=:Furfural, Plomo=:Plomo, Cobre=:Cobre, Referencia=:Referencia, cumplimiento=:cumplimiento, NombreDocumento=:NombreDocumento
                WHERE Clave=:Clave";
        $a1 = [
        ":Clave" => $Clave, 
        ":Lote" => $Lote, 
        ":Alcohol" => $Alcohol, 
        ":ExtractoSeco" => $Extracto, 
        ":Metanol" => $Metanol, 
        ":AlcoholesSuperiores" => $Superiores, 
        ":Aldehidos" => $Aldehidos, 
        ":Furfural" => $Furfural, 
        ":Plomo" => $Plomo, 
        ":Cobre" => $Cobre, 
        ":Referencia" => $referencia, 
        ":cumplimiento" => $cumplimiento, 
        ":NombreDocumento" => $archivo];
        $querry = $q1;
        $parametros = $a1;

        $this->base->insertar_eliminar_actualizar($querry, $parametros);
        $this->base->cerrar_conexion();
        echo json_encode('exito');
    }
}