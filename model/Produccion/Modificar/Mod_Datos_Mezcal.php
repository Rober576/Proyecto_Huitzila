<?php
include('../../../config/Crud_bd.php');
class ModificarMezcal extends Crud_bd{
    public function actualizar($lote, $tanque, $IDClase, $edad, $especie,$IDCategoria){
        $this->conexion_bd();
        
        // Obtener los IDs de clase y categoría
    
        $consulta = "UPDATE registromezcal SET Lote=:lote, Tanque=:tanque, IDClase=:IDClase,NombrePLanta=:especie, Edad=:edad, IDCategoria=:IDCategoria 
                        WHERE IDClase=:IDClase";
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
    }
?>
