<?php
include('../../../config/Crud_bd.php');
class ModificarMezcal extends Crud_bd{
    public function obtenerIDClase($clase) {
        $q = "SELECT IDClase FROM clasemezcal WHERE Clase_Mezcal = :clase";
        $params = array(":clase" => $clase);
        
        $resultado = $this->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDClase'];
        } else {
            return false;
        }
    }
    public function obtenerIDCategoria($categoria) {
        $q = "SELECT IDCategoria FROM categoriamezcal WHERE Categoria = :categoria";
        $params = array(":categoria" => $categoria);
        
        $resultado = $this->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDCategoria'];
        } else {
            return false;
        }
    }

    public function actualizar($lote, $tanque, $clase, $edad, $especie, $categoria){
        $this->conexion_bd();
        
        // Obtener los IDs de clase y categoría
        $IDClase = $this->obtenerIDClase($clase);
        $IDCategoria = $this->obtenerIDCategoria($categoria);

        // Verificar que se hayan obtenido los IDs correctamente
        if ($IDClase !== false && $IDCategoria !== false) {
            $consulta = "UPDATE registromezcal SET Lote=:lote, Tanque=:tanque, IDClase=:IDClase, Edad=:edad, Especie=:especie, IDCategoria=:categoria 
                         WHERE Lote=:lote";
            $parametros = [
                ":lote" => $lote, 
                ":tanque" => $tanque,
                ":IDClase" => $IDClase,
                ":edad" => $edad,
                ":especie" => $especie,
                ":categoria" => $IDCategoria,
            ];
            $datos = $this->insertar_eliminar_actualizar($consulta, $parametros);
            $this->cerrar_conexion();
            return $datos;
        }
    }
}
?>
