<?php
include('../../config/Crud_bd.php');

class MostrarMez extends Crud_bd {
    private $base;
   
    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function buscador($lote){
        $this->base->conexion_bd();
        $query = "SELECT tipomovimiento.Movimiento, DATE_FORMAT(movimientomezcal.Fecha, '%d-%m-%Y') AS Fecha, movimientomezcal.Lote, categoriamezcal.Categoria, clasemezcal.Clase_Mezcal, 
        registromezcal.Tanque, movimientomezcal.Volumen, movimientomezcal.PorcentajeAlcohol, movimientomezcal.EntradaSalida, 
        movimientomezcal.DestinoProcedencia, movimientomezcal.VolumenAgua, movimientomezcal.MermasVolumen, movimientomezcal.MermasPorcentaje, 
        movimientomezcal.Volumen55, movimientomezcal.FinalVolumen, movimientomezcal.FinalPorcentaje FROM registromezcal, categoriamezcal, 
        clasemezcal, movimientomezcal, tipomovimiento WHERE registromezcal.IDClase=clasemezcal.IDClase and registromezcal.IDCategoria=categoriamezcal.IDCategoria 
        and registromezcal.Lote=movimientomezcal.Lote and tipomovimiento.IdMovimiento=movimientomezcal.IdMovimiento and movimientomezcal.Lote=:lote ORDER BY movimientomezcal.Fecha";
        $resultados = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador_menor($lote){
        $this->base->conexion_bd();
        $query = "SELECT DATE_FORMAT(MIN(Fecha), '%d-%m-%Y') AS fecha FROM movimientomezcal WHERE Lote=:lote";
        $resultados1 = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados1;
    }

    function buscador_menor1($lote){
        $this->base->conexion_bd();
        $query = "SELECT MAX(Fecha) AS fecha FROM movimientomezcal WHERE Lote=:lote";
        $resultados1 = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados1;
    }

    function datos_finales($fecha){
        $this->base->conexion_bd();
        $query = "SELECT FinalVolumen AS final, FinalPorcentaje AS porcentaje FROM movimientomezcal WHERE Fecha!=:fecha";
        $resultados2 = $this->base->mostrar($query, [":fecha" => $fecha]);
        $this->base->cerrar_conexion();
        return $resultados2;
    }

    function filtrado($lote, $fecha_inicio, $fecha_fin){
        $this->base->conexion_bd();
        $query = "SELECT tipomovimiento.Movimiento, DATE_FORMAT(movimientomezcal.Fecha, '%d-%m-%Y') AS Fecha, movimientomezcal.Lote, categoriamezcal.Categoria, clasemezcal.Clase_Mezcal, 
        registromezcal.Tanque, movimientomezcal.Volumen, movimientomezcal.PorcentajeAlcohol, movimientomezcal.EntradaSalida, 
        movimientomezcal.DestinoProcedencia, movimientomezcal.VolumenAgua, movimientomezcal.MermasVolumen, movimientomezcal.MermasPorcentaje, 
        movimientomezcal.Volumen55, movimientomezcal.FinalVolumen, movimientomezcal.FinalPorcentaje 
FROM registromezcal, categoriamezcal, clasemezcal, movimientomezcal, tipomovimiento 
WHERE registromezcal.IDClase=clasemezcal.IDClase 
    AND registromezcal.IDCategoria=categoriamezcal.IDCategoria 
    AND registromezcal.Lote=movimientomezcal.Lote 
    AND tipomovimiento.IdMovimiento=movimientomezcal.IdMovimiento 
    AND movimientomezcal.Lote=:lote
    AND movimientomezcal.Fecha BETWEEN :fecha_inicio AND :fecha_fin;";
        $resultados = $this->base->mostrar($query, [":lote" => $lote, ":fecha_inicio" => $fecha_inicio, ":fecha_fin" => $fecha_fin]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
}
?>