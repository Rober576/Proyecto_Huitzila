<?php
include_once('../../model/Produccion/Mostrar_MezcalM.php');
include_once('../../view/Produccion/Modificar_Mezcal.html');

$id = $_GET["id"];
$objeto = new MostrarMez();
$resultado = $objeto->buscar_datos($id);
$lote = $resultado[0]['Lote'];
$especie = $resultado[0]['NombrePlanta'];
$tanque = $resultado[0]['Tanque'];
echo $tanque;
echo $id;
$clase = $resultado[0]['IDClase'];
$edad = $resultado[0]['Edad'];
$categoria = $resultado[0]['IDCategoria'];
        
?>
<script language="javascript">
    document.addEventListener('DOMContentLoaded', function() {
        var selectEspecie = document.getElementById('especie');
        var especie = "<?php echo $especie ?>";
        var selectCategoria = document.getElementById('categoria');
        var categoria = "<?php echo $categoria?>";
        var selectClases = document.getElementById('clase');
        var clase = "<?php echo $clase ?>";


        fetch('Obtener_Categorias_Clase_Especie.php?tipo=especies')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    var option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;

                    if (selectEspecie) {
                        selectEspecie.appendChild(option);
                    }
                    if (item == especie) {
                        selectEspecie.value = especie;
                    }
                });
            })
           

        fetch('Obtener_Categorias_Clase_Especie.php?tipo=categorias')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    var option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;

                    if (selectCategoria) {
                        selectCategoria.appendChild(option);
                    }
                    if (item == categoria) {
                        selectCategoria.value = categoria;
                    }
                });
            })
        fetch('Obtener_Categorias_Clase_Especie.php?tipo=clases')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    var option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;

                    if (selectClases) {
                        selectClases.appendChild(option);
                    }
                    if (item == clase) {
                        selectClases.value = clase;
                    }
                });
            })
            .catch(error => console.error('Error al obtener especies:', error));

        
});
    document.getElementById("lote").value = "<?php echo $id ?>";
    document.getElementById("lote").readOnly = true;
    
    document.getElementById("tanque").value = "<?php echo $tanque ?>";
    document.getElementById("edad").value = "<?php echo $edad ?>";
   
    
</script>
