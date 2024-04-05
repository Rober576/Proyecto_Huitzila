<?php
include_once('../../model/Produccion/Mostrar_Movimiento_Especifico_MezcalM.php');
include_once('../../view/Produccion/Modificar_Movimiento.html');

$id = $_GET["id"];
$objeto = new MostrarMez();
$resultado = $objeto->buscar_datos($id);
$lote = $resultado[0]['Lote'];
$fecha=$resultado[0]['Fecha'];
$tipo=$resultado[0]['EntradaSalida'];
$procedencia=$resultado[0]['DestinoProcedencia'];
$movimiento = $resultado[0]['Movimiento'];
$volumen = $resultado[0]['Volumen'];
$concentracion = $resultado[0]['PorcentajeAlcohol'];

if ($tipo=="Entrada"){
    $proce="Entrada";
}else if ($tipo=="Salida"){
    $proce="Salida";
}

        
?>
<script language="javascript">
    document.addEventListener('DOMContentLoaded', function() {
        var selectMovimiento = document.getElementById('movimiento');
        var movimiento = "<?php echo $movimiento ?>";
        
        console.log(movimiento)
       
        fetch('Obtener_Categorias_Clase_Especie.php?tipo=Movimientos')
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
})
    document.getElementById("lote").value = "<?php echo $id ?>";
    document.getElementById("lote").readOnly = true;
    document.getElementById("fecha").value="<?php echo $fecha ?>";
    document.getElementById("entradasalida").value="<?php echo $proce ?>";
    document.getElementById("destinoprocedencia").value="<?php echo $procedencia ?>";
    document.getElementById("volumen").value = "<?php echo $volumen ?>";
    document.getElementById("concentracion").value = "<?php echo $concentracion ?>";

   
    
</script>
