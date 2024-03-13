<?php
    include('../../config/Crud_bd.php');

    class NuevosCampos{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }

        function editar($cArea, $cNombre, $cSuperficie, $cDescripcion) {
            $query = "UPDATE predios 
                      SET Nombre = :cNom, Superficie = :cSuper, DescripcionArea = :cDesc 
                      WHERE CodigoArea = :id";
                      
            $params = [
                ":id" => $cArea,
                ":cNom" => $cNombre,
                ":cSuper" => $cSuperficie,
                ":cDesc" => $cDescripcion
            ];
        
            $this->base->insertar_eliminar_actualizar($query, $params);
            $this->base->cerrar_conexion();
        }
        
        
    }

?>