<?php
include('../../config/Crud_bd.php');

class MostrarMez extends Crud_bd {
    private $base;
   
    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function buscador($lote){
        $query = "SELECT movimientomezcal.Fecha, movimientomezcal.Lote, categoriamezcal.Categoria, clasemezcal.Clase_Mezcal, 
        registromezcal.Tanque, movimientomezcal.Volumen, movimientomezcal.PorcentajeAlcohol, movimientomezcal.EntradaSalida, 
        movimientomezcal.DestinoProcedencia, movimientomezcal.VolumenAgua, movimientomezcal.MermasVolumen, movimientomezcal.MermasPorcentaje, 
        movimientomezcal.Volumen55, movimientomezcal.FinalVolumen, movimientomezcal.FinalPorcentaje FROM registromezcal, categoriamezcal, 
        clasemezcal, movimientomezcal WHERE registromezcal.IDClase=clasemezcal.IDClase and registromezcal.IDCategoria=categoriamezcal.IDCategoria 
        and registromezcal.Lote=movimientomezcal.Lote and movimientomezcal.Lote=:lote";
        $resultados = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
}
?>