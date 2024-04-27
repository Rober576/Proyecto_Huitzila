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
    
    function buscar_lote($lote){
        // No es necesario llamar a $this->base->conexion_bd() aquí, ya que debería haberse establecido previamente
        $consulta = "SELECT * FROM registrodestilado WHERE Lote='$lote'";
        $resultados = $this->base->mostrar($consulta);
        // No es necesario llamar a $this->base->cerrar_conexion() aquí, ya que se cerrará en otro lugar
        return $resultados;
    }

    function insertar($lote, $tipo, $clase, $edad, $tanque){
        // Verificar si el lote ya existe en la base de datos
        $loteExistente = $this->buscar_lote($lote);
        
        // Si el lote existe, mostrar una alerta y no realizar la inserción
        if ($loteExistente) {
            return false; // No se realizó la inserción
        }

        // Si el lote no existe, proceder con la inserción
        $IDClase = $this->obtenerIDClase($clase);
        $IDTipo = $this->obtenerIDTipo($tipo);

        if ($IDClase !== false && $IDTipo !== false) {
            $q1 = "INSERT INTO registrodestilado (Lote, IdTipoDes, IDClase, Edad, tanque) 
                    VALUES (:lote, :IDTipo, :IDClase, :edad, :tanque)";
            
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
