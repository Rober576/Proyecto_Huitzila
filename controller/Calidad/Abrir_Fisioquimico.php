<?php
if(isset($_GET['id'])) {
    // Obtener el valor del parámetro 'id'
    $id = $_GET['id'];}

// Ruta del directorio donde se encuentra el archivo PDF
$ruta_directorio = "../Calidad/Documentos_Fisioquimico/";

// Nombre del archivo PDF
$nombre_archivo = $id .".pdf";

// Ruta completa del archivo PDF
$ruta_archivo = $ruta_directorio . $nombre_archivo;
echo $nombre_archivo;
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url=<?php echo $ruta_archivo; ?>">
    <script type="text/javascript">
        window.location.href = "<?php echo $ruta_archivo; ?>"
    </script>
    <title>Redireccionando...</title>
</head>
<body>
    Si no has sido redirigido automáticamente, puedes hacer clic <a href="<?php echo $ruta_archivo; ?>">aquí</a>.
</body>
</html>