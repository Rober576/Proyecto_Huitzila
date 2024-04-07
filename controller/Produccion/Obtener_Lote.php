<?php
include_once('../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
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
    case 'lote':
        echo $controlador->obtenerLote();
        break;
}
?>
