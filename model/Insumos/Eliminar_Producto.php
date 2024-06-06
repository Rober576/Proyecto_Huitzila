<?php
include_once('../../config/Crud_bd.php');

class EliminarProducto{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($id){

        $query = "DELETE FROM productoterminado WHERE IDProducto = :id";
        $this->base->insertar_eliminar_actualizar($query, [":id" => $id]);
        $this->base->cerrar_conexion();

    }

    //retorna true si el producto tiene movimientos registrados y false si no
    function buscarMovimiento($id){
        $querry = "SELECT IDProducto FROM movimientoproductos WHERE IDProducto = :id";
        $resultados = $this->base->consultar($querry, [":id" => $id]);
       

        if($resultados != null){
            return true;
        }

        else{
            return false;
        }
    }
}
?>