<?php
include('../../../config/Crud_bd.php');

class NuevosCampos{
    private $base;

    function conexion(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerIDClase($clase) {
        // Consulta para obtener el IDClase correspondiente al valor de $clase
        $q = "SELECT IDClase FROM clasemezcal WHERE Clase_Mezcal = :clase";
        $params = array(":clase" => $clase);
        
        // Obtener el resultado de la consulta utilizando el método mostrar de Crud_bd
        $resultado = $this->base->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDClase'];
        } else {
            return false; // Si no se encuentra la clase, devolvemos false
        }
    }

    function obtenerIDCategoria($categoria) {
        // Consulta para obtener el IDCategoria correspondiente al valor de $categoria
        $q = "SELECT IDCategoria FROM categoriamezcal WHERE Categoria = :categoria";
        $params = array(":categoria" => $categoria);
        
        // Obtener el resultado de la consulta utilizando el método mostrar de Crud_bd
        $resultado = $this->base->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDCategoria'];
        } else {
            return false; // Si no se encuentra la categoría, devolvemos false
        }
    }

    function insertar($lote, $tanque, $categoria, $clase, $edad, $concentracion, $volumen){
        // Obtener el IDClase correspondiente al valor de $clase
        $IDClase = $this->obtenerIDClase($clase);
        
        // Obtener el IDCategoria correspondiente al valor de $categoria
        $IDCategoria = $this->obtenerIDCategoria($categoria);

        // Verificar si tanto $IDClase como $IDCategoria son diferentes de false antes de continuar
        if ($IDClase !== false && $IDCategoria !== false) {
            // Si se encuentran tanto el IDClase como el IDCategoria, procedemos con la inserción
            $q1 = "INSERT INTO registromezcal (Lote, Tanque, IDCategoria, IDClase, Edad, Concentracion, Volumen) 
                    VALUES (:lote, :tanque, :IDCategoria, :IDClase, :edad, :concentracion, :volumen)";
            
            $params = array(
                ":lote" => $lote,
                ":tanque" => $tanque,
                ":IDCategoria" => $IDCategoria,
                ":IDClase" => $IDClase,
                ":edad" => $edad,
                ":concentracion" => $concentracion,
                ":volumen" => $volumen
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
