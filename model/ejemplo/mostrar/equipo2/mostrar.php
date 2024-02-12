<?php
include('../../../config/Crud_bd.php'); 

class MostrarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }
    //hace la consulta principal de los datos de las certificaciones
    function getEjemplo(){
        $querry = "SELECT * FROM campos";
        $resultados = $this->base->mostrar($querry);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    function buscador($busqueda){
        $querry = "SELECT * FROM campos WHERE c1 LIKE :busqueda OR c2 LIKE :busqueda";
        $resultados = $this->base->mostrar($querry, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
}

$obj = new MostrarCampos();
$obj->instancias();
?>