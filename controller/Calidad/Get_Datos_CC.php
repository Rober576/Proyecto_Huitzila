<?php
include_once('../../model/Calidad/Mostrar_Control_Calidad.php');
include_once('../../view/Calidad/Editar_CC.html');
$lote=$_GET["id"];

$objeto=new MostrarCampos();
$resultado=$objeto->getEjemplo($lote);
$id=$resultado[0]['ID'];
$embasado=$resultado[0]['Embasado'];
$sellado=$resultado[0]['Sellado'];
$etiqueta=$resultado[0]['Etiqueta'];
$sinabolladuras=$resultado[0]['SinAbolladuras'];
$color=$resultado[0]['Color'];
$cumplimiento=$resultado[0]['cumplimiento'];
?>

<script languaje="javascript">
    document.getElementById("lote").value = "<?php echo $lote ?>";
    document.getElementById("lote").readOnly = true;
    // Checkbox control1
    if (<?php echo $embasado ?> == 1) {
        document.getElementById("control1").checked = true;
    } else {
        document.getElementById("control1").checked = false;
    }
    
    // Checkbox control2
    if (<?php echo $sellado ?> == 1) {
        document.getElementById("control2").checked = true;
    } else {
        document.getElementById("control2").checked = false;
    }
    
    // Checkbox control3
    if (<?php echo $etiqueta ?> == 1) {
        document.getElementById("control3").checked = true;
    } else {
        document.getElementById("control3").checked = false;
    }
    
    // Checkbox control4
    if (<?php echo $sinabolladuras ?> == 1) {
        document.getElementById("control4").checked = true;
    } else {
        document.getElementById("control4").checked = false;
    }
    
    // Checkbox control5
    if (<?php echo $color ?> == 1) {
        document.getElementById("control5").checked = true;
    } else {
        document.getElementById("control5").checked = false;
    }
</script>

