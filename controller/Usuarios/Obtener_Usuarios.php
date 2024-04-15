<?php
include_once('../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerAreas() {
        $query = "SELECT * FROM tipoareas";
        $result = $this->base->mostrar($query);
    
        $areas = array();
        foreach ($result as $row) {
            $areas[] = array(
                'IdentificadorArea' => $row['IdentificadorArea'],
                'NombreArea' => $row['NombreArea'] 
            );
        }
    
        return json_encode($areas);
    }

    function obtenerTipos() {
        $query = "SELECT * FROM tipousuario";
        $result = $this->base->mostrar($query);
    
        $tipos = array();
        foreach ($result as $row) {
            $tipos[] = array(
                'IdentificadorTipo' => $row['IdentificadorTipo'],
                'Tipo' => $row['Tipo'] 
            );
        }
    
        return json_encode($tipos);
    }
}

$controlador = new ControladorDatos();

$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';

switch ($tipo) {
    case 'area_us':
        echo $controlador->obtenerAreas();
        break;
    case 'tipo_us':
        echo $controlador->obtenerTipos();
        break;
}
?>
