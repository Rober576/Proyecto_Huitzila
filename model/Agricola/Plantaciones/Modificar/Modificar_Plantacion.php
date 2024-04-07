<?php
include('../../../../config/Crud_bd.php');

class ModificarCampos {
    private $base;

    function conexion(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function modificarPlantacion($ClavePlantacion, $Superficie, $CantidadPlantas, $Fecha, $NombreTrabajador, $DatosVehiculo, $CostoGasolina, $CostoMaterial, $FechaInicio, $FechaFinal, $NombrePlanta, $NombrePredio) {
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
    
        // Obtener la clave del predio correspondiente al nombre proporcionado
        $queryPredio = "SELECT CodigoArea FROM predios WHERE Nombre = :nombre_predio";
        $paramsPredio = [":nombre_predio" => $NombrePredio];
        $resultadoPredio = $this->base->mostrar($queryPredio, $paramsPredio);
    
        // Verificar si se encontró la clave del predio
        if (!empty($resultadoPredio)) {
            $CodigoAreaPredio = $resultadoPredio[0]['CodigoArea'];
    
            // Consulta para actualizar la relación en la tabla plantacionpredio
            $queryPlantacionPredio = "UPDATE plantacionpredio 
                                      SET CodigoArea = :codigo_area 
                                      WHERE ClavePlantacion = :clave";
            // Parámetros para la consulta de actualización
            $paramsPlantacionPredio = [
                ":codigo_area" => $CodigoAreaPredio,
                ":clave" => $ClavePlantacion
            ];
    
            // Ejecutar la consulta de actualización para la tabla plantacionpredio
        $this->base->insertar_eliminar_actualizar($queryPlantacionPredio, $paramsPlantacionPredio);
       


        
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
}}
?>
