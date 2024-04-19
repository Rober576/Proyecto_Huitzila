<?php
    include('../../config/Crud_bd.php');

    class Registro_MinMax{
        private $base;
    
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }
    
        function insertar($ALCVolMin,$ALCVolMax, $ExtractoSecoMin, $ExtractoSecoMax, $MetanolMin, $MetanolMax, $AlcoholesSuperioresMin, $AlcoholesSuperioresMax , $AldehidosMin, $AldehidosMax,  $FurfuralMin, $FurfuralMax, $PlomoMax, $ArsenicoMax){

            $q1 = "INSERT INTO valoresminmax (ALCVolMin, ALCVolMax, ExtractoSecoMin, ExtractoSecoMax, MetanolMin, MetanolMax , AlcoholesSuperioresMin, AlcoholesSuperioresMax, AldehidosMin, AldehidosMax,  FurfuralMin, FurfuralMax, PlomoMax, ArsenicoMax) VALUES(:ALCVolMin, :ALCVolMax, :ExtractoSecoMin, :ExtractoSecoMax, :MetanolMin, :MetanolMax, :AlcoholesSuperioresMin, :AlcoholesSuperioresMax, :AldehidosMin, :AldehidosMax, :FurfuralMin, :FurfuralMax,  :PlomoMax,  :ArsenicoMax)";
            $a1 = [":ALCVolMin" => $ALCVolMin, ":ALCVolMax" => $ALCVolMax, ":ExtractoSecoMin" => $ExtractoSecoMin, ":ExtractoSecoMax" => $ExtractoSecoMax, ":MetanolMin" => $MetanolMin, ":MetanolMax" => $MetanolMax, ":AlcoholesSuperioresMin" => $AlcoholesSuperioresMin, ":AlcoholesSuperioresMax" => $AlcoholesSuperioresMax, ":AldehidosMin" => $AldehidosMin, ":AldehidosMax" => $AldehidosMax, ":FurfuralMin" => $FurfuralMin, ":FurfuralMax" => $FurfuralMax,  ":PlomoMax" => $PlomoMax,  ":ArsenicoMax" => $ArsenicoMax];
            $querry = $q1;
            $parametros = $a1;           

            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
            echo json_encode('exito');
        }
    
        
    }
