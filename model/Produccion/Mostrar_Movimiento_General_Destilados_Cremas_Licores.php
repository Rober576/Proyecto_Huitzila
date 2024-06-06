<?php
include('../../config/Crud_bd.php');

class MostrarDes extends Crud_bd {
    private $base;
   
    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function buscador($lote){
        $this->base->conexion_bd();
        $query = "SELECT tipomovimiento.Movimiento, DATE_FORMAT(movimientodestilado.Fecha, '%d-%m-%Y') AS Fecha, movimientodestilado.Lote,
        tipodestilado.NombreDestilado, clasemezcal.Clase_Mezcal, registrodestilado.tanque, movimientodestilado.Volumen, 
        movimientodestilado.PorcentajeAlcohol, movimientodestilado.EntradaSalida, movimientodestilado.DestinoProcedencia,
        movimientodestilado.VolumenAgua, movimientodestilado.MermasVolumen, movimientodestilado.MermasPorcentaje, 
        movimientodestilado.Volumen55,movimientodestilado.FinalVolumen, movimientodestilado.FinalPorcentaje 
        FROM movimientodestilado, registrodestilado, tipodestilado, clasemezcal, tipomovimiento WHERE 
        registrodestilado.IDClase=clasemezcal.IDClase AND registrodestilado.IdTipoDes=tipodestilado.IdTipoDes AND 
        registrodestilado.Lote=movimientodestilado.Lote AND tipomovimiento.IdMovimiento=movimientodestilado.IdMovimiento AND 
        movimientodestilado.Lote=:lote ORDER BY movimientodestilado.Fecha";
        $resultados = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador_menor($lote){
        $this->base->conexion_bd();
        $query = "SELECT DATE_FORMAT(MIN(Fecha), '%d-%m-%Y') AS fecha FROM movimientodestilado WHERE Lote=:lote";
        $resultados1 = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados1;
    }

    function buscador_menor1($lote){
        $this->base->conexion_bd();
        $query = "SELECT MAX(Fecha) AS fecha FROM movimientodestilado WHERE Lote=:lote";
        $resultados1 = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados1;
    }

    function datos_finales($fecha){
        $this->base->conexion_bd();
        $query = "SELECT FinalVolumen AS final, FinalPorcentaje AS porcentaje FROM movimientodestilado WHERE Fecha!=:fecha";
        $resultados2 = $this->base->mostrar($query, [":fecha" => $fecha]);
        $this->base->cerrar_conexion();
        return $resultados2;
    }

    function filtrado($lote, $fecha_inicio, $fecha_fin){
        $this->base->conexion_bd();
        $query = "SELECT tipomovimiento.Movimiento, DATE_FORMAT(movimientodestilado.Fecha, '%d-%m-%Y') AS Fecha, movimientodestilado.Lote,
        tipodestilado.NombreDestilado, clasemezcal.Clase_Mezcal, registrodestilado.tanque, movimientodestilado.Volumen, 
        movimientodestilado.PorcentajeAlcohol, movimientodestilado.EntradaSalida, movimientodestilado.DestinoProcedencia,
        movimientodestilado.VolumenAgua, movimientodestilado.MermasVolumen, movimientodestilado.MermasPorcentaje, 
        movimientodestilado.Volumen55,movimientodestilado.FinalVolumen, movimientodestilado.FinalPorcentaje 
        FROM movimientodestilado, registrodestilado, tipodestilado, clasemezcal, tipomovimiento WHERE 
        registrodestilado.IDClase=clasemezcal.IDClase AND registrodestilado.IdTipoDes=tipodestilado.IdTipoDes AND 
        registrodestilado.Lote=movimientodestilado.Lote AND tipomovimiento.IdMovimiento=movimientodestilado.IdMovimiento AND movimientodestilado.Lote=:lote
        AND movimientodestilado.Fecha BETWEEN :fecha_inicio AND :fecha_fin"; 
        $resultados = $this->base->mostrar($query, [":lote" => $lote, ":fecha_inicio" => $fecha_inicio, ":fecha_fin" => $fecha_fin]);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function fisicoquimico($lote){
        $this->base->conexion_bd();
        $query = "SELECT cumplimiento FROM analisisficoquimico WHERE Lote=:lote";
        $resultados = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
}
?>