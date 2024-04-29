<?php
include_once('../../model/Produccion/Mostrar_Cremas_Destilados_Licores.php');
include_once('../../view/Produccion/Modificar_Cremas_Destilados_Licores.html');


$id=$_GET["id"];

$objeto=new MostrarCDL();
$resultado=$objeto->buscar_datos3($id);
$lote=$resultado[0]['Lote'];
$tanque=$resultado[0]['tanque'];
$destilado=$resultado[0]['NombreDestilado'];
$mezcal=$resultado[0]['Clase_Mezcal'];
$edad=$resultado[0]['Edad'];

echo $mezcal;

?>
<!-- script para poner los valores en los campos correspondientes -->

<script languaje="javascript">

    // Agregar un evento de escucha cuando el DOM está completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    var selectTipo = document.getElementById('categoria');
    var selectClase = document.getElementById('clase');

    var categoria = "<?php echo $destilado ?>";
    var clase = "<?php echo $mezcal ?>";

    // Obtener categorías de destilado y clases mediante solicitudes fetch
    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=destilado')
    .then(response => response.json())
    .then(data => {
        // Iterar sobre los datos y crear opciones para el select
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectTipo) {
                selectTipo.appendChild(option);
            }
            if(item==categoria){
                selectTipo.value=categoria;
            }
        });
    })
    .catch(error => console.error('Error al obtener destilado:', error));

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=clases')
    .then(response => response.json())
    .then(data => {
        // Iterar sobre los datos y crear opciones para el select
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            if (selectClase) {
                selectClase.appendChild(option);
            }
            if(item==clase){
                selectClase.value=clase;
            }
        });
    })
    .catch(error => console.error('Error al obtener clases:', error));
});

// Agregar otro evento de escucha cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    var selectClase = document.getElementById('clase');
    var inputEdadLabel = document.querySelector('label[for="edad"]');
    var inputEdad = document.getElementById('edad'); // Corregido para seleccionar por ID
    var asterisco = document.querySelector('.campo-obligatorio');

    // Agregar un evento de escucha para cambiar la edad según la clase seleccionada
    selectClase.addEventListener('change', function() {
        var selectedOption = selectClase.value;
        
        if (selectedOption === "Blanco" || selectedOption === "Abocado") {
            // Si se selecciona "Blanco" o "Abocado", bloquear el campo de entrada de la edad
            inputEdadLabel.textContent = "Edad";
            inputEdadLabel.classList.add('campo-bloqueado');
            inputEdadLabel.appendChild(asterisco);
            inputEdad.disabled = true;
            inputEdad.style.backgroundColor = 'lightgrey';

            // Si hay información en el campo de texto, borrarla
            inputEdad.value = '';

        } else {
            // Habilitar el campo de entrada de la edad y cambiar el texto del label según la clase seleccionada
            if (selectedOption === "Reposado") {
                inputEdadLabel.textContent = "Meses";
            } else if (selectedOption === "Añejo") {
                inputEdadLabel.textContent = "Años";
            }
            asterisco.classList.add('campo-obligatorio');
            inputEdadLabel.appendChild(asterisco);
            inputEdadLabel.classList.remove('campo-bloqueado');
            inputEdad.disabled = false;
            inputEdad.style.backgroundColor = 'white';
        }
    });
});




    document.getElementById("lote").value = "<?php echo $id ?>";
    document.getElementById("lote").readOnly = true;
    document.getElementById("tanque").value = "<?php echo $tanque ?>";
    if ("<?php echo $mezcal ?>"=="Blanco"){
        document.getElementById("edad").disabled = true;
        document.getElementById("edad").style.backgroundColor = 'lightgrey';
    }else{
        document.getElementById("edad").disabled = false;
        document.getElementById("edad").style.backgroundColor = 'white';
    }
    if ("<?php echo $edad ?>"=="-1"){
        document.getElementById("edad").value = "";
    }else{
        document.getElementById("edad").value = "<?php echo $edad ?>";
    }
    

</script>