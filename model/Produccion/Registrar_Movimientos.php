<?php
include('../../config/Crud_bd.php');

class NuevosCampos {
    private $base;

    function conexion() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerIDLote($lote) {
        $q = "SELECT Lote FROM registromezcal WHERE Lote = :lote";
        $params = array(":Lote" => $lote);
        
        $resultado = $this->base->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDLote'];
        } else {
            return false;
        }
    }

    function obtenerIDMovimiento($movimiento) {
        $q = "SELECT IdMovimiento FROM tipomovimiento WHERE Movimiento = :movimiento";
        $params = array(":movimiento" => $movimiento);
        
        $resultado = $this->base->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IdMovimiento'];
        } else {
            return false;
        }
    }

    function insertar($lote, $tipo, $fecha, $tipoES, $procedencia, $volumen, $alc_vol,$alc_vol55) {

        $IDMovimiento = $this->obtenerIDMovimiento($tipo);

        $q1 = "INSERT INTO movimientomezcal (Lote, Fecha, IDMovimiento, Volumen, PorcentajeAlcohol, EntradaSalida, DestinoProcedencia, MermasVolumen, MermasPorcentaje, Volumen55, FinalVolumen, FinalPorcentaje) 
                VALUES (:Lote, :Fecha, :IDMovimiento, :Volumen, :PorcentajeAlcohol, :EntradaSalida, :DestinoProcedencia, :MermasVolumen, :MermasPorcentaje, :Volumen55, :FinalVolumen, :FinalPorcentaje)";
        
        $params = array(
            ":Lote" => $lote,
            ":Fecha" => $fecha,
            ":IDMovimiento" => $IDMovimiento, // Asignar el valor calculado
            ":Volumen" => $volumen,
            ":PorcentajeAlcohol" => $alc_vol,
            ":EntradaSalida" => $tipoES,
            ":DestinoProcedencia" => $procedencia,
            ":MermasVolumen" => 1, // Placeholder, debes proporcionar el valor real
            ":MermasPorcentaje" => 1, // Placeholder, debes proporcionar el valor real
            ":Volumen55" => $alc_vol55,
            ":FinalVolumen" => 1, // Placeholder, debes proporcionar el valor real
            ":FinalPorcentaje" => 1 // Placeholder, debes proporcionar el valor real
        );
        
        $this->base->insertar_eliminar_actualizar($q1, $params);
        $this->base->cerrar_conexion();
        return true; // La inserción se realizó correctamente
    }
}
?>
