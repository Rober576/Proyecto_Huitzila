<?php
    include('../../../../config/Crud_bd.php');

    class NuevosCampos{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        //manda las consultas para insertar en la tabla de predios
        function insertar($clave, $nombre, $superficie, $descripcion){
            //consultas para la tabla de predios
            $q1 = "INSERT INTO predios (CodigoArea, Nombre, Superficie, DescripcionArea)
            VALUES(:c1, :c2, :c3, :c4)";
            $a1= [":c1"=>$clave, ":c2"=>$nombre, ":c3"=>$superficie, ":c4"=>$descripcion];
            //acomoda todo en arreglos para mandarlos al CRUD, Puedes meter varios arreglos en un solo arreglo
            
            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
        }
        
    }

?>