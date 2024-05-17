<?php
include('../../config/Crud_bd.php');

class NuevosCampos {
    private $base;

    function conexion() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerIDLote($lote) {
        $q = "SELECT IDLote FROM registrodestilado WHERE Lote = :lote";
        $params = array(":lote" => $lote);
        
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
                IFNULL(FinalVolumen, 0) AS FinalVolumen,
                IFNULL(FinalPorcentaje, 0) AS FinalPorcentaje
            FROM movimientodestilado
            WHERE Lote = :lote
            ORDER BY NumeroMovimiento DESC
            LIMIT 1
        ";
    
        $params = array(":lote" => $lote);
        $result = $this->base->mostrar($query, $params);
    
        if (!empty($result)) {
            return json_encode($result[0]);
        } else {
            // Si no hay resultados, retornar 0 para ambos valores
            return json_encode(array('FinalVolumen' => 0, 'FinalPorcentaje' => 0));
        }
    }

    function calcularFinal($inicialVolumen, $volumen, $inicialPorcentaje, $alc_vol, $tipoES) {
        // Convertir a números de punto flotante
        $inicialVolumen = floatval($inicialVolumen);
        $volumen = floatval($volumen);
        $inicialPorcentaje = floatval($inicialPorcentaje);
        $alc_vol = floatval($alc_vol);
    
        // Inicializar variables para FinalVolumen y FinalPorcentaje
        $finalVolumen = 0;
        $finalPorcentaje = 0;
    
        // Verificar el tipo de movimiento
        if ($tipoES == 'entrada') {
            // Sumar volumen
            $finalVolumen = $inicialVolumen + $volumen;
            // Calcular porcentaje
            if ($inicialVolumen == 0) {
                $finalPorcentaje = $alc_vol;
            } else {
                $finalPorcentaje = (($inicialPorcentaje * $inicialVolumen) + ($volumen * $alc_vol)) / ($finalVolumen);
            }
        } elseif ($tipoES == 'salida') {
            // Restar volumen
            $finalVolumen = $inicialVolumen - $volumen;
            // Si el volumen inicial es 0, el porcentaje también será 0
            if ($inicialVolumen == 0) {
                $finalPorcentaje = 0;
            } else {
                // Calcular porcentaje
                $finalVolumen = $inicialVolumen - $volumen;
            }
        }
    
        // Devolver los resultados
        return array('FinalVolumen' => $finalVolumen, 'FinalPorcentaje' => $finalPorcentaje);
    }

    function verificarRegistro($lote, $fecha) {
        // Verificar si existe algún registro para el lote
        $query = "
            SELECT COUNT(*) AS count
            FROM movimientodestilado
            WHERE Lote = :lote
        ";
        $params = array(":lote" => $lote);
        $result = $this->base->mostrar($query, $params);
        
        if (!empty($result) && $result[0]['count'] > 0) {

            $query = "
                SELECT MAX(NumeroMovimiento) AS MaxNumeroMovimiento, Fecha
                FROM movimientodestilado
                WHERE Lote = :lote
            ";
            $result = $this->base->mostrar($query, $params);
    
            $numeroMovimiento = $result[0]['MaxNumeroMovimiento'];
            $fechaUltimoRegistro = $result[0]['Fecha'];
    

            if ($fecha >= $fechaUltimoRegistro) {
                return $numeroMovimiento + 1;
            } else {
                return "La fecha ingresada";
            }
        } else {

            return 1;
        }
    }
    

    function insertar($lote, $tipo, $fecha, $tipoES, $procedencia, $volumen, $alc_vol,$alc_vol55,$agua,$alc_vol_merma,$volumen_merma) {
        $verificacion = $this->verificarRegistro($lote, $fecha);
        if (is_numeric($verificacion)) {

            $IDMovimiento = $this->obtenerIDMovimiento($tipo);
            $datos=$this->obtenerInicio($lote);
        
            $datosArray = json_decode($datos, true);
        
            $inicialVolumen = $datosArray['FinalVolumen'];
            $inicialPorcentaje = $datosArray['FinalPorcentaje'];
        
            $inicialVolumen = floatval($inicialVolumen);
            $volumen = floatval($volumen);
            $inicialPorcentaje = floatval($inicialPorcentaje);
            $alc_vol = floatval($alc_vol);
            
            $resultado = $this->calcularFinal($inicialVolumen, $volumen, $inicialPorcentaje, $alc_vol,$tipoES);
        

        
            // Ahora puedes acceder a los valores de FinalVolumen y FinalPorcentaje
            $finalVolumen = $resultado['FinalVolumen'];
            $finalPorcentaje = $resultado['FinalPorcentaje'];

            $q1 = "INSERT INTO movimientodestilado (Lote, Fecha, IDMovimiento, Volumen, PorcentajeAlcohol, EntradaSalida, DestinoProcedencia,VolumenAgua, MermasVolumen, MermasPorcentaje, Volumen55, FinalVolumen, FinalPorcentaje, NumeroMovimiento) 
            VALUES (:Lote, :Fecha, :IDMovimiento, :Volumen, :PorcentajeAlcohol, :EntradaSalida, :DestinoProcedencia,:VolumenAgua, :MermasVolumen, :MermasPorcentaje, :Volumen55, :FinalVolumen, :FinalPorcentaje, :NumeroMovimiento)";
    
    $params = array(
        ":Lote" => $lote,
        ":Fecha" => $fecha,
        ":IDMovimiento" => $IDMovimiento, 
        ":Volumen" => $volumen,
        ":PorcentajeAlcohol" => $alc_vol,
        ":EntradaSalida" => $tipoES,
        ":VolumenAgua" => $agua,
        ":DestinoProcedencia" => $procedencia,
        ":MermasVolumen" => $volumen_merma, 
        ":MermasPorcentaje" => $alc_vol_merma, 
        ":Volumen55" => $alc_vol55,
        ":FinalVolumen" => $finalVolumen, 
        ":FinalPorcentaje" => $finalPorcentaje,
        ":NumeroMovimiento"=>$verificacion
    );
    
    $this->base->insertar_eliminar_actualizar($q1, $params);
    $this->base->cerrar_conexion();
    return true; 
} else {

    return $verificacion;
}
}
}
?>

