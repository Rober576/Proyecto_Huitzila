<?php
include('../../config/Crud_bd.php');

class Actualizar_MinMax{
    private $base;

    function conexion(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function actualizar($ALCVolMin,$ALCVolMax, $ExtractoSecoMin, $ExtractoSecoMax, $MetanolMin, $MetanolMax, $AlcoholesSuperioresMin, $AlcoholesSuperioresMax , $AldehidosMin, $AldehidosMax,  $FurfuralMin, $FurfuralMax, $PlomoMax, $ArsenicoMax){

        $q1 = "UPDATE valoresminmax SET ALCVolMin = :ALCVolMin, ALCVolMax = :ALCVolMax, ExtractoSecoMin = :ExtractoSecoMin, ExtractoSecoMax = :ExtractoSecoMax, MetanolMin = :MetanolMin, MetanolMax = :MetanolMax, AlcoholesSuperioresMin = :AlcoholesSuperioresMin, AlcoholesSuperioresMax = :AlcoholesSuperioresMax, AldehidosMin = :AldehidosMin, AldehidosMax = :AldehidosMax, FurfuralMin = :FurfuralMin, FurfuralMax = :FurfuralMax, PlomoMax = :PlomoMax, ArsenicoMax = :ArsenicoMax";
        
        // Supongo que tienes algún identificador único en la tabla para saber qué fila actualizar, así que lo agrego a la consulta.

        $a1 = [
            ":ALCVolMin" => $ALCVolMin,
            ":ALCVolMax" => $ALCVolMax,
            ":ExtractoSecoMin" => $ExtractoSecoMin,
            ":ExtractoSecoMax" => $ExtractoSecoMax,
            ":MetanolMin" => $MetanolMin,
            ":MetanolMax" => $MetanolMax,
            ":AlcoholesSuperioresMin" => $AlcoholesSuperioresMin,
            ":AlcoholesSuperioresMax" => $AlcoholesSuperioresMax,
            ":AldehidosMin" => $AldehidosMin,
            ":AldehidosMax" => $AldehidosMax,
            ":FurfuralMin" => $FurfuralMin,
            ":FurfuralMax" => $FurfuralMax,
            ":PlomoMax" => $PlomoMax,
            ":ArsenicoMax" => $ArsenicoMax,
            // Supongamos que `id` es el identificador único
        ];

        $querry = $q1;
        $parametros = $a1;

        $this->base->insertar_eliminar_actualizar($querry, $parametros);
        $this->base->cerrar_conexion();
        echo json_encode('exito');
    }
}
?>
