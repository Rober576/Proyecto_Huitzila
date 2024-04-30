<?php
    include('../../../../config/Crud_bd.php');

    class NuevosCampos{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }

        //manda las consultas para insertar en la tabla de plantas
        function insertarActividadSinTrabajadores($ClavePlantacion, $Fecha, $nombreActividad, $NombrePlaga, $NombreHerbicida, $Costo, $CostoFinal, $Descripcion){

           // Recuperar id de la actividad seleccionada
            $consultaId = "SELECT IdActividad FROM actividadespredios WHERE Actividad = '$nombreActividad'";
            $ids = $this->base->mostrar($consultaId);

            // Verificar si se encontraron resultados
            if (!empty($ids)) {
                // Acceder al primer elemento del array y obtener el valor de la columna IdActividad
                $IdActividad = $ids[0]["IdActividad"];
                
            }


            $consultaNumeracion = "SELECT NumeracionActividad FROM  actividadplantacion WHERE ClavePlantacion = '$ClavePlantacion'";
            $numeraciones = $this->base->mostrar($consultaNumeracion);
            $max = 0; 

            if (!empty($numeraciones)) {
                foreach ($numeraciones as $numeracion) {
                    if($numeracion['NumeracionActividad'] > $max){
                        $max = $numeracion['NumeracionActividad'];
                    }          
                }              
            }                  

            $NumeracionActividad = $max + 1;

            $q1 = "INSERT INTO actividadplantacion (ClavePlantacion, Fecha, IdActividad, NombrePlaga, NombreHerbicida, Costo, NumeracionActividad, CostoFinal, Descripcion)
            VALUES(:c1, :c2, :c3, :c4, :c5, :c6, :c7, :c8, :c9)";
            $a1= [":c1"=>$ClavePlantacion, ":c2"=>$Fecha, ":c3"=>$IdActividad, ":c4"=>$NombrePlaga, ":c5"=>$NombreHerbicida, ":c6"=>$Costo, ":c7"=>$NumeracionActividad, ":c8"=>$CostoFinal, ":c9"=>$Descripcion];
            //acomoda todo en arreglos para mandarlos al CRUD, Puedes meter varios arreglos en un solo arreglo
            
            $querry = $q1;
            $parametros = $a1;           
            
            $this->base->insertar_eliminar_actualizar($querry, $parametros);

        
        }
    }

?>