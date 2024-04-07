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

    function insertar($Clave, $Lote, $Alcohol, $Extracto, $Metanol, $Superiores, $Aldehidos, $Furfural, $Plomo, $Cobre, $Estado, $archivo)
    {
        $referencia = 1;
        $q1 = "INSERT INTO analisisficoquimico (Clave, Lote, Alcohol, ExtractoSeco, Metanol, AlcoholesSuperiores, Aldehidos, Furfural, Plomo, Cobre, Referencia, Cumplimiento, NombreDocumento)
                VALUES(:Clave, :Lote, :Alcohol, :ExtractoSeco, :Metanol, :AlcoholesSuperiores, :Aldehidos, :Furfural, :Plomo, :Cobre, :Referencia, :Cumplimiento, :NombreDocumento)";
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
        ":Cumplimiento" => $Estado,
        ":NombreDocumento" => $archivo];
        $querry = $q1;
        $parametros = $a1;

        $this->base->insertar_eliminar_actualizar($querry, $parametros);
        $this->base->cerrar_conexion();
        echo json_encode('exito');
    }
}