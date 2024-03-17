
<?php
    include('../../config/Crud_bd.php');

    class Registro_Insumos{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        // Función para insertar los campos en la BD
        function insertar($c1, $c2, $c3, $c4, $c5, $c6, $c7, $c8){
            //consultas para la tabla de insumos
            $q1 = "INSERT INTO insumos (Identificador, Nombre, Descripcion, Unidades, Existencia, Stockmi, Stockma, Costo)
            VALUES(:c1, :c2, :c3, :c4, :c5, :c6, :c7, :c8)";
            $a1= [":c1"=>$c1, ":c2"=>$c2, ":c3"=>$c3, ":c4"=>$c4, ":c5"=>$c5, ":c6"=>$c6, ":c7"=>$c7, ":c8"=>$c8];
            // Organiza en arreglos para mandarlos al CRUD

            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
        }
        
    }

?>