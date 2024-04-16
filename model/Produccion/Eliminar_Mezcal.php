<?php
include_once('../../config/Crud_bd.php');

class EliminarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function buscar_lote($Lote){
        // No es necesario llamar a $this->base->conexion_bd() aquí, ya que debería haberse establecido previamente
        $consulta = "SELECT * FROM movimientomezcal WHERE Lote='$Lote'";
        $resultados = $this->base->mostrar($consulta);
        // No es necesario llamar a $this->base->cerrar_conexion() aquí, ya que se cerrará en otro lugar
        return $resultados;
    }

    function eliminar($Lote){
        // Verificar si el lote ya existe en la base de datos
        $loteExistente = $this->buscar_lote($Lote);
    
        // Si el lote existe, no realizar la eliminación
        if ($loteExistente) {
            return false; // No se realizó la eliminación
        }
    
        // No existe el lote, proceder con la eliminación
        $query = "DELETE FROM registromezcal WHERE Lote = :Lote";
        $this->base->insertar_eliminar_actualizar($query, [":Lote" => $Lote]);
        $this->base->cerrar_conexion();
    
        return true; // Se realizó la eliminación correctamente
    }
}
?> 