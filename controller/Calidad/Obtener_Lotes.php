<?php
include_once('../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerLoteProduccion() {
        $query = "SELECT Lote FROM produccionlotes";
        $result = $this->base->mostrar($query);
    
        $lotes = array();
        foreach ($result as $row) {
            $lotes[] = $row['Lote'];
        }
    
        return json_encode($lotes);
    }
}

$controlador = new ControladorDatos();

echo $controlador->obtenerLoteProduccion();
?>
