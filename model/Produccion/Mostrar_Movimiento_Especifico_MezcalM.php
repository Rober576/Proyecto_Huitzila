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
        $query = "SELECT mm.Lote, mm.IDMovimiento, tm.Movimiento, mm.Volumen, mm.PorcentajeAlcohol,
                          mm.Fecha, mm.IDMovimiento
                  FROM movimientomezcal mm
                  INNER JOIN tipomovimiento tm ON mm.IDMovimiento = tm.IDMovimiento
                  WHERE mm.Lote = :lote";
        $resultados = $this->base->mostrar($query, [":lote" => $lote]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    
    /*function buscar_datos($id){
        $this->conexion_bd();
        *$consulta="SELECT rm.*, cm.Movimiento
        from movimientomezcal rm
        INNER JOIN tipomovimiento cm ON rm.IDMovimiento = cm.IDMovimiento
        WHERE rm.Lote = '$id'";
        
        $resultados = $this->mostrar($consulta);
        $this->cerrar_conexion();
        return $resultados;
    }*/
    function buscar_datos($id){
        $this->conexion_bd();
        $consulta = "SELECT mm.Lote, mm.IDMovimiento, tm.Movimiento, mm.Volumen, mm.PorcentajeAlcohol,
                            mm.Fecha, mm.IDMovimiento
                     FROM movimientomezcal mm
                     INNER JOIN tipomovimiento tm ON mm.IDMovimiento = tm.IDMovimiento";
        $resultados = $this->mostrar($consulta);
     
        $this->cerrar_conexion();
        return $resultados;
    }
}
?>
