<?php
    include('../../../config/Crud_bd.php');

    class Bitacora extends Crud_bd{
        public function insertar_bitacora($fechaC, $procedencia, $costo, $lote, $kgEntrada, $fecha, $guia, $especie, $agave, $brix, $art, $coccion, $fechaI, $fechaF, $art2){
            $this->conexion_bd();

            //consultas para la tabla de usuaperso
            $q1 = "INSERT INTO bitacoramezcal (Fecha, Procedencia, Costo, Lote, KgEntrada, FechaEntrada, NoGuia, NombrePlanta, KgAgave, Brix, KgArt, KgCoccion, FechaInicio, FechaFinal, KgArtCoccion) 
            VALUES (:fechaC, :procedencia, :costo, :lote, :kgEntrada, :fecha, :guia, :especie, :agave, :brix, :art, :coccion, :fechaI, :fechaF, :art2)";

            $a1 = [":fechaC"=>$fechaC, ":procedencia"=>$procedencia, ":costo"=>$costo, ":lote"=>$lote, ":kgEntrada"=>$kgEntrada, ":fecha"=>$fecha, ":guia"=>$guia, ":especie"=>$especie, ":agave"=>$agave, ":brix"=>$brix, ":art"=>$art, ":coccion"=>$coccion, ":fechaI"=>$fechaI, ":fechaF"=>$fechaF, ":art2"=>$art2];

            $querry = [$q1];
            $parametros = [$a1];
            //acomoda todo en arreglos para mandarlos al CRUD

            $ejecucion = $this->insertar_eliminar_actualizar($querry, $parametros);
            return $ejecucion;
            $this->cerrar_conexion();
        }
    }
?>