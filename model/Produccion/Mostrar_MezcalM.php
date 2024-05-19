<?php
include('../../config/Crud_bd.php');

class MostrarMez extends Crud_bd {
    private $base;
   
    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT rm.*, cm.Clase_Mezcal, cat.Categoria
                  FROM registromezcal rm
                  INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                  INNER JOIN categoriamezcal cat ON rm.IDCategoria = cat.IDCategoria";
        
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($busqueda){

        $query = "SELECT rm.*, cm.Clase_Mezcal, cat.Categoria
        FROM registromezcal rm 
        INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
        INNER JOIN categoriamezcal cat ON rm.IDCategoria = cat.IDCategoria
        WHERE rm.Lote LIKE :busqueda OR rm.NombrePlanta LIKE :busqueda OR rm.Tanque LIKE :busqueda OR cm.Clase_Mezcal LIKE :busqueda OR rm.Edad LIKE :busqueda OR cat.Categoria LIKE :busqueda ";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;

    }
    function buscar_datos($id){
        $this->conexion_bd();
        $consulta = "SELECT rm.*, cm.Clase_Mezcal, cat.Categoria
                        FROM registromezcal rm
                        INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                        INNER JOIN categoriamezcal cat ON rm.IDCategoria = cat.IDCategoria
                        WHERE rm.Lote = '$id'";
                        
        $resultados = $this->mostrar($consulta);
     
        $this->cerrar_conexion();
        return $resultados;
    }
}
?>


