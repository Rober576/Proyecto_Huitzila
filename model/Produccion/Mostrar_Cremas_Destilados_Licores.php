<?php
include('../../config/Crud_bd.php');

class MostrarCDL extends Crud_bd {
    private $base;
   
    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function getInfo(){
        $query = "SELECT rm.*, cm.Clase_Mezcal, cat.NombreDestilado
        FROM registrodestilado rm
        INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
        INNER JOIN tipodestilado cat ON rm.IdTipoDes = cat.IdTipoDes";

        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    function buscador($busqueda){
        $query = "SELECT rm.*, cm.Clase_Mezcal, cat.NombreDestilado
                  FROM registrodestilado rm
                  INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                  INNER JOIN tipodestilado cat ON rm.IdTipoDes = cat.IdTipoDes
                  WHERE rm.Lote LIKE :busqueda OR cm.Clase_Mezcal LIKE :busqueda  OR rm.Edad LIKE :busqueda OR rm.tanque LIKE :busqueda OR cat.NombreDestilado LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [
            ":busqueda" => "%".$busqueda."%",
        ]);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    
    
    function buscar_datos($id){
        $this->conexion_bd();
        $consulta = "SELECT rm.*, cm.Clase_Mezcal, cat.NombreDestilado
                        FROM registrodestilado rm
                        INNER JOIN clasemezcal cm ON rm.IDClase = cm.IDClase
                        INNER JOIN tipodestilado cat ON rm.IdTipoDes = cat.IdTipoDes
                        WHERE rm.Lote = '$id'";
                        
        $resultados = $this->mostrar($consulta);
     
        $this->cerrar_conexion();
        return $resultados;
    }

    function buscar_datos3($id){
        $this->conexion_bd();
        $consulta = "SELECT registrodestilado.Lote, registrodestilado.tanque, tipodestilado.NombreDestilado, 
        clasemezcal.Clase_Mezcal, registrodestilado.Edad FROM registrodestilado, tipodestilado, clasemezcal 
        WHERE clasemezcal.IDClase=registrodestilado.IDClase AND tipodestilado.IdTipoDes=registrodestilado.IdTipoDes 
        AND registrodestilado.Lote='$id'";
                        
        $resultados = $this->mostrar($consulta);
     
        $this->cerrar_conexion();
        return $resultados;
    }
}
?>


