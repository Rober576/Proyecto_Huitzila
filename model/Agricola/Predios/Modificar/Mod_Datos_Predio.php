<?php
    include('../../config/Crud_bd.php');

    class NuevosCampos{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        function editar($c1, $c2, $c3, $c4, $id) {
            $query = "UPDATE Tabla4 
                      SET campo1 = :c1, campo2 = :c2, campo3 = :c3, campo4 = :c4 
                      WHERE id = :id";
                      
            $params = [
                ":id" => $id,
                ":c1" => $c1,
                ":c2" => $c2,
                ":c3" => $c3,
                ":c4" => $c4
            ];
        
            $this->base->insertar_eliminar_actualizar($query, $params);
            $this->base->cerrar_conexion();
        }
        
        
    }

?>