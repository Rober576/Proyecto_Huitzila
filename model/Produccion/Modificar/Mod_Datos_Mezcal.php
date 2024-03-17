<?php
    include('../../../../config/Crud_bd.php');
 
    class NuevosCampos{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }
        function obtenerIDClase($clase) {
            $q = "SELECT IDClase FROM clasemezcal WHERE Clase_Mezcal = :clase";
            $params = array(":clase" => $clase);
            
            $resultado = $this->base->mostrar($q, $params);
    
            if ($resultado) {
                return $resultado[0]['IDClase'];
            } else {
                return false;
            }
        }
    
        function obtenerIDCategoria($categoria) {
            $q = "SELECT IDCategoria FROM categoriamezcal WHERE Categoria = :categoria";
            $params = array(":categoria" => $categoria);
            
            $resultado = $this->base->mostrar($q, $params);
    
            if ($resultado) {
                return $resultado[0]['IDCategoria'];
            } else {
                return false;
            }
        }
    
        function editar($lote,$tanque,$clase,$edad,$categoria,$id) {
            $IDClase = $this->obtenerIDClase($clase);
        
  
            $IDCategoria = $this->obtenerIDCategoria($categoria);
    
            $query = "UPDATE registromezcal
                      SET Lote = :lote, Tanque = :tanque, IDClase = :clase ,Edad =:edad, Categoria=:ccategoria,
                      WHERE lote = :id";
                      
            $params = [
                
                ":id"=>$id,
                ":lote" =>$lote,
                ":tanque"=>$tanque,
                ":clase"=>$IDClase,
                ":edad"=>$edad,
                "categoria"=>$IDCategoria,
            

            ];
        
            $this->base->insertar_eliminar_actualizar($query, $params);
            $this->base->cerrar_conexion();
        }
        
        
    }

?>