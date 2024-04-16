<?php
include_once('../../config/Crud_bd.php');

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

    function obtenerMovimientos() {
        $query = "SELECT Movimiento FROM tipomovimiento";
        $result = $this->base->mostrar($query);

        $movimiento = array();
        foreach ($result as $row) {
            $movimiento[] = $row['Movimiento'];
        }

        return json_encode($movimiento);
    }

    function obtenerLote() {
        $query = "SELECT Lote FROM registromezcal";
        $result = $this->base->mostrar($query);
    
        $lotes = array();
        foreach ($result as $row) {
            $lotes[] = $row['Lote'];
        }
    
        return json_encode($lotes);
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
    case 'movimientos':
        echo $controlador->obtenerMovimientos();
        break;
    case 'lote':
        echo $controlador->obtenerLote();
        break;
        
    default:
        echo $controlador->obtenerCategorias();
        break;
}
?>
