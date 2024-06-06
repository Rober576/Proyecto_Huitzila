<?php
include_once('../../model/Calidad/Modificar_Fisioquimico.php');
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
$archivo = $_FILES["doc_ref"]["name"];

function obtenerSiguienteNombreArchivo($carpeta, $prefijo) {
    // Obtener todos los archivos en la carpeta
    $archivos = glob($carpeta . '/' . $prefijo . '*');
    
    // Inicializar el número más alto encontrado
    $numeroMasAlto = 0;
    
    // Iterar sobre los archivos y encontrar el número más alto usando expresiones regulares
    foreach ($archivos as $archivo) {
        // Extraer el número del nombre del archivo usando una expresión regular
        preg_match('/' . preg_quote($prefijo, '/') . '(\d+)/', $archivo, $matches);
        if (isset($matches[1])) {
            $numero = intval($matches[1]);
            if ($numero > $numeroMasAlto) {
                $numeroMasAlto = $numero;
            }
        }
    }
    
    // Construir el nombre del siguiente archivo
    $siguienteNumero = $numeroMasAlto + 1;
    $siguienteNombre = $prefijo . $siguienteNumero;
    
    return $siguienteNombre;
}

$carpeta = "Documentos_Fisioquimico";
$prefijo = "Doc_Fisioquimico";
$id_cuota = obtenerSiguienteNombreArchivo($carpeta, $prefijo);


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
$usarios->insertar($Clave, $Lote, $Alcohol, $Extracto, $Metanol, $Superiores, $Aldehidos, $Furfural, $Plomo, $Cobre, $id_cuota);

?>