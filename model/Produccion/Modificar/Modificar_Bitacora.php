<?php
    include('../../../config/Crud_bd.php');
 
    class modificarBitacora extends Crud_bd{

        public function actualizar($guia, $fechaC, $procedencia, $costo, $lote, $kgEntrada, $fecha, $agave, $kgAgave, $brix, $kgArt, $kgCoccion, $fechaI, $fechaF, $kgArtCoccion){
            $this->conexion_bd();
            
            $consulta = "UPDATE bitacoramezcal SET Fecha=:fechaC, Procedencia=:procedencia, Costo=:costo, 
            Lote=:lote, KgEntrada=:kgEntrada, FechaEntrada=:fecha, NombrePlanta=:agave, kgAgave=:kgAgave, Brix=:brix, 
            KgArt=:kgArt, KgCoccion=:kgCoccion, FechaInicio=:fechaI, FechaFinal=:fechaF, KgArtCoccion=:kgArtCoccion
             WHERE NoGuia=:guia";
            $parametros = [":guia"=>$guia, ":fechaC"=>$fechaC, ":procedencia"=>$procedencia, ":costo"=>$costo, ":lote"=>$lote, ":kgEntrada"=>$kgEntrada, ":fecha"=>$fecha,
            ":agave"=>$agave, ":kgAgave"=>$kgAgave, ":brix"=>$brix, ":kgArt"=>$kgArt, ":kgCoccion"=>$kgCoccion, ":fechaI"=>$fechaI, ":fechaF"=>$fechaF, ":kgArtCoccion"=>$kgArtCoccion];
            $datos = $this->insertar_eliminar_actualizar($consulta,$parametros);
            $this->cerrar_conexion();
            return $datos;
        }
    }

?>