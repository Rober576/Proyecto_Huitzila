<?php
include('../../config/Crud_bd.php');

class MostrarMez extends Crud_bd {
    private $base;
   
    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT mm.Lote, mm.IDMovimiento, tm.Movimiento, mm.Volumen, mm.PorcentajeAlcohol,
                          mm.Fecha, mm.IDMovimiento
                  FROM movimientomezcal mm
                  INNER JOIN tipomovimiento tm ON mm.IDMovimiento = tm.IDMovimiento";
        
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($lote){
        $query = "SELECT mm.Lote, mm.NumeroMovimiento, mm.IDMovimiento, tm.Movimiento, mm.Volumen, mm.PorcentajeAlcohol,
                          mm.Fecha, mm.IDMovimiento
                  FROM movimientomezcal mm
                  INNER JOIN tipomovimiento tm ON mm.IDMovimiento = tm.IDMovimiento
                  WHERE mm.Lote = :lote";
        $resultados = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    
    
    function buscar_datos_GET($id){
        $this->conexion_bd();
        $consulta = "SELECT rm.*, cm.Movimiento
             FROM movimientomezcal rm
             INNER JOIN tipomovimiento cm ON rm.idMovimiento = cm.idMovimiento
             WHERE rm.Lote = '$id'" ;
        $resultados = $this->mostrar($consulta);
        $this->cerrar_conexion();
        return $resultados;
    }
    function buscar_datos($id){
        $this->conexion_bd();
        $consulta = "SELECT mm.NumeroMovimiento AS Lote, mm.idMovimiento, tm.Movimiento, mm.Fecha, mm.NumeroMovimiento
                     FROM movimientomezcal mm
                     INNER JOIN tipomovimiento tm ON mm.IDMovimiento = tm.IDMovimiento
                     WHERE mm.Lote = '$id'";
        $resultados = $this->mostrar($consulta);
        $this->cerrar_conexion();
        return $resultados;
    }
}
?>
