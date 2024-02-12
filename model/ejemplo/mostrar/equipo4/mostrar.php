<?php
include('../../../../config/Crud_bd.php');
class MostrarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }
    //hace la consulta principal de los datos de las certificaciones
    function getEjemplo(){
        $query = "SELECT * FROM tabla4";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    function buscador($busqueda){
        $query = "SELECT * FROM tabla4 WHERE campo1 LIKE :busqueda OR campo2 LIKE :busqueda OR campo3 LIKE :busqueda OR campo4 LIKE :busqueda OR campo5 LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
        echo $resultados;
    }
}

$obj = new MostrarCampos();
$obj->instancias();
?>
