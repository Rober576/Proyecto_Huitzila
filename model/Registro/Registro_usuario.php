<?php
    include('../../config/Crud_bd.php');

    class Registro_usuarios{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        function insertar($Clave, $Nombre, $ApellidoPaterno, $ApellidoMaterno, $Correo, $Password){
            $q1 = "INSERT INTO usuarios (Clave, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Password)
            VALUES(:Clave, :Nombre, :ApellidoPaterno, :ApellidoMaterno, :Correo, :Password)";
            $a1= [":Clave"=>$Clave, ":Nombre"=>$Nombre, ":ApellidoPaterno"=>$ApellidoPaterno, ":ApellidoMaterno"=>$ApellidoMaterno, ":Correo"=>$Correo, ":Password"=>$Password];
            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
        }
        
    }

?>