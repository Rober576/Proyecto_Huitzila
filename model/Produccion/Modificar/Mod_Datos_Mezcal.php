<?php
    include('../../../../config/Crud_bd.php');
 
    class NuevosCampos{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }

        function editar($cLote,$cNomPlanta,$cTanque,$cIdClase,$cEdad,$cIdMovimiento,$cIdVolomen,$cConcentracion,$cDestinoSalida,$cIdcategoria,$id) {
            $query = "UPDATE registromezcal
                      SET Lote = :cLote, NombrePlanta = :cnomPlata, Tanque = :cTanque, IDClase = :cidclase,Edad =:cedad,IDMovimiento =:cidmovimiento,Volumen=:cvolumen,concentracion=:cconcetracion,DestinoSalida=:cdestinoSalida,Categoria=:ccategoria,
                      WHERE CodigoArea = :id";
                      
            $params = [
                
                ":id"=>$id,
                ":clote" =>$cLote,
                ":cnomPlanta"=>$cNomPlanta,
                ":ctanque"=>$cTanque,
                ":cidclase"=>$cIdClase,
                ":cedad"=>$cEdad,
                ":cidmovimiento"=>$cIdMovimiento,
                ":cvolumen"=>$cIdVolomen,
                "cconcentracion"=>$cConcentracion,
                ":cdestinoSalida"=>$cDestinoSalida,
                "cidcategoria"=>$cIdcategoria,

            ];
        
            $this->base->insertar_eliminar_actualizar($query, $params);
            $this->base->cerrar_conexion();
        }
        
        
    }

?>