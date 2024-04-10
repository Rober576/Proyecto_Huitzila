<?php
    include('../../../../config/Crud_bd.php');

    class NuevosCampos{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }

        //manda las consultas para insertar en la tabla de predplantacionesios
        function insertarPlantacion($ClavePlantacion, $Superficie, $CantidadPlantas	, $Fecha, $ClavePredio, $NombreTrabajador, $DatosVehiculo, $CostoGasolina, $CostoMaterial, $FechaInicio, $FechaFinal, $NombrePlanta){
            //consultas para la tabla de plantaciones
            $q1 = "INSERT INTO plantaciones (ClavePlantacion, Superficie, CantidadPlantas, Fecha, NombreTrabajador, DatosVehiculo, CostoGasolina, CostoMaterial, FechaInicio, FechaFinal)
            VALUES(:c1, :c2, :c3, :c4, :c5, :c6, :c7, :c8, :c9, :c10)";
            $a1= [":c1"=>$ClavePlantacion, ":c2"=>$Superficie, ":c3"=>$CantidadPlantas, ":c4"=>$Fecha, ":c5" => $NombreTrabajador, ":c6" => $DatosVehiculo, ":c7" => $CostoGasolina, ":c8" => $CostoMaterial, ":c9" => $FechaInicio, ":c10" => $FechaFinal];
            //acomoda todo en arreglos para mandarlos al CRUD, Puedes meter varios arreglos en un solo arreglo
            
            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);


            //consultas para la tabla de plantacionpredio
            $q1 = "INSERT INTO plantacionpredio (CodigoArea, ClavePlantacion)
            VALUES(:c1, :c2)";
            $a1= [":c1"=>$ClavePredio, ":c2"=>$ClavePlantacion];
            //acomoda todo en arreglos para mandarlos al CRUD, Puedes meter varios arreglos en un solo arreglo
            
            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            

            
        

        #INCERSION DE DATOS PARA LA TABLA DE RELACION ENTRE EL TIPO DE PLANTA Y LA CLAVE DE PLANTACION
        $q1 = "INSERT INTO tipoplantas (NombrePlanta, ClavePlantacion)
        VALUES(:c1, :c2)";
        $a1= [":c1"=>$NombrePlanta, ":c2"=>$ClavePlantacion];
        //acomoda todo en arreglos para mandarlos al CRUD, Puedes meter varios arreglos en un solo arreglo
        
        $querry = $q1;
        $parametros = $a1;           
        
        $this->base->insertar_eliminar_actualizar($querry, $parametros);

        $this->base->cerrar_conexion();

        }
    }

?>