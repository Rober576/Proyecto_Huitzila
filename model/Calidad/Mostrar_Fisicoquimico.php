<?php

include('../../config/Crud_bd.php');
class MostrarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }
    //hace la consulta principal de los datos de las certificaciones
    function getEjemplo(){
        $query = "SELECT * FROM analisisficoquimico";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

}

$obj = new MostrarCampos();
$obj->instancias();
?>