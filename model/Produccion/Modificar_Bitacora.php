<?php
    include('../../config/Crud_bd.php');
 
    class modificarBitacora extends Crud_bd{

        public function actualizar($guia, $procedencia, $costo, $lote, $fecha, $agave, $kgAgave, $brix, $kgArt, $kgCoccion, $fechaI, $fechaF, $kgArtCoccion){
            $this->conexion_bd();
            
            $consulta = "UPDATE bitacoramezcal SET Procedencia=:procedencia, Costo=:costo, 
            Lote=:lote, FechaEntrada=:fecha, NombrePlanta=:agave, kgAgave=:kgAgave, Brix=:brix, 
            KgArt=:kgArt, KgCoccion=:kgCoccion, FechaInicio=:fechaI, FechaFinal=:fechaF, KgArtCoccion=:kgArtCoccion
             WHERE NoGuia=:guia";
            $parametros = [":guia"=>$guia, ":procedencia"=>$procedencia, ":costo"=>$costo, ":lote"=>$lote, ":fecha"=>$fecha,
            ":agave"=>$agave, ":kgAgave"=>$kgAgave, ":brix"=>$brix, ":kgArt"=>$kgArt, ":kgCoccion"=>$kgCoccion, ":fechaI"=>$fechaI, ":fechaF"=>$fechaF, ":kgArtCoccion"=>$kgArtCoccion];
            $datos = $this->insertar_eliminar_actualizar($consulta,$parametros);
            $this->cerrar_conexion();
            return $datos;
        }

        public function buscar_lote($lote){
            $this->conexion_bd();
            $consulta = "SELECT NoGuia FROM bitacoramezcal WHERE Lote='$lote'";
            $resultados = $this->mostrar($consulta);
            $this->cerrar_conexion();
            return $resultados;
        }
    }

?>