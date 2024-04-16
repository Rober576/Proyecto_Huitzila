<?php
    include('../../../../config/Crud_bd.php');

 
    class NuevosCampos{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }
       
        function editar($cNom ,$cNomC, $cDes) {
            $query = "UPDATE plantas
                      SET NombreCientifico = :cCie, Descripcion = :cDesc
                      WHERE NombrePlanta= :id";
                      
            $params = [
                ":id" => $cNom,
                ":cCie" => $cNomC,
                ":cDesc" => $cDes,
              
            ];
        
            $this->base->insertar_eliminar_actualizar($query, $params);
            $this->base->cerrar_conexion();
        }
        
        
    }

?>