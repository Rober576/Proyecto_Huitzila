<?php
    include('../../../../config/Crud_bd.php');
 
    class NuevosCampos{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }
       
        function editar($cCie, $cNom, $cDes) {
            $query = "UPDATE plagas
                      SET Cientifico = :cCie, Descripcion = :cDesc
                      WHERE Nombre= :id";
                      
            $params = [
                ":id" => $cNom,
                ":cCie" => $cCie,
                ":cDesc" => $cDes,
              
            ];
        
            $this->base->insertar_eliminar_actualizar($query, $params);
            $this->base->cerrar_conexion();
        }
        
        
    }

?>