<?php

    class Registro_areausuarios{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        //manda las consultas para insertar en las tablas de certificaciones internas e historicos
        function insertar($Clave, $IdentificadorArea){
            //consultas para la tabla de certificaciones internas
            $q1 = "INSERT INTO areausuario (Clave, IdentificadorArea)
            VALUES(:Clave, :IdentificadorArea)";
            $a1= [":Clave"=>$Clave, ":IdentificadorArea"=>$IdentificadorArea];
            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
        }
        
    }

?>