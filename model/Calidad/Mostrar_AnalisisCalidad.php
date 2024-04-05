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
        $query = "SELECT * FROM calidad";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    function buscador($busqueda){
        $query = "SELECT * FROM calidad WHERE Lote LIKE :busqueda OR Azucares LIKE :busqueda OR Madurez LIKE :busqueda OR TamañoMateria LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        echo $_POST['consulta'];
        return $resultados;
        echo $resultados;
    }


}

$obj = new MostrarCampos();
$obj->instancias();
?>