<?php
    include('../../config/Crud_bd.php');

    class Registro_usuarios{
        private $base;
    
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }
    
        function insertar($Clave, $Nombre, $ApellidoPaterno, $ApellidoMaterno, $Correo, $Password, $IdentificadorTipo, $IdentificadorArea){

            $correo_existente = $this->verificar_correo_existente($Correo);
            
            if ($correo_existente) {
                echo json_encode('corre');
            } else {
                $q1 = "INSERT INTO usuarios (Clave, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Password, IdentificadorTipo, IdentificadorArea)
                VALUES(:Clave, :Nombre, :ApellidoPaterno, :ApellidoMaterno, :Correo, :Password, :IdentificadorTipo, :IdentificadorArea)";
                $a1= [":Clave"=>$Clave, ":Nombre"=>$Nombre, ":ApellidoPaterno"=>$ApellidoPaterno, ":ApellidoMaterno"=>$ApellidoMaterno, ":Correo"=>$Correo, ":Password"=>$Password, ":IdentificadorTipo"=>$IdentificadorTipo, ":IdentificadorArea"=>$IdentificadorArea];
                $querry = $q1;
                $parametros = $a1;           
    
                $this->base->insertar_eliminar_actualizar($querry, $parametros);
                $this->base->cerrar_conexion();
                echo json_encode('exito');
            }
        }
    
        function verificar_correo_existente($Correo){
            $q2 = "SELECT COUNT(*) as count FROM usuarios WHERE Correo = :Correo";
            $a2 = [":Correo" => $Correo];
            $resultado = $this->base->mostrar($q2, $a2);
            
            if ($resultado && $resultado[0]['count'] > 0) {
                return true;
            } else {
                return false;
            }
        }
    }

?>