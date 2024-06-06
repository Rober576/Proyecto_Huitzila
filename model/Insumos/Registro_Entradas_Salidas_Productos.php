<?php
include('../../config/Crud_bd.php');

class Registro{
    private $base;

    function conexion(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function consultar($consulta, $parametros = []){
        
        $resultado = $this->base->consultar($consulta, $parametros);
        return $resultado;
    }

    function insertar($c1, $c2, $c3, $c4, $c5, $c6, $c7, $c8, $actualizarExistencia){
        
        $consulta_ultimo_numero = "SELECT MAX(NumeroMovimiento) AS ultimo_numero FROM movimientoproductos WHERE IDProducto = ?";
        $resultado = $this->consultar($consulta_ultimo_numero, [$c1]);
        $ultimo_numero = $resultado[0]['ultimo_numero'];

       
        if ($ultimo_numero === null) {
            $numero_movimiento = 1;
        } else {
            
            $numero_movimiento = $ultimo_numero + 1;
        }

        
        $consulta_insertar = "INSERT INTO movimientoproductos (NumeroMovimiento, IDProducto, Fecha, EntradaSalida, IdMovimiento, Destino, Cantidad, CostoUnitario, CostoTotal, CantidadRestante)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $parametros = [
            $numero_movimiento,
            $c1,
            $c2,
            $c3,
            $c4,
            $c5,
            $c6,
            $c7,
            $c8,
            $actualizarExistencia
        ];

        $this->base->insertar_eliminar_actualizar($consulta_insertar, $parametros);
        
    }    

    function actualizarExistencia($c1, $actualizarExistencia){
        $query = "UPDATE productoterminado SET Cantidad = ? WHERE IDProducto = ?";
        $existencia = intval($actualizarExistencia);
        $params = array($existencia, $c1);
        $this->base->insertar_eliminar_actualizar($query, $params);
        $this->base->cerrar_conexion();
    }
}

?>
