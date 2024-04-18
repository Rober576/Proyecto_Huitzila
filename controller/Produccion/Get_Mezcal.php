<?php
include_once('../../model/Produccion/Mostrar_MezcalM.php');
include_once('../../view/Produccion/Modificar_Mezcal.html');

$id = $_GET["id"];
$objeto = new MostrarMez();
$resultado = $objeto->buscar_datos($id);
$lote = $resultado[0]['Lote'];
$especie = $resultado[0]['NombrePlanta'];
$tanque = $resultado[0]['Tanque'];
$clase = $resultado[0]['Clase_Mezcal'];
$edad = $resultado[0]['Edad'];
$categoria = $resultado[0]['Categoria'];
        
?>
<script language="javascript">
    document.addEventListener('DOMContentLoaded', function() {
        var selectEspecie = document.getElementById('especie');
        var especie = "<?php echo $especie ?>";
        var selectCategoria = document.getElementById('categoria');
       
        var categoria = "<?php echo $categoria ?>"
        console.log(categoria)
        var selectClases = document.getElementById('clase');
        var clase = "<?php echo $clase ?>";

        

        fetch('Obtener_Categorias_Clase_Especie.php?tipo=especies')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    var option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    console.log('Item:', item);
                    console.log('especie:', especie);


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
                    console.log('Item:', item);
                    console.log('Categoria:', categoria);

                    if (selectCategoria) {
                        selectCategoria.appendChild(option);
                       
                    }
                    if (categoria === item) {
                        selectCategoria.value = categoria;
                        console.log("entrocategoria");
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
                console.log('Item:', item);
                console.log('Clase:', clase);

                if (selectClases) {
                    selectClases.appendChild(option);
                }
                if (item == clase) {
                    selectClases.value = clase;
                }
            });
        })
        
});
    document.getElementById("lote").value = "<?php echo $id ?>";
    document.getElementById("lote").readOnly = true;
    document.getElementById("tanque").value = "<?php echo $tanque ?>";
    document.getElementById("edad").value = "<?php echo $edad ?>";
   
    
</script>
