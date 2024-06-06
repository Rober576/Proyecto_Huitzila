<?php
include_once('../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerValores() {
        $query = "SELECT * FROM valoresminmax";
        $result = $this->base->mostrar($query);

        $valores = array();
        foreach ($result as $row) {
            $valores[] = array(
                'ALCVolMin' => $row['ALCVolMin'],
                'ALCVolMax' => $row['ALCVolMax'],
                'ExtractoSecoMin' => $row['ExtractoSecoMin'],
                'ExtractoSecoMax' => $row['ExtractoSecoMax'],
                'MetanolMin' => $row['MetanolMin'],
                'MetanolMax' => $row['MetanolMax'],
                'AlcoholesSuperioresMin' => $row['AlcoholesSuperioresMin'],
                'AlcoholesSuperioresMax' => $row['AlcoholesSuperioresMax'],
                'AldehidosMin' => $row['AldehidosMin'],
                'AldehidosMax' => $row['AldehidosMax'],
                'FurfuralMin' => $row['FurfuralMin'],
                'FurfuralMax' => $row['FurfuralMax'],
                'PlomoMax' => $row['PlomoMax'],
                'ArsenicoMax' => $row['ArsenicoMax'], 
            );
        }

        return json_encode($valores);
    }

    function obtenerValores2() {
        $query = "SELECT * FROM valoresminmaxdcl";
        $result = $this->base->mostrar($query);

        $valores = array();
        foreach ($result as $row) {
            $valores[] = array(
                'PorcentajeAlcoholMin' => $row['PorcentajeAlcoholMin'],
                'PorcentajeAlcoholMax' => $row['PorcentajeAlcoholMax'],
                'MetanolMin' => $row['MetanolMin'],
                'MetanolMax' => $row['MetanolMax'],
                'AlcoholesSuperioresMin' => $row['AlcoholesSuperioresMin'],
                'AlcoholesSuperioresMax' => $row['AlcoholesSuperioresMax'],
            );
        }

        return json_encode($valores);
    }
}

$controlador = new ControladorDatos();

$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';

switch ($tipo) {
    case 'minmax':
        echo $controlador->obtenerValores();
        break;
    case 'minmaxDCL':
        echo $controlador->obtenerValores2();
        break;
}
?>
