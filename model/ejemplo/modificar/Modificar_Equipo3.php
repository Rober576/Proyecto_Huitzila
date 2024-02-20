<?php
    include('../../config/Crud_bd.php');

    class NuevosCampos{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        //manda las consultas para insertar en las tablas de certificaciones internas e historicos
        function insertar($id, $c1,$c2, $c3, $c4, $c5){
            //consultas para la tabla de certificaciones internas
            $q1 = "UPDATE Tabla3 SET campo1 = :c1, campo2 = :c2, campo3 = :c3, campo4 = :c4, campo5 = :c5 WHERE id = '$id'";
            $a1= [":c1"=>$c1, ":c2"=>$c2, ":c3"=>$c3, ":c4"=>$c4, ":c5"=>$c5];
            //acomoda todo en arreglos para mandarlos al CRUD, Puedes meter varios arreglos en un solo arreglo
            /*$q2="INSERT INTO tratipousua (IdUsua,RFCT)
            VALUES (:num, :rfc)";
            $a2= [":num"=>$num,":rfc"=>$rfc];

            $querry = [$q1,$q2];
            $parametros = [$a1,$a2];*/
            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
        }
        
    }

?>