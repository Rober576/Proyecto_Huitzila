<?php
include('../../config/Crud_bd.php');

class modificarMez extends Crud_bd {
     
    // Función para obtener el ID de la clase a partir de su nombre
    function obteneridMovimiento($tipo) {
        echo json_encode($tipo);
        $q = "SELECT IdMovimiento FROM tipomovimiento WHERE Movimiento = :movimiento";
        $params = array(":movimiento" => $tipo);
        
        $resultado = $this->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IdMovimiento'];
        } else {
            return false;
        }
    }

    function obtenerInicio($lote2) {
        $query = "
            SELECT 
                IFNULL(m.FinalVolumen, 0) AS FinalVolumen,
                IFNULL(m.FinalPorcentaje, 0) AS FinalPorcentaje,
                IFNULL(m.NumeroMovimiento, 0) AS NumeroMovimiento
            FROM movimientomezcal m
            WHERE m.Lote = :lote2
            ORDER BY m.NumeroMovimiento DESC
            LIMIT 1
        ";
        $params = array(":lote2" => $lote2);
        $result = $this->mostrar($query, $params);
    
        if (!empty($result)) {
            // Mostrar el número de movimiento en la consola
            echo "Número de movimiento1: " . $result[0]['NumeroMovimiento'] . "\n";
            return $result[0];
        } else {
            // Si no hay resultados, retornar un array con valores predeterminados
            return array('FinalVolumen' => 0, 'FinalPorcentaje' => 0, 'NumeroMovimiento' => 0);
        }
    }
    
    function calcularFinal($inicialVolumen, $volumen, $inicialPorcentaje, $concentracion, $movimiento) {
        // Convertir a números de punto flotante
        $inicialVolumen = floatval($inicialVolumen);
        $volumen = floatval($volumen);
        $inicialPorcentaje = floatval($inicialPorcentaje);
        $concentracion = floatval($concentracion);
    
        $finalVolumen = 0;
        $finalPorcentaje = 0;
        if ($movimiento == 'entrada') {
            $finalVolumen = $inicialVolumen + $volumen;
            if ($inicialVolumen == 0) {
                $finalPorcentaje = $concentracion;
            } else {
                $finalPorcentaje = (($inicialPorcentaje * $inicialVolumen) + ($volumen * $concentracion)) / ($finalVolumen);
            }
        } elseif ($movimiento == 'salida') {
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
        return array('FinalVolumen' => $finalVolumen, 'FinalPorcentaje' => $finalPorcentaje);
    }

    function verificarRegistro($lote2, $fecha) {
        // Verificar si existe algún registro para el lote
        $query = "
            SELECT COUNT(*) AS count
            FROM movimientomezcal
            WHERE Lote = :lote2
        ";
        $params = array(":lote2" => $lote2);
        $result = $this->mostrar($query, $params);
        
        if (!empty($result) && $result[0]['count'] > 0) {
            // Si hay al menos un registro para el lote, obtener el número de movimiento más alto y su fecha
            $query = "
                SELECT MAX(NumeroMovimiento) AS MaxNumeroMovimiento, Fecha
                FROM movimientomezcal
                WHERE Lote = :lote2
            ";
            $result = $this->mostrar($query, $params);
    
            $numeroMovimiento = $result[0]['MaxNumeroMovimiento'];
            $fechaUltimoRegistro = $result[0]['Fecha'];
            if ($fecha >= $fechaUltimoRegistro) {
                return $numeroMovimiento + 1;
            } else {
                return "La fecha ingresada es menor que la ultima fecha registrada";
            }
        } else {
            return 0;
        }
    }

    function actualizar($lote2, $numero, $fecha, $tipo, $procedencia, $movimiento, $volumen, $volumen2, $concentracion, $volumen3, $alc_vol_merma, $volumen_merma) {
        $this->conexion_bd();
    
        // Obtener los IDs de clase y categoría
        $verificacion = $this->verificarRegistro($lote2, $fecha);
        
        if (is_numeric($verificacion)) {
            $idMovimiento = $this->obteneridMovimiento($tipo);
    
            if (!$idMovimiento) {
                // Manejar el caso en que no se puedan obtener los IDs
                return false;
            }
            $datos = $this->obtenerInicio($lote2);
            $datosArray = $datos;
            $inicialVolumen = $datosArray['FinalVolumen'];
            $inicialPorcentaje = $datosArray['FinalPorcentaje'];
        
            $inicialVolumen = floatval($inicialVolumen);
            $volumen = floatval($volumen);
            $inicialPorcentaje = floatval($inicialPorcentaje);
            $concentracion = floatval($concentracion);
            
            $resultado = $this->calcularFinal($inicialVolumen, $volumen, $inicialPorcentaje, $concentracion, $movimiento);
            $finalVolumen = $resultado['FinalVolumen'];
            $finalPorcentaje = $resultado['FinalPorcentaje'];
            if (is_numeric($finalVolumen)){

                $consulta = "UPDATE movimientomezcal
                    SET IdMovimiento=:idMovimiento,
                        Fecha=:fecha,
                        EntradaSalida=:tipo,
                        DestinoProcedencia=:procedencia, 
                        Volumen=:volumen,
                        PorcentajeAlcohol=:concentracion,
                        VolumenAgua=:volumen2,
                        Volumen55=:volumen3,
                        MermasVolumen=:volumen_merma,
                        MermasPorcentaje=:alc_vol_merma,
                        FinalVolumen=:FinalVolumen,
                        FinalPorcentaje=:FinalPorcentaje,
                        NumeroMovimiento=:NumeroMovimiento
                    WHERE Lote=:lote AND NumeroMovimiento=:numero";
                
                $parametros = [
                    ":lote" => $lote2, 
                    ":numero" => $numero,
                    ":idMovimiento" => $idMovimiento,
                    ":fecha" => $fecha,
                    ":tipo" => $movimiento,
                    ":procedencia" => $procedencia,
                    ":volumen" => $volumen,
                    ":volumen2" => $volumen2,
                    ":concentracion" => $concentracion,
                    ":alc_vol_merma" => $alc_vol_merma,
                    ":volumen_merma" => $volumen_merma,
                    ":volumen3" => $volumen3,
                    ":FinalVolumen" => $finalVolumen, 
                    ":FinalPorcentaje" => $finalPorcentaje,
                    ":NumeroMovimiento" => $verificacion
                ];
                
                $datos = $this->insertar_eliminar_actualizar($consulta, $parametros);
                $this->cerrar_conexion();
                return true; 
                        
        }
        else{
            return $finalVolumen;
        }
    
    
    } else {
    
    return $verificacion;
    }
    }
    }
    
    
?>
