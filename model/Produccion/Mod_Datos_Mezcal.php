<?php
include('../../../config/Crud_bd.php');
class ModificarMezcal extends Crud_bd{
    public function actualizar($lote, $tanque, $clase, $edad, $especie, $categoria){
        $this->conexion_bd();
        
        // Obtener los IDs de clase y categoría
        $IDClase = $this->obtenerIDClase($clase);
        $IDCategoria = $this->obtenerIDCategoria($categoria);

        if (!$IDClase || !$IDCategoria) {
            // Manejar el caso en que no se puedan obtener los IDs
            return false;
        }

        $consulta = "UPDATE registromezcal SET Tanque=:tanque, IDClase=:IDClase, NombrePlanta=:especie, Edad=:edad, IDCategoria=:IDCategoria 
                        WHERE Lote=:lote";
        $parametros = [
            ":lote" => $lote, 
            ":tanque" => $tanque,
            ":IDClase" => $IDClase,
            ":edad" => $edad,
            ":especie"=>$especie,
            ":IDCategoria" => $IDCategoria,
        ];
        $datos = $this->insertar_eliminar_actualizar($consulta, $parametros);
        $this->cerrar_conexion();
        return $datos;
    }

    // Función para obtener el ID de la clase a partir de su nombre
    function obtenerIDClase($clase) {
        $q = "SELECT IDClase FROM clasemezcal WHERE Clase_Mezcal = :clase";
        $params = array(":clase" => $clase);
        
        $resultado = $this->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDClase'];
        } else {
            return false;
        }
    }

    // Función para obtener el ID de la categoría a partir de su nombre
    function obtenerIDCategoria($categoria) {
        $q = "SELECT IDCategoria FROM categoriamezcal WHERE Categoria = :categoria";
        $params = array(":categoria" => $categoria);
        
        $resultado = $this->mostrar($q, $params);

        if ($resultado) {
            return $resultado[0]['IDCategoria'];
        } else {
            return false;
        }
    }
}
?>
