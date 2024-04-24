<?php

include('../../config/Crud_bd.php');
class MostrarCampos extends Crud_bd{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }
    //hace la consulta principal de los datos de las certificaciones

    function getLotes(){
        $query = "SELECT * FROM registromezcal";
        $resultados = $this->base->mostrar($query);
        return $resultados;
    }

    function getEjemplo($lote){
        $this->conexion_bd();
        $query2 = "SELECT * FROM analisisficoquimico WHERE Lote='$lote'";
        $resultados2 = $this->mostrar($query2);
        $this->cerrar_conexion();
        return $resultados2;
    }

}


?>