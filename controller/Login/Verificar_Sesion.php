<?php

session_start();

$respuesta = [1];
if ($_SESSION["tipo_usuario"] == 1){
    if(!isset($_SESSION["user_key"]) || !isset($_COOKIE["user_key"]) ){
        $respuesta = [0];

    }else{
        if($_COOKIE["user_key"] != $_SESSION["user_key"] || $_POST["acceso_a"] != $_SESSION["Area_usuario"]){
            $respuesta = [0];
        }

    }
}
header("Content-Type: application/json");
echo json_encode($respuesta);
//localhost\Proyecto_Huitzila\controller\Login\Logout.php
?>