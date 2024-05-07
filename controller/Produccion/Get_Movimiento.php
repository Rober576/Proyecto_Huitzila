<?php
include_once('../../model/Produccion/Mostrar_Movimiento_Especifico_MezcalM.php');
include_once('../../view/Produccion/Modificar_Movimiento.html');



$objeto = new MostrarMez();

if(isset($_GET["Lote"]) && isset($_GET["NumeroMovimiento"])) {
    $lote = $_GET["Lote"];
    $numeroMovimiento = $_GET["NumeroMovimiento"];
    // Luego llamas a la función buscar_datos_GET pasando $id y $numeroMovimiento
    $resultado = $resultado = $objeto->buscar_datos_Get($lote, $numeroMovimiento);
} else {
    echo "Los parámetros 'ID' y 'NumeroMovimiento' no están definidos en la URL.";
}
$lote2 = $resultado[0]['Lote'];
$fecha = $resultado[0]['Fecha'];
$tipo= $resultado[0]['Movimiento'];
$procedencia = $resultado[0]['DestinoProcedencia'];
$movimiento = $resultado[0]['EntradaSalida'];
$volumen = $resultado[0]['Volumen'];
$volumen2= $resultado[0]['VolumenAgua'];
$concentracion = $resultado[0]['PorcentajeAlcohol'];
$volumen3= $resultado[0]['Volumen55'];
$volumen_merma=$resultado[0]['MermasVolumen'];
$alc_vol_merma=$resultado[0]['MermasPorcentaje'];

?>
<script language="javascript">
    console.log("entro al get")
    var lote = "<?php echo $lote2 ?>";
    var volumenn3= "<?php echo $volumen3 ?>"
    var numero="<?php echo $numeroMovimiento ?>"
    console.log("lote",lote);
    console.log("numero de movimiento",numero)
   
    console.log("lote:", lote);  
    document.getElementById("lote").value=lote;
    document.getElementById("lote").readOnly = true;
    document.getElementById("fecha").value = "<?php echo $fecha ?>";
    document.getElementById("mov").value = "<?php echo $movimiento ?>";
    document.getElementById("procedencia").value = "<?php echo $procedencia ?>";
    document.getElementById("volumen").value = "<?php echo $volumen ?>";
    document.getElementById("alc_vol").value = "<?php echo $concentracion ?>";
    document.getElementById("vol_agua").value="<?php echo $volumen2 ?>";
    document.getElementById("volumen_merma").value="<?php echo $volumen_merma ?>";
    document.getElementById("alc_vol_merma").value="<?php echo $alc_vol_merma ?>";
    document.getElementById("alc_vol55").value="<?php echo $volumen3 ?>";
var movimiento;

document.addEventListener('DOMContentLoaded', function() {
    var selectMovimiento = document.getElementById('tipo');
    // Movimiento se asigna cuando se carga el DOM, pero puedes usarlo fuera de esta función
    movimiento = "<?php echo $tipo?>";
    
    fetch('Obtener_Categorias_Clase_Especie.php?tipo=movimientos')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                //console.log('Item:', item);
                
                if (selectMovimiento) {
                    selectMovimiento.appendChild(option);
                }
                if (item == movimiento) {
                    selectMovimiento.value = movimiento;
                    console.log('Movimiento:', movimiento);
                }
            });
        });
});

// Ahora puedes acceder a la variable movimiento fuera de la función
console.log('Movimiento fuera de la función:', movimiento);

document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar u ocultar el contenedor de volumen y alcohol
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const volumenMermaContainer = document.getElementById("volumen_merma");
    const alcVolMermaContainer = document.getElementById("alc_vol_merma");
    const vol55Input = document.getElementById('alc_vol55');
   
    contenedorPrincipal.style.display = "none";
    volumenMermaContainer.removeAttribute("required");
    alcVolMermaContainer.removeAttribute("required");
    vol55Input.removeAttribute("required");
    
    if (movimiento === "Merma") {
        contenedorPrincipal.style.display = "block";
        volumenMermaContainer.setAttribute("required", "required");
        alcVolMermaContainer.setAttribute("required", "required");
        vol55Input.setAttribute("required", "required");
    } else {
        contenedorPrincipal.style.display = "none";
        volumenMermaContainer.removeAttribute("required");
        alcVolMermaContainer.removeAttribute("required");
    }
    });

    

</script>
