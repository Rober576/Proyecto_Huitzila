<?php

$correo = $_POST["correo"];
$codigo1 = $_POST["codigo"];
$codigo2 = $_POST["codigo2"];

if ($codigo1 == $codigo2)
    echo json_encode(array("exito" => true,"correo" => $correo));
else
    echo json_encode(array("exito" => false));