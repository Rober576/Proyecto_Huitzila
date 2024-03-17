<?php
    include('../../config/Crud_bd.php');

    class Registro_usuarios{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        function insertar($Clave, $Nombre, $ApellidoPaterno, $ApellidoMaterno, $Correo, $Password, $IdentificadorTipo, $IdentificadorArea){
            $q1 = "INSERT INTO usuarios (Clave, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Password, IdentificadorTipo, IdentificadorArea)
            VALUES(:Clave, :Nombre, :ApellidoPaterno, :ApellidoMaterno, :Correo, :Password, :IdentificadorTipo, :IdentificadorArea)";
            $a1= [":Clave"=>$Clave, ":Nombre"=>$Nombre, ":ApellidoPaterno"=>$ApellidoPaterno, ":ApellidoMaterno"=>$ApellidoMaterno, ":Correo"=>$Correo, ":Password"=>$Password, ":IdentificadorTipo"=>$IdentificadorTipo, ":IdentificadorArea"=>$IdentificadorArea];
            $querry = $q1;
            $parametros = $this->base->sanitizar($a1);           
            

            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
        }
        
    }

?>