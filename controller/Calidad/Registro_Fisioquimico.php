<?php
include_once('../../model/Calidad/Registro_Fisioquimico.php');
$Clave = $_POST["clave_analisis"];
$Lote = $_POST["lote"];
$Alcohol = $_POST["alcohol"];
$Extracto = $_POST["ext_seco"];
$Metanol = $_POST["metanol"];
$Superiores = $_POST["alcohol_sup"];
$Aldehidos = $_POST["aldehidos"];
$Furfural = $_POST["furfural"];
$Plomo = $_POST["plomo"];
$Cobre = $_POST["cobre"];
$Estado = $_POST["Estado_as"];
$archivo = $_FILES["doc_ref"]["name"];

$id_cuota = "Doc_Fisioquimico1";

if ($archivo!='' || $archivo!=null){
    $tipo = $_FILES['doc_ref']['type'];
    list($type, $extension)=explode('/', $tipo);
    if ($extension=='pdf'){
        $dir='Documentos_Fisioquimico/';
        if (!file_exists($dir)){
            mkdir($dir,0777, true);
        }
        $temp = $_FILES['doc_ref']['tmp_name'];
        // Agregar la extensión ".pdf" al nombre del archivo de destino
        $new_name_file = $dir . $id_cuota . '.pdf';
        if (copy($temp, $new_name_file)){

        }
    }
}

$usarios = new Registro_cuotas();
$usarios->conexion();
$usarios->insertar($Clave, $Lote, $Alcohol, $Extracto, $Metanol, $Superiores, $Aldehidos, $Furfural, $Plomo, $Cobre, $Estado, $archivo);

?>