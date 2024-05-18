<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Actividades/Modificar/Mod_Datos_Actividades.php');

$id = $_POST["id"];
$plantacion = $_POST["plantacion"];
$RespActivRealizada = $_POST["actividadSele"];
$Fecha = $_POST["fechaIni"];
$Semanas = $_POST["canFecha"];
$GastGenerales = $_POST["cosGenral"];
$Descri = $_POST["descAct"];

// Verificar si la clave 'selePlaga' existe en $_POST
if (isset($_POST["selePlaga"])) {
    $Plaga = $_POST["selePlaga"];
} else {
    $Plaga = "None";
    
}

// Verificar si la clave 'seleHerbicida' existe en $_POST
if (isset($_POST["seleHerbicida"])) {
    $Herbicida = $_POST["seleHerbicida"];
} else {
    $Herbicida = "None";
}

// Convertir $ActivRealizada a $IdActividad
switch ($RespActivRealizada) {
    case "Plantación":
        $ActivRealizada = 1;
        $Plaga = "None";
        $Herbicida = "None";
        break;
    case "Mantenimiento: Manual (deshierbe)":
        $ActivRealizada = 2;
        $Plaga = "None";
        $Herbicida = "None";
        break;
    case "Mantenimiento: Mecánico (rastra, subsuelo, arado)":
        $ActivRealizada = 3;
        $Plaga = "None";
        $Herbicida = "None";
        break;
    case "Control de plagas: Químico":
        $ActivRealizada = 4;
        $Plaga =  $_POST["selePlaga"];
        $Herbicida = $_POST["seleHerbicida"];;
        break;
    case "Control de plagas: Biológico":
        $ActivRealizada = 5;
        $Plaga =  $_POST["selePlaga"];
        $Herbicida = "None";
        break;
    case "Nutrición":
        $Plaga = "None";
        $Herbicida = "None";
        $ActivRealizada = 6;
        break;
    case "Fertilización":
        $Plaga = "None";
        $Herbicida = "None";
        $ActivRealizada = 7;
        break;
    case "Foliar":
        $Plaga = "None";
        $Herbicida = "None";
        $ActivRealizada = 8;
        break;
    case "Cosecha":
        $Plaga = "None";
        $Herbicida = "None";
        $ActivRealizada = 9;
        break;

}

$listaNombreTrabajador = json_decode($_POST['listaNombreTrabajador'], true);
$listaDiasSeleccionados = json_decode($_POST['listaDiasSeleccionados'], true);
$listaDescripcion = json_decode($_POST['listaDescripcion'], true);
$listaGastoGasolina = json_decode($_POST['listaGastoGasolina'], true);
$listaDatosVehiculo = json_decode($_POST['listaDatosVehiculo'], true);
$listaGastoLiquidos = json_decode($_POST['listaGastoLiquidos'], true);
$listaCompraMaterial = json_decode($_POST['listaCompraMaterial'], true);
$listaGastosExtras = json_decode($_POST['listaGastosExtras'], true);
$listaSemana = json_decode($_POST['listaSemana'], true);

// Instanciar la clase y llamar la función para insertar
$obj = new NuevosCampos();
$obj->conexion();

try {
    $obj->editar($id, $plantacion, $Fecha, $ActivRealizada, $Plaga, $Herbicida, $GastGenerales, $Descri, $Semanas, $listaNombreTrabajador, $listaDiasSeleccionados, $listaDescripcion, $listaGastoGasolina, $listaDatosVehiculo, $listaGastoLiquidos, $listaCompraMaterial, $listaGastosExtras, $listaSemana);
    echo json_encode('exito');
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
