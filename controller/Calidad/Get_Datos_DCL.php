<?php
include_once('../../model/Calidad/Mostrar_DCL.php');
//include_once('../../model/Calidad/Modificar_DCL.php');
include_once('../../view/Calidad/Registro_DCL.html');
$lote=$_GET["id"];
echo $lote;

$objeto=new MostrarCampos();
$resultado=$objeto->getEjemplo($lote);
$clave=$resultado[0]['Clave'];
$alcohol=$resultado[0]['PorcentajeAlcohol'];
$metanol=$resultado[0]['Metanol'];
$alcoholesSup=$resultado[0]['AlcoholesSuperiores'];
?>

<script languaje="javascript">
    document.getElementById("clave_analisis").value = "<?php echo $clave ?>";
    document.getElementById("clave_analisis").readOnly = true;
    document.getElementById("lote").value = "<?php echo $lote ?>";
    document.getElementById("lote").readOnly = true;
    document.getElementById("alcohol").value = "<?php echo $alcohol?>";
    document.getElementById("metanol").value = "<?php echo $metanol ?>";
    document.getElementById("alc_sup").value = "<?php echo $alcoholesSup ?>";
</script>

