<?php
    include('../../../../config/Crud_bd.php');
 
    class NuevosCampos{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }

        function editar($cArea, $cNombre, $cSuperficie, $cDescripcion, $id) {
            $query = "UPDATE predios 
                      SET Nombre = :cNom, Superficie = :cSuper, DescripcionArea = :cDesc, CodigoArea = :cArea
                      WHERE CodigoArea = :id";
                      
            $params = [
                ":id" => $id,
                ":cNom" => $cNombre,
                ":cSuper" => $cSuperficie,
                ":cDesc" => $cDescripcion,
                ":cArea" => $cArea
            ];
        
            $this->base->insertar_eliminar_actualizar($query, $params);
            $this->base->cerrar_conexion();
        }
        
        
    }

?>