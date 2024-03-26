<?php
include('../../config/Crud_bd.php');

class MostrarMez extends Crud_bd {
    private $base;
   
    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT mm.Lote, mm.IDMovimiento, tm.Movimiento, mm.Volumen, mm.PorcentajeAlcohol
                  FROM movimientomezcal mm
                  INNER JOIN tipomovimiento tm ON mm.IDMovimiento = tm.IDMovimiento";
        
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($busqueda){
        $query = "SELECT mm.Lote, mm.IDMovimiento, tm.Movimiento, mm.Volumen, mm.PorcentajeAlcohol
                  FROM movimientomezcal mm
                  INNER JOIN tipomovimiento tm ON mm.IDMovimiento = tm.IDMovimiento
                  WHERE mm.Lote LIKE :busqueda OR mm.IDMovimiento LIKE :busqueda OR tm.Movimiento LIKE :busqueda OR mm.Volumen LIKE :busqueda OR mm.PorcentajeAlcohol LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;

    }
    function buscar_datos($id){
        $this->conexion_bd();
        $consulta = "SELECT mm.Lote, mm.IDMovimiento, tm.Movimiento, mm.Volumen, mm.PorcentajeAlcohol
                     FROM movimientomezcal mm
                     INNER JOIN tipomovimiento tm ON mm.IDMovimiento = tm.IDMovimiento";
        $resultados = $this->mostrar($consulta);
     
        $this->cerrar_conexion();
        return $resultados;
    }
}
?>
