<?php
include_once('../../model/Calidad/Mostrar_Fisicoquimico.php');
include_once('../../model/Calidad/Modificar_Fisioquimico.php');
include_once('../../view/Calidad/Registro_Fisioquimico.html');
$lote=$_GET["id"];
echo $lote;

$objeto=new MostrarCampos();
$resultado=$objeto->getEjemplo($lote);
$clave=$resultado[0]['Clave'];
$alcohol=$resultado[0]['Alcohol'];
$extractoSec=$resultado[0]['ExtractoSeco'];
$metanol=$resultado[0]['Metanol'];
$alcoholesSup=$resultado[0]['AlcoholesSuperiores'];
$aldehidos=$resultado[0]['Aldehidos'];
$furfal=$resultado[0]['Furfural'];
$plomo=$resultado[0]['Plomo'];
$cobre=$resultado[0]['Cobre'];
$referencia=$resultado[0]['Referencia'];
$cumplimiento=$resultado[0]['cumplimiento'];
$nombreDoc=$resultado[0]['NombreDocumento'];
?>

<script languaje="javascript">
    document.getElementById("clave_analisis").value = "<?php echo $clave ?>";
    document.getElementById("clave_analisis").readOnly = true;
    document.getElementById("lote").value = "<?php echo $lote ?>";
    document.getElementById("lote").readOnly = true;
    document.getElementById("alcohol").value = "<?php echo $alcohol?>";
    document.getElementById("ext_seco").value = "<?php echo $extractoSec ?>";
    document.getElementById("metanol").value = "<?php echo $metanol ?>";
    document.getElementById("alcohol_sup").value = "<?php echo $alcoholesSup ?>";
    document.getElementById("aldehidos").value = "<?php echo $aldehidos ?>";
    document.getElementById("furfural").value = "<?php echo $furfal ?>";
    document.getElementById("plomo").value = "<?php echo $plomo ?>";
    document.getElementById("cobre").value = "<?php echo $cobre ?>";
    document.getElementById("doc_ref").setAttribute = "<?php echo $nombreDoc ?>";

    bandera1=true;
    bandera2=true;
    bandera3=true;
    bandera4=true;
    bandera5=true;
    bandera6=true;
    bandera7=true;
    bandera8=true;
    bandera9=true;
</script>

