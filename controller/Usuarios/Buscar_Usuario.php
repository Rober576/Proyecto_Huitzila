<?php
//ESTE ARCHIVO MANDARÁ LA CLAVE DEL USUARIO A LA INTERFAZ DE EDITAR
$Clave = $_POST["clave_us"];

// Generar el código JavaScript para mostrar el mensaje en una ventana emergente
$script = "alert('" . $Clave . "');";

// Imprimir el código JavaScript en el documento
echo "<script>" . $script . "</script>";


?>