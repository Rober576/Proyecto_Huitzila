<?php
    include('../../../../config/Crud_bd.php');
 
    class NuevosCampos{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }
       
        function editar($cNom, $cFab, $cDes) {
            $query = "UPDATE herbicidas
                      SET Fabricante = :cFab, Descripcion = :cDesc
                      WHERE NombreHerbicidas= :id";
                      
            $params = [
                ":id" => $cNom,
                ":cFab" => $cFab,
                ":cDesc" => $cDes,
              
            ];
        
            $this->base->insertar_eliminar_actualizar($query, $params);
            $this->base->cerrar_conexion();
        }
        
        
    }

?>