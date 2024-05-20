
<?php
    include('../../config/Crud_bd.php');

    class Registro_Prod_Lotes{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        // Función para insertar los campos en la BD
        function insertar($c1, $c2, $c3){
            //consultas para la tabla de insumos
            $q1 = "INSERT INTO ProduccionLotes (Lote, Producto, Cantidad)
            VALUES(:c1, :c2, :c3)";
            $a1= [":c1"=>$c1, ":c2"=>$c2, ":c3"=>$c3];
            // Organiza en arreglos para mandarlos al CRUD

            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
        }
        
    }

?>