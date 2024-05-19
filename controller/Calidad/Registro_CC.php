<?php
include_once('../../model/Calidad/Registro_CC.php');
$Lote = $_POST["lote"];


$reg = new Registro_CC();
$reg->conexion();
$reg->insertar($Clave);

?>