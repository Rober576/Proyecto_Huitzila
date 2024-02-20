<?php
$id=$_GET['id'];
include_once('../../model/administrativo/Mostrar_SocioAsociado.php');
include_once('../../view/administrativo//Aprobacion_Cursos.html');
$base = new MostrarSocioAsociado();
$base->instancias();
$resultado = $base->buscar_datos($id);
if ($resultado == true) {
  $nombre = $resultado[0]["NomCurPerso"];
  $horas = $resultado[0]["HraCurPerso"];
  $organizacion = $resultado[0]["OrgCurPerso"];
  $estatus = $resultado[0]["EstatusCurPerso"];
  $comentario = $resultado[0]["ComeCurPerso"];
}

?>
<script languaje="javascript">
</script>
<script>
    <?php if ($estatus==1 or $estatus==0) { ?>
        // Marcar el checkbox si la condición en PHP se cumple
        var textBox = document.getElementById("descri_puesto");
        document.getElementById("ti_ck1").checked = true;
        textBox.disabled = true;
    <?php }else if ($estatus==2){ ?>
        document.getElementById("ti_ck2").checked = true;
        var textBox = document.getElementById("descri_puesto");
        textBox.disabled = false;
        var texto ="<?php echo $comentario; ?>";
        textBox.value = texto;
    <?php } ?>
</script>
<script languaje="javascript">
  var parrafo = document.getElementById("nombreCUR"); // obtenemos la referencia al elemento
  parrafo.innerHTML = "<?php echo $nombre; ?>"; // modificamos su contenido

  var parrafo = document.getElementById("organizacionCUR"); // obtenemos la referencia al elemento
  parrafo.innerHTML = "<?php echo $organizacion; ?>";
var parrafo = document.createElement("p");

var parrafo = document.getElementById("totalhoraCUR"); // obtenemos la referencia al elemento
  parrafo.innerHTML = "<?php echo $horas; ?>";
var parrafo = document.createElement("p");

const linkElement = document.getElementById("link_com");
linkElement.href = "../../controller/Comprobantes/socio-asociado/cursos/<?php echo $id; ?>";

</script>

