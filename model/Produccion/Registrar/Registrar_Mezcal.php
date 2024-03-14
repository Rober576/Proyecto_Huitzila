<?php
    include('C:\xampp\htdocs\sprint1Rama\Proyecto_Huitzila\config\Crud_bd.php');

    class NuevosCampos{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }

        function insertar($lote, $tanque, $categoria, $clase, $edad, $concentracion, $volumen){
            $q1 = "INSERT INTO registromezcal (Lote, Tanque, IDCategoria, IDClase, Edad, Concentracion, Volumen) 
                    VALUES (:lote, :tanque, :categoria, :clase, :edad, :concentracion, :volumen)";
            
            $params = array(
                ":lote" => $lote,
                ":tanque" => $tanque,
                ":categoria" => $categoria,
    
                ":clase" => $clase,
                ":edad" => $edad,
                ":concentracion" => $concentracion,
                ":volumen" => $volumen
            );
            
            $this->base->insertar_eliminar_actualizar($q1, $params);
            $this->base->cerrar_conexion();
        }
    }
?>
