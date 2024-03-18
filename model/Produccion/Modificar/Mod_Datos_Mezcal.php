<?php
include('../../../config/Crud_bd.php');
class ModificarMezcal extends Crud_bd{
    public function actualizar($lote, $tanque, $clase, $edad, $especie,$categoria){
        $this->conexion_bd();
        
        // Obtener los IDs de clase y categoría
    
        $consulta = "UPDATE registromezcal SET Tanque=:tanque, IDClase=:clase, NombrePlanta=:especie, Edad=:edad, IDCategoria=:categoria 
                        WHERE Lote=:lote";
        $parametros = [
            
            ":lote" => $lote, 
            ":tanque" => $tanque,
            ":clase" => $clase,
            ":edad" => $edad,
            ":especie"=>$especie,
            ":categoria" => $categoria,
        ];
        $datos = $this->insertar_eliminar_actualizar($consulta, $parametros);
        $this->cerrar_conexion();
        return $datos;
        }
    }
?>
