<?php
include_once('../../model/Produccion/Mostrar_Movimiento_Especifico_MezcalM.php');
include_once('../../view/Produccion/Modificar_Movimiento.html');

/*$id = $_GET["id"];
$objeto = new MostrarMez();
$resultado = $objeto->buscar_datos_Get($id);*/

//$lote = $_GET["lote"];
//$numeroMovimiento = $_GET["numeroMovimiento"];

$objeto = new MostrarMez();

if(isset($_GET["Lote"]) && isset($_GET["NumeroMovimiento"])) {
    $lote = $_GET["Lote"];
    $numeroMovimiento = $_GET["NumeroMovimiento"];
    
    // Luego llamas a la función buscar_datos_GET pasando $id y $numeroMovimiento
    $resultado = $resultado = $objeto->buscar_datos_Get($lote, $numeroMovimiento);
    echo json_encode('NumeroMovimiento',$numeroMovimiento);
    echo json_encode('Lote',$lote);
    // Resto del código para mostrar los datos en la página
} else {
    echo "Los parámetros 'ID' y 'NumeroMovimiento' no están definidos en la URL.";
}


// Utilizar los valores de 'lote' y 'NumeroMovimiento' para obtener los datos necesarios



$lote2 = $resultado[0]['Lote'];
$fecha = $resultado[0]['Fecha'];
$tipo= $resultado[0]['Movimiento'];
$procedencia = $resultado[0]['DestinoProcedencia'];
$movimiento = $resultado[0]['EntradaSalida'];
$volumen = $resultado[0]['Volumen'];
$volumen2=$resultado[0]['VolumenAgua'];
$concentracion = $resultado[0]['PorcentajeAlcohol'];


?>
<script language="javascript">
    var lote = "<?php echo $lote2 ?>";
   
    console.log("lote:", lote);  
    document.getElementById("lote").value=lote;
    document.getElementById("lote").readOnly = true;
    document.getElementById("fecha").value = "<?php echo $fecha ?>";
    document.getElementById("mov").value = "<?php echo $movimiento ?>";
    document.getElementById("procedencia").value = "<?php echo $procedencia ?>";
    document.getElementById("volumen").value = "<?php echo $volumen ?>";
    document.getElementById("alc_vol").value = "<?php echo $concentracion ?>";
    document.getElementById("vol_agua").value="<?php echo $volumen2 ?>";

    document.addEventListener('DOMContentLoaded', function() {
        var selectMovimiento = document.getElementById('tipo');
        var movimiento = "<?php echo $tipo?>";
        fetch('Obtener_Categorias_Clase_Especie.php?tipo=movimientos')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    var option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    console.log('Item:', item);
                    console.log('Movimiento:', movimiento);
                    if (selectMovimiento) {
                        selectMovimiento.appendChild(option);
                    }
                    if (item == movimiento) {
                        selectMovimiento.value = movimiento;
                    }
                });
            })
    .catch(error => console.error('Error al obtener especies:', error));
    });

</script>
