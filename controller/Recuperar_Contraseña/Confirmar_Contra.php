<?php
include_once('../../model/Recuperar_Contraseña/Cambiar_Contra.php');
$cambio_contra = new Modificar_Contraseña();
$correo = $_POST["correo"];
$contra1 = $_POST["contra1"];
$contra2 = $_POST["contra2"];

if ($contra1 == $contra2){
    $contra1=password_hash($contra1, PASSWORD_BCRYPT);
    $cambio_contra->conexion();
    $cambio_contra->insertar($correo, $contra1);
    echo json_encode(array("exito2" => true));}
else{
    echo json_encode(array("exito2" => false));
    exit();}