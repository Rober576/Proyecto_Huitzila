<?php
include('../../config/Crud_bd.php');

class MostrarMez extends Crud_bd {
    private $base;
   
    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT rm.Lote, cm.Clase_Mezcal, rm.Edad, rm.tanque, td.NombreDestilado
                  FROM registrodestilado rm
                  INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                  INNER JOIN tipodestilado td ON rm.IdTipoDes = td.IdTipoDes";
        
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }

    function buscador($busqueda){
        $query = "SELECT rm.Lote, cm.Clase_Mezcal, rm.Edad, rm.tanque, td.NombreDestilado
                  FROM registrodestilado rm
                  INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                  INNER JOIN tipodestilado td ON rm.IdTipoDes = td.IdTipoDes
                  WHERE rm.Lote LIKE :busqueda ";
        
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    
    function buscar_datos($id){
        $this->conexion_bd();
        $consulta = "SELECT rm.Lote, cm.Clase_Mezcal, rm.Edad, rm.tanque, td.NombreDestilado
                        FROM registrodestilado rm
                        INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                        INNER JOIN tipodestilado td ON rm.IdTipoDes = td.IdTipoDes";
        $resultados = $this->mostrar($consulta);
     
        $this->cerrar_conexion();
        return $resultados;
    }
}
?>
