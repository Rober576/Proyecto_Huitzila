<?php
    include('../../config/Crud_bd.php');

    class Registro_Calidad{
        private $base;
    
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }
    
        function insertar($Lote, $Azucares, $Madurez, $TamañoMateria){

            $q1 = "INSERT INTO calidad (Lote, Azucares, Madurez, TamañoMateria)
            VALUES(:Lote, :Azucares, :Madurez, :TamañoMateria)";
            $a1= [":Lote"=>$Lote, ":Azucares"=>$Azucares, ":Madurez"=>$Madurez, ":TamañoMateria"=>$TamañoMateria];
            $querry = $q1;
            $parametros = $a1;           

            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
            echo json_encode('exito');
        }
    
        
    }

?>