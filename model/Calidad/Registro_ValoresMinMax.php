<?php
    include('../../config/Crud_bd.php');

    class Registro_MinMax{
        private $base;
    
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }
    
        function insertar($ID, $ALCVolMin,$ALCVolMax, $ExtractoSecoMin, $ExtractoSecoMax, $MetanolMin, $MetanolMax, $AlcoholesSuperioresMin, $AlcoholesSuperioresMax , $FurfuralMin, $FurfuralMax, $PlomoMin, $PlomoMax, $ArsenicoMin, $ArsenicoMax){

            $q1 = "INSERT INTO valoresminmax (ID, ALCVolMin, ALCVolMax, ExtractoSecoMin, ExtractoSecoMax, MetanolMin, MetanolMax) VALUES(:ID, :ALCVolMin, :ALCVolMax, :ExtractoSecoMin, :ExtractoSecoMax, :MetanolMin, :MetanolMax, ;AlcoholesSuperioresMin, :AlcoholesSuperioresMax, , :FurduralMin, :FurfuralMax,  :PlomoMin, :PlomoMax,:ArsenicoMin, :ArsenicoMax)";
            $a1= [":ID"=>$ID, ":ALCVolMin"=>$ALCVolMin, ":ALCVolMax"=>$ALCVolMax, ":ExtractoSecoMin"=>$ExtractoSecoMin, ":ExtractoSecoMax"=>$ExtractoSecoMax , ":MeatanolMin"=>$MetanolMin, ":MetanolMax"=>$MetanolMax, ":AlcoholesSuperioesMin"=>$AlcoholesSuperioresMin, ":AlcoholesSuperioresMax"=>$AlcoholesSuperioresMax, ":FurfuralMin"=>$FurfuralMin, ":FurfuralMax"=>$FurfuralMax, ":PlomoMin"=>$PlomoMin, ":PlomoMax"=>$PlomoMax, ":ArsenicoMin"=>$ArsenicoMin, ":ArsenicoMax"=>$ArsenicoMax];
            $querry = $q1;
            $parametros = $a1;           

            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
            echo json_encode('exito');
        }
    
        
    }
