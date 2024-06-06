<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plantaciones/Registrar/Registrar_Plantacion.php');

if (isset($_POST['predioSem'])) {
    // Ahora puedes usar la variable $predio como necesites
    $ClavePlantacion = $_POST["codPlantacion"];
    $Superficie = $_POST["superfPre"];
    $CantidadPlantas = $_POST["canPlan"];
    $Fecha = $_POST["fecPlant"];
    $CodigoArea = $_POST['predioSem'];
    $NombrePlanta = $_POST["tipPlanta"];

   
    //instanciar la clase y llamar la funcion para insertar
    $obj = new NuevosCampos();
    $obj->conexion();
    $obj->insertarPlantacion($ClavePlantacion, $Superficie, $CantidadPlantas, $Fecha, $CodigoArea, $NombrePlanta);
    echo json_encode('exito');

} else {
    echo json_encode('error');
}

?>