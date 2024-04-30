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

        function insertarActividadConTrabajadores($ClavePlantacion, $Fecha, $nombreActividad, $NombrePlaga, $NombreHerbicida, $Costo, $CostoFinal, $Descripcion, $listaNombreTrabajador, $listaDiasSeleccionados, $listaDescripcion, $listaGastoGasolina, $listaDatosVehiculo, $listaGastoLiquidos, $listaCompraMaterial, $listaGastosExtras, $listaSemana){

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


             for ($i = 0; $i < count($listaNombreTrabajador); $i++){
                $NoSemana = $listaSemana[$i];
                $NombreTrabajador = $listaNombreTrabajador[$i];
                $ActividadDesarrollada = $listaDescripcion[$i];

                $Lunes = 0;
                $Martes = 0;
                $Miercoles = 0;
                $Jueves = 0;
                $Viernes = 0;
                $Sabado = 0;
                $Domingo = 0;

                for ($j = 0; $j< count($listaDiasSeleccionados[$i]); $j++){
                    if ($listaDiasSeleccionados[$i][$j] == "Lunes"){
                        $Lunes = 1;
                    } else if ($listaDiasSeleccionados[$i][$j] == "Martes"){
                        $Martes = 1;
                    } else if ($listaDiasSeleccionados[$i][$j] == "Miércoles"){
                        $Miercoles = 1;
                    } else if ($listaDiasSeleccionados[$i][$j] == "Jueves"){
                        $Jueves = 1;
                    } else if ($listaDiasSeleccionados[$i][$j] == "Viernes"){
                        $Viernes = 1;
                    } else if ($listaDiasSeleccionados[$i][$j] == "Sábado"){
                        $Sabado = 1;
                    }
                }

                $Gasolina = $listaGastoGasolina[$i];
                $Vehiculos = $listaDatosVehiculo[$i];
                $Liquidos = $listaGastoLiquidos[$i];
                $Material = $listaCompraMaterial[$i];
                $GastosExtras = $listaGastosExtras[$i];

                $Total = $Gasolina + $Liquidos + $Material + $GastosExtras;

                $cosultaActividadTrabajador = "INSERT INTO reporteactividad (ClavePlantacion, NumeracionActividad, NoSemana, NombreTrabajador, ActividadDesarrollada, Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo, Gasolina, Vehiculos, Liquidos, Materia, GastosExtras, Total)
                VALUES(:c1, :c2, :c3, :c4, :c5, :c6, :c7, :c8, :c9, :c10, :c11, :c12, :c13, :c14, :c15, :c16, :c17, :c18)";
                $vals= [":c1"=>$ClavePlantacion, ":c2"=>$NumeracionActividad, ":c3"=>$NoSemana, ":c4"=>$NombreTrabajador, ":c5"=>$ActividadDesarrollada, ":c6"=>$Lunes, ":c7"=>$Martes, ":c8"=>$Miercoles, ":c9"=>$Jueves, ":c10"=>$Viernes, ":c11"=>$Sabado, ":c12"=>$Domingo, ":c13"=>$Gasolina, ":c14"=>$Vehiculos, ":c15"=>$Liquidos, ":c16"=>$Material, ":c17"=>$GastosExtras, ":c18"=>$Total];
                
                $querry = $cosultaActividadTrabajador;
                $parametros = $vals;           
             
                $this->base->insertar_eliminar_actualizar($querry, $parametros);
             }
 
         
         }
    }

?>