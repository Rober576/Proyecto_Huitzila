<?php
    include('../../config/Crud_bd.php');

    class Bitacora extends Crud_bd{
        public function insertar_bitacora($procedencia, $costo, $lote, $fecha, $guia, $especie, $agave, $brix, $art, $coccion, $fechaI, $fechaF, $art2){
            $this->conexion_bd();

            //consultas para la tabla de usuaperso
            $q1 = "INSERT INTO bitacoramezcal (Procedencia, Costo, Lote, FechaEntrada, NoGuia, NombrePlanta, KgAgave, Brix, KgArt, KgCoccion, FechaInicio, FechaFinal, KgArtCoccion) 
            VALUES (:procedencia, :costo, :lote, :fecha, :guia, :especie, :agave, :brix, :art, :coccion, :fechaI, :fechaF, :art2)";

            $a1 = [":procedencia"=>$procedencia, ":costo"=>$costo, ":lote"=>$lote, ":fecha"=>$fecha, ":guia"=>$guia, ":especie"=>$especie, ":agave"=>$agave, ":brix"=>$brix, ":art"=>$art, ":coccion"=>$coccion, ":fechaI"=>$fechaI, ":fechaF"=>$fechaF, ":art2"=>$art2];

            $querry = [$q1];
            $parametros = [$a1];
            //acomoda todo en arreglos para mandarlos al CRUD

            $ejecucion = $this->insertar_eliminar_actualizar($querry, $parametros);
            return $ejecucion;
            $this->cerrar_conexion();
        }

        public function buscar_lote($lote){
            $this->conexion_bd();
            $consulta = "SELECT * FROM bitacoramezcal WHERE Lote='$lote'";
            $resultados = $this->mostrar($consulta);
            $this->cerrar_conexion();
            return $resultados;
        }

        public function buscar_guia($guia){
            $this->conexion_bd();
            $consulta = "SELECT * FROM bitacoramezcal WHERE NoGuia='$guia'";
            $resultados = $this->mostrar($consulta);
            $this->cerrar_conexion();
            return $resultados;
        }
    }
?>