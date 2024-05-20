<?php
include('../../config/Crud_bd.php');

class MostrarMez extends Crud_bd {
    private $base;

    function instancias() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo() {
        $query = "SELECT rm.*, rm.Lote, rm.NombrePlanta, rm.Edad, cat.Categoria, mm.Volumen, mm.PorcentajeAlcohol
                  FROM registromezcal rm
                  INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                  INNER JOIN categoriamezcal cat ON rm.IDCategoria = cat.IDCategoria
                  INNER JOIN movimientomezcal mm ON rm.Lote = mm.Lote
                  INNER JOIN analisisficoquimico afq ON rm.Lote = afq.Lote";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($busqueda) {
        $query = "SELECT rm.* ,rm.Lote, rm.NombrePlanta, rm.Edad, cat.Categoria, mm.Volumen, mm.PorcentajeAlcohol, mm.IDMovimiento
                  FROM registromezcal rm
                  INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                  INNER JOIN categoriamezcal cat ON rm.IDCategoria = cat.IDCategoria
                  INNER JOIN movimientomezcal mm ON rm.Lote = mm.Lote
                  INNER JOIN analisisficoquimico afq ON rm.Lote = afq.Lote
                  WHERE rm.Lote LIKE :busqueda 
                     ";
       $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
       $this->base->cerrar_conexion();
       return $resultados;
    }

    function buscar_datos($id) {
        $query = "SELECT rm.Lote, rm.NombrePlanta, rm.Edad, cat.Categoria, mm.Volumen, mm.PorcentajeAlcohol, mm.IDMovimiento
                  FROM registromezcal rm
                  INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                  INNER JOIN categoriamezcal cat ON rm.IDCategoria = cat.IDCategoria
                  INNER JOIN movimientomezcal mm ON rm.Lote = mm.Lote
                  INNER JOIN analisisficoquimico afq ON rm.Lote = afq.Lote
                  WHERE rm.Lote = '$id'";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

}

   
?>
