<?php
include('../../config/Crud_bd.php');

class MostrarCDL extends Crud_bd {
    private $base;
   
    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT rm.*, cm.Clase_Mezcal, cat.Categoria
        FROM registrodestilado rm
        INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
        INNER JOIN categoriamezcal cat ON rm.IdTipoDes = cat.IDCategoria";

        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($busqueda){
        $query = "SELECT * FROM registrodestilado WHERE Lote LIKE :busqueda OR IDClase LIKE :clase OR Edad LIKE :busqueda OR tanque LIKE :busqueda OR IdTipoDes LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;

    }
    function buscar_datos($id){
        $this->conexion_bd();
        $consulta = "SELECT rm.*, cm.Clase_Mezcal, cat.Categoria
                        FROM registrodestilado rm
                        INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                        INNER JOIN categoriamezcal cat ON rm.IdTipoDes = cat.IDCategoria
                        WHERE rm.Lote = '$id'";
                        
        $resultados = $this->mostrar($consulta);
     
        $this->cerrar_conexion();
        return $resultados;
    }
}
?>


