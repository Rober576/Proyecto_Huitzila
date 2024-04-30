<?php
include('../../config/Crud_bd.php');

class NuevosCampos{
    private $base;
    function conexion(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }
    function obtenerIDClase($clase) {
        $q = "SELECT IDClase FROM clasemezcal WHERE Clase_Mezcal = :clase";
        $params = array(":clase" => $clase);
        
        $resultado = $this->base->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDClase'];
        } else {
            return false;
        }
    }
    function obtenerIDTipo($tipo) {
        $query = "SELECT IdTipoDes FROM tipodestilado WHERE NombreDestilado = :tipo";
        $params = array(":tipo" => $tipo);
        
        $result = $this->base->mostrar($query, $params);
    
        if ($result) {
            return $result[0]['IdTipoDes'];
        } else {
            return false;
        }
    }

    function actualizar($lote, $tipo, $clase, $edad, $tanque){
        $IDClase = $this->obtenerIDClase($clase);
        $IDTipo = $this->obtenerIDTipo($tipo);

        if ($IDClase !== false && $IDTipo !== false) {
            $q1 = "UPDATE registrodestilado SET IDClase=:IDClase, Edad=:edad, 
            tanque=:tanque, IdTipoDes=:IDTipo WHERE Lote=:lote";
            
            $params = array(
                ":lote" => $lote,
                ":IDTipo" => $IDTipo,
                ":IDClase" => $IDClase,
                ":edad" => $edad,
                ":tanque" => $tanque
            );
            
            $this->base->insertar_eliminar_actualizar($q1, $params);
            $this->base->cerrar_conexion();
            return true; // La inserción se realizó correctamente
        } else {
            // Si no se encuentran ambos IDClase e IDCategoria, devolvemos false
            return false;
        } 
    }
}
?>