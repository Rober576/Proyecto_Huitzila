
<?php
    include('../../config/Crud_bd.php');

    class Registro{
        private $base;

        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        
        function insertar($c1, $c2, $c3, $c4, $c5, $c6, $c7, $c8){
            
            $q1 = "INSERT INTO movimientoinsumos (IDInsumo, Fecha, EntradaSalida, IdMovimiento, Destino, Cantidad, CostoUnitario, CostoTotal)
            VALUES(:c1, :c2, :c3, :c4, :c5, :c6, :c7, :c8)";
            $a1= [":c1"=>$c1, ":c2"=>$c2, ":c3"=>$c3, ":c4"=>$c4, ":c5"=>$c5, ":c6"=>$c6, ":c7"=>$c7, ":c8"=>$c8];

            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
        }
        
    }

?>