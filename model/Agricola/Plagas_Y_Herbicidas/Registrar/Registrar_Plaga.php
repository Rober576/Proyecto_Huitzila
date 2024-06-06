<?php
    include('../../../../config/Crud_bd.php');

    class NuevosCampos{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }

        //manda las consultas para insertar en la tabla de plantas
        function insertarPlantacion($NombrePlanta, $NombreCientifico, $Descripcion){
            //consultas para la tabla de plantaciones
            $q1 = "INSERT INTO plagas (Nombre, Cientifico, Descripcion)
            VALUES(:c1, :c2, :c3)";
            $a1= [":c1"=>$NombrePlanta, ":c2"=>$NombreCientifico, ":c3"=>$Descripcion];
            //acomoda todo en arreglos para mandarlos al CRUD, Puedes meter varios arreglos en un solo arreglo
            
            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);

        
        }
    }

?>