<?php
include_once('../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerAreas() {
        $query = "SELECT Correo FROM usuarios";
        $result = $this->base->mostrar($query);
    
        $correos = array();
        foreach ($result as $row) {
            $correos[] = $row['Correo'];
        }
    
        return json_encode($correos);
    }
}

$controlador = new ControladorDatos();

$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';

switch ($tipo) {
    case 'correos':
        echo $controlador->obtenerAreas();
        break;
}
?>
