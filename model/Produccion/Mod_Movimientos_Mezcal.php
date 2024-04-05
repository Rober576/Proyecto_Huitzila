<?php
include('../../config/Crud_bd.php');
class  modificarMez extends Crud_bd{
    public function actualizar($lote,$fecha,$tipo,$procedencia,$movimiento, $volumen, $concentracion){
        $this->conexion_bd();
        
        // Obtener los IDs de clase y categoría
        $idMovimiento = $this->obteneridMovimiento($movimiento);
       

        $consulta = "UPDATE movimientosmezcal SET idMovimiento=:idMovimiento ,Fecha=:fecha,EntradaSalida=:entradasalida,DestinoProcedencia=:destinoprocedencia, Volumen=:volumen , PorcentajeAlcohol=:concentracion 
                        WHERE Lote=:lote";
        $parametros = [
            ":lote" => $lote, 
            ":idMovimiento" => $idMovimiento,
            ":fecha"=>$fecha,
            ":entradasalida"=>$tipo,
            ":destinoprocedencia"=>$procedencia,
            ":volumen" => $volumen,
            ":concentracion"=>$concentracion,
            
        ];
        $datos = $this->insertar_eliminar_actualizar($consulta, $parametros);
        $this->cerrar_conexion();
        return $datos;
    }

    // Función para obtener el ID de la clase a partir de su nombre
    function obteneridMovimiento($movimiento) {
        $q = "SELECT idMovimiento FROM tipomovimiento WHERE Movimiento = :movimiento";
        $params = array(":movimiento" => $movimiento);
        
        $resultado = $this->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['idMovimiento'];
        } else {
            return false;
        }
    }

   
}
?>
