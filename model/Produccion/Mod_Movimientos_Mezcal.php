<?php
include('../../config/Crud_bd.php');
class  modificarMez extends Crud_bd{
    public function actualizar($lote2,$numero,$fecha,$tipo,$procedencia,$movimiento, $volumen,$volumen2, $concentracion){
        $this->conexion_bd();
        
        // Obtener los IDs de clase y categoría
        $idMovimiento = $this->obteneridMovimiento($tipo);
        echo json_encode($idMovimiento);
        if (!$idMovimiento ) {
            // Manejar el caso en que no se puedan obtener los IDs
            return false;
        }

        $consulta = "UPDATE movimientomezcal SET IdMovimiento=:idMovimiento ,Fecha=:fecha,EntradaSalida=:tipo,DestinoProcedencia=:procedencia, Volumen=:volumen , PorcentajeAlcohol=:concentracion, VolumenAgua=:volumen2
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

        ];

    
        $datos = $this->insertar_eliminar_actualizar($consulta, $parametros);
        $this->cerrar_conexion();
        return $datos;
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

   
}
?>
