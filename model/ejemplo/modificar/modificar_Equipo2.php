<?php
include('../../config/Crud_bd.php');

class NuevosCampos{
    private $base;

    //crea un objeto del CRUD para hacer las consultas
    function conexion(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    //manda las consultas para insertar en las tablas de certificaciones internas e historicos
    function editar($id, $c1, $c2, $c3, $c4, $c5){
        // Consulta para actualizar los datos en la tabla
        $query = "UPDATE Tabla2 SET campo2 = :c2, campo3 = :c3, campo4 = :c4, campo5 = :c5 WHERE id = :id";
        // Parámetros para la consulta
        $params = array(":id" => $id, ":c1" => $c1, ":c2" => $c2, ":c3" => $c3, ":c4" => $c4, ":c5" => $c5);

        // Ejecutar la consulta de actualización
        $this->base->insertar_eliminar_actualizar($query, $params);
        $this->base->cerrar_conexion();
    }
}

?>
