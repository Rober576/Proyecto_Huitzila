<?php
include_once('../../../config/Crud_bd.php');

class ControladorCategorias {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerCategorias() {
        $query = "SELECT Categoria FROM categoriamezcal";
        $result = $this->base->mostrar($query);

        $categorias = array();
        foreach ($result as $row) {
            $categorias[] = $row['Categoria'];
        }

        return json_encode($categorias);
    }

    function obtenerClases() {
        $query = "SELECT Clase_Mezcal FROM clasemezcal";
        $result = $this->base->mostrar($query);

        $clases = array();
        foreach ($result as $row) {
            $clases[] = $row['Clase_Mezcal'];
        }

        return json_encode($clases);
    }
}

$controlador = new ControladorCategorias();

if(isset($_GET['tipo']) && $_GET['tipo'] === 'clases') {
    echo $controlador->obtenerClases();
} else {
    echo $controlador->obtenerCategorias();
}
?>
