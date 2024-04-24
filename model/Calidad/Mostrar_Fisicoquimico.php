<?php

include('../../config/Crud_bd.php');
class MostrarCampos{
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
        $query2 = "SELECT * FROM analisisficoquimico WHERE Lote='$lote'";
        $resultados2 = $this->base->mostrar($query2);
        return $resultados2;
    }

}


?>