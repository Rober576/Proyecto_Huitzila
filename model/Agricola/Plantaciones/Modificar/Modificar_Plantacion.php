<?php
include('../../../../config/Crud_bd.php');

class ModificarCampos {
    private $base;

    function conexion(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function modificarPlantacion($ClavePlantacion, $Superficie, $CantidadPlantas, $Fecha, $NombreTrabajador, $DatosVehiculo, $CostoGasolina, $CostoMaterial, $FechaInicio, $FechaFinal, $NombrePlanta) {
        // Consulta para actualizar los datos en la tabla de plantaciones

        $queryPlantacion = "UPDATE plantaciones 
                            SET Superficie = :superficie, 
                                CantidadPlantas = :cantidad, 
                                Fecha = :fecha, 
                                NombreTrabajador = :trabajador, 
                                DatosVehiculo = :vehiculo, 
                                CostoGasolina = :gasolina, 
                                CostoMaterial = :material, 
                                FechaInicio = :inicio, 
                                FechaFinal = :final 
                            WHERE ClavePlantacion = :clave";
        
        // Parámetros para la consulta de actualización
        $paramsPlantacion = [
            ":superficie" => $Superficie,
            ":cantidad" => $CantidadPlantas,
            ":fecha" => $Fecha,
            ":trabajador" => $NombreTrabajador,
            ":vehiculo" => $DatosVehiculo,
            ":gasolina" => $CostoGasolina,
            ":material" => $CostoMaterial,
            ":inicio" => $FechaInicio,
            ":final" => $FechaFinal,
            ":clave" => $ClavePlantacion
        ];
    
        // Ejecutar la consulta de actualización para la tabla de plantaciones
        $this->base->insertar_eliminar_actualizar($queryPlantacion, $paramsPlantacion);
    
       


        
        // Consulta para actualizar los datos en la tabla de tipoplantas
        $queryTipoplantas = "UPDATE tipoplantas 
                            SET NombrePlanta = :nombre_planta 
                            WHERE ClavePlantacion = :clave";

        // Parámetros para la consulta de actualización de tipoplantas
        $paramsTipoplantas = [
            ":nombre_planta" => $NombrePlanta,
            ":clave" => $ClavePlantacion
        ];
        // Ejecutar la consulta de actualización para la tabla de tipoplantas
        $this->base->insertar_eliminar_actualizar($queryTipoplantas, $paramsTipoplantas);

        // Cerrar la conexión a la base de datos
        $this->base->cerrar_conexion();
    }
}
?>
