<?php
session_start();
echo $_SESSION["user_key"];
echo $_COOKIE["user_key"];
echo "_";
echo $_SESSION["tipo_usuario"];
echo $_SESSION['Area_usuario'];
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
?>