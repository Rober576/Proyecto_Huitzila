<?php
include('../../../config/Crud_bd.php');

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

    function obtenerIDCategoria($categoria) {
        $q = "SELECT IDCategoria FROM categoriamezcal WHERE Categoria = :categoria";
        $params = array(":categoria" => $categoria);
        
        $resultado = $this->base->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDCategoria'];
        } else {
            return false;
        }
    }

    function insertar($lote, $tanque, $categoria, $clase, $edad, $concentracion, $volumen){

        $IDClase = $this->obtenerIDClase($clase);
        
  
        $IDCategoria = $this->obtenerIDCategoria($categoria);


        if ($IDClase !== false && $IDCategoria !== false) {

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
