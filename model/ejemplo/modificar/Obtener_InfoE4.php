<?php
include_once('../../config/Crud_bd.php');

class ObtenerInformacion {
    private $base;

    function instancias() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerInformacion($id) {
        $query = "SELECT * FROM tabla4 WHERE id = :id";
        $resultado = $this->base->mostrar($query, [":id" => $id]);
        // Devuelve la fila obtenida como un arreglo asociativo
        return $resultado[0]; // Devuelve solo la primera fila encontrada
    }
}
?>
