<?php
include_once('../../../config/Crud_bd.php');

class ControladorDatos {
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

    function obtenerEspecies() {
        $query = "SELECT NombrePlanta FROM plantas";
        $result = $this->base->mostrar($query);

        $especies = array();
        foreach ($result as $row) {
            $especies[] = $row['NombrePlanta'];
        }

        return json_encode($especies);
    }
}

$controlador = new ControladorDatos();

$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';

switch ($tipo) {
    case 'clases':
        echo $controlador->obtenerClases();
        break;
    case 'especies':
        echo $controlador->obtenerEspecies();
        break;
    default:
        echo $controlador->obtenerCategorias();
        break;
}
?>
