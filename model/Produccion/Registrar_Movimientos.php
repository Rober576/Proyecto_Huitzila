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
    function obtenerInicio($lote) {
        $query = "
            SELECT 
                IFNULL(m.FinalVolumen, 0) AS FinalVolumen,
                IFNULL(m.FinalPorcentaje, 0) AS FinalPorcentaje
            FROM movimientomezcal m
            WHERE m.Lote = '$lote'
            ORDER BY m.Fecha DESC
            LIMIT 1
        ";
    
        $result = $this->base->mostrar($query);
    
        if (!empty($result)) {
            return json_encode($result[0]);
        } else {
            // Si no hay resultados, retornar 0 para ambos valores
            return json_encode(array('FinalVolumen' => 0, 'FinalPorcentaje' => 0));
        }
    }

    function calcularFinal($inicialVolumen, $volumen, $inicialPorcentaje, $alc_vol) {
        // Convertir a números de punto flotante
        $inicialVolumen = floatval($inicialVolumen);
        $volumen = floatval($volumen);
        $inicialPorcentaje = floatval($inicialPorcentaje);
        $alc_vol = floatval($alc_vol);
    
        // Inicializar variables para FinalVolumen y FinalPorcentaje
        $finalVolumen = 0;
        $finalPorcentaje = 0;
    
        // Verificar si inicialVolumen e inicialPorcentaje son cero
        if ($inicialVolumen == 0 && $inicialPorcentaje == 0) {
            // Si ambos son cero, asignar volumen y alc_vol directamente
            $finalVolumen = $volumen;
            $finalPorcentaje = $alc_vol;
        } else {
            // Si no son cero, realizar las operaciones mencionadas
            $finalVolumen = $inicialVolumen + $volumen;
            $finalPorcentaje = ($inicialPorcentaje + $alc_vol) / 2;
        }
    
        // Devolver los resultados
        return array('FinalVolumen' => $finalVolumen, 'FinalPorcentaje' => $finalPorcentaje);
    }

    function insertar($lote, $tipo, $fecha, $tipoES, $procedencia, $volumen, $alc_vol,$alc_vol55,$agua) {

        $IDMovimiento = $this->obtenerIDMovimiento($tipo);
        $datos=$this->obtenerInicio($lote);

        $datosArray = json_decode($datos, true);

        $inicialVolumen = $datosArray['FinalVolumen'];
        $inicialPorcentaje = $datosArray['FinalPorcentaje'];

        $inicialVolumen = floatval($inicialVolumen);
        $volumen = floatval($volumen);
        $inicialPorcentaje = floatval($inicialPorcentaje);
        $alc_vol = floatval($alc_vol);
        
        $resultado = $this->calcularFinal($inicialVolumen, $volumen, $inicialPorcentaje, $alc_vol);

        // Ahora puedes acceder a los valores de FinalVolumen y FinalPorcentaje
        $finalVolumen = $resultado['FinalVolumen'];
        $finalPorcentaje = $resultado['FinalPorcentaje'];

        $q1 = "INSERT INTO movimientomezcal (Lote, Fecha, IDMovimiento, Volumen, PorcentajeAlcohol, EntradaSalida, DestinoProcedencia, MermasVolumen, MermasPorcentaje, Volumen55, FinalVolumen, FinalPorcentaje) 
                VALUES (:Lote, :Fecha, :IDMovimiento, :Volumen, :PorcentajeAlcohol, :EntradaSalida, :DestinoProcedencia, :MermasVolumen, :MermasPorcentaje, :Volumen55, :FinalVolumen, :FinalPorcentaje)";
        
        $params = array(
            ":Lote" => $lote,
            ":Fecha" => $fecha,
            ":IDMovimiento" => $IDMovimiento, 
            ":Volumen" => $volumen,
            ":PorcentajeAlcohol" => $alc_vol,
            ":EntradaSalida" => $tipoES,
            ":DestinoProcedencia" => $procedencia,
            ":MermasVolumen" => 1, 
            ":MermasPorcentaje" => 1, 
            ":Volumen55" => $alc_vol55,
            ":FinalVolumen" => $finalVolumen, 
            ":FinalPorcentaje" => $finalPorcentaje
        );
        
        $this->base->insertar_eliminar_actualizar($q1, $params);
        $this->base->cerrar_conexion();
        return true; // La inserción se realizó correctamente
    }
}
?>
