<?php
    include('../../config/Crud_bd.php');

    class NuevosCampos{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        function editar($c1, $c2, $c4, $c5, $id) {
            $query = "UPDATE tabla2 
                      SET campo1 = :c1, campo2 = :c2, campo4 = :c4, campo5 = :c5 
                      WHERE id = :id";
                      
            $params = [
                ":id" => $id,
                ":c1" => $c1,
                ":c2" => $c2,
                ":c4" => $c4,
                ":c5" => $c5
            ];
        
            $this->base->insertar_eliminar_actualizar($query, $params);
            $this->base->cerrar_conexion();
        }
        
        
    }

?>