<?php
include('../../config/Crud_bd.php');
class  modificarMez extends Crud_bd{
    function obtenerIDLote($lote2) {
        $q = "SELECT Lote FROM registromezcal WHERE Lote = :lote";
        $params = array(":Lote" => $lote2);
        
        $resultado = $this->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDLote'];
        } else {
            return false;
        }
    }
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
                IFNULL(m.FinalPorcentaje, 0) AS FinalPorcentaje
            FROM movimientomezcal m
            WHERE m.Lote = '$lote2'
            ORDER BY m.NumeroMovimiento DESC
            LIMIT 1
        ";
    
        $result = $this->mostrar($query);
    
        if (!empty($result)) {
            return $result[0];
        } else {
            // Si no hay resultados, retornar un array con valores predeterminados
            return array('FinalVolumen' => 0, 'FinalPorcentaje' => 0);
        }
    }
    

    function calcularFinal($inicialVolumen, $volumen, $inicialPorcentaje, $concentracion, $movimiento) {
        // Convertir a números de punto flotante
        $inicialVolumen = floatval($inicialVolumen);
        $volumen = floatval($volumen);
        $inicialPorcentaje = floatval($inicialPorcentaje);
        $concentracion = floatval($concentracion);
    
        // Inicializar variables para FinalVolumen y FinalPorcentaje
        $finalVolumen = 0;
        $finalPorcentaje = 0;
    
        // Verificar el tipo de movimiento
        if ($movimiento == 'entrada') {
            // Sumar volumen
            $finalVolumen = $inicialVolumen + $volumen;
            // Calcular porcentaje
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
    
        // Devolver los resultados
        return array('FinalVolumen' => $finalVolumen, 'FinalPorcentaje' => $finalPorcentaje);
    }
    function verificarRegistro($lote2, $fecha) {
        // Verificar si existe algún registro para el lote
        $query = "
            SELECT COUNT(*) AS count
            FROM movimientomezcal
            WHERE Lote = '$lote2'
        ";
        $result = $this->mostrar($query);
        
        if (!empty($result) && $result[0]['count'] > 0) {
            // Si hay al menos un registro para el lote, obtener el número de movimiento más alto y su fecha
            $query = "
                SELECT MAX(NumeroMovimiento) AS MaxNumeroMovimiento, Fecha
                FROM movimientomezcal
                WHERE Lote = '$lote2'
            ";
            $result = $this->mostrar($query);
    
            $numeroMovimiento = $result[0]['MaxNumeroMovimiento'];
            $fechaUltimoRegistro = $result[0]['Fecha'];
    
            // Verificar si la fecha que se quiere ingresar es mayor o igual a la última fecha registrada
            if ($fecha >= $fechaUltimoRegistro) {
                // Devolver el número de movimiento más alto más uno
                return $numeroMovimiento + 1;
            } else {
                // La fecha es menor que la última fecha registrada
                return "La fecha ingresada es menor que la ultima fecha registrada";
            }
        } else {
            // Si no hay registros para el lote, retornar 1 como primer número de movimiento
            return 0;
        }
    }
   

    
    function actualizar($lote2,$numero,$fecha,$tipo,$procedencia,$movimiento, $volumen,$volumen2, $concentracion,$volumen3,$alc_vol_merma,$volumen_merma){
        $this->conexion_bd();
        
        // Obtener los IDs de clase y categoría
        $idMovimiento = $this->obteneridMovimiento($tipo);
      
        if (!$idMovimiento) {
            // Manejar el caso en que no se puedan obtener los IDs
            return false;
        }

        $verificacion = $this->verificarRegistro($lote2, $fecha);
        if (is_numeric($verificacion)) {

            $IDMovimiento = $this->obtenerIDMovimiento($tipo);
            $datos=$this->obtenerInicio($lote2);
        
            $datosArray = json_decode($datos, true);
        
            $inicialVolumen = $datosArray['FinalVolumen'];
            $inicialPorcentaje = $datosArray['FinalPorcentaje'];
        
            $inicialVolumen = floatval($inicialVolumen);
            $volumen = floatval($volumen);
            $inicialPorcentaje = floatval($inicialPorcentaje);
            $concentracion = floatval($concentracion);
            
            $resultado = $this->calcularFinal($inicialVolumen, $volumen, $inicialPorcentaje, $concentracion,$movimiento);
            // Ahora puedes acceder a los valores de FinalVolumen y FinalPorcentaje
            $finalVolumen = $resultado['FinalVolumen'];
            $finalPorcentaje = $resultado['FinalPorcentaje'];


        $consulta = "UPDATE movimientomezcal SET IdMovimiento=:idMovimiento ,Fecha=:fecha,
        EntradaSalida=:tipo,DestinoProcedencia=:procedencia, Volumen=:volumen , PorcentajeAlcohol=:concentracion,
        VolumenAgua=:volumen2 ,Volumen55=:volumen3, MermasVolumen=:volumen_merma, MermasPorcentaje=:alc_vol_merma,
        finalVolumen=:FinalVolumen, FinalPorcentaje=:FinalPorcentaje, NumeroMovimiento=:NumeroMovimiento
                    WHERE Lote=:lote and NumeroMovimiento=:numero";
        
        $parametros = [
            ":lote" => $lote2, 
            ":numero" =>$numero,
            ":idMovimiento" => $idMovimiento,
            ":fecha"=>$fecha,
            ":tipo"=>$movimiento,
            ":procedencia"=>$procedencia,
            ":volumen" => $volumen,
            ":volumen2"=>$volumen2,
            ":concentracion"=>$concentracion,
            ":alc_vol_merma"=>$alc_vol_merma,
            ":volumen_merma"=>$volumen_merma,
            ":volumen3"=>$volumen3,
            ":FinalVolumen" => $finalVolumen, 
            ":FinalPorcentaje" => $finalPorcentaje,
            ":NumeroMovimiento"=>$verificacion

        ];

    
        $datos = $this->insertar_eliminar_actualizar($consulta, $parametros);
        $this->cerrar_conexion();
        return $datos;
    }

   
}}


?>
