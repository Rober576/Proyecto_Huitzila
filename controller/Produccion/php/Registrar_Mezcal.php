<?php
include_once('../../../../model/Produccion/Registrar/Registrar_Mezcal.php');

$lote = $_POST['lote'];
$tanque = $_POST['tanque'];
$categoria = $_POST['categoria'];
$especie = $_POST['especie'];
$clase = $_POST['clase'];
$edad = $_POST['edad'];
$concentracion = $_POST['concentracion'];
$volumen = $_POST['volumen'];

// Mostrar los valores en consola
echo "Lote: " . $lote . "<br>";
echo "Tanque: " . $tanque . "<br>";
echo "Categoria: " . $categoria . "<br>";
echo "Especie: " . $especie . "<br>";
echo "Clase: " . $clase . "<br>";
echo "Edad: " . $edad . "<br>";
echo "Concentración: " . $concentracion . "<br>";
echo "Volumen: " . $volumen . "<br>";

$obj = new NuevosCampos();
$obj->conexion();
$obj->insertar($lote, $tanque, $categoria, $clase, $edad, $concentracion, $volumen);
echo json_encode('exito');

?>
