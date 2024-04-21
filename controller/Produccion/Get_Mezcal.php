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
    document.getElementById("lote").value = "<?php echo $id ?>";
    document.getElementById("lote").readOnly = true;
    document.getElementById("tanque").value = "<?php echo $tanque ?>";
    document.getElementById("edad").value = "<?php echo $edad ?>";
   

var clase;

document.addEventListener('DOMContentLoaded', function() {
    var selectEspecie = document.getElementById('especie');
    var especie = "<?php echo $especie ?>";
    var selectCategoria = document.getElementById('categoria');
    
    var categoria = "<?php echo $categoria ?>"
    var selectClases = document.getElementById('clase');
    clase = "<?php echo $clase ?>";

    

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
                if (categoria === item) {
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
                    console.log("clase",clase)
                }
            });
        })
    
});

console.log ("variable",clase)

document.addEventListener('DOMContentLoaded', function() {
    var selectClase = document.getElementById('clase');
    var inputEdadLabel = document.querySelector('label[for="edad"]');
    var inputEdad = document.getElementById('edad'); // Corregido para seleccionar por ID
    var asterisco = document.querySelector('.campo-obligatorio');

    // Se establecen los estilos iniciales del campo de entrada de la edad
    inputEdad.disabled = true;
    inputEdad.style.backgroundColor = 'lightgrey';

        
        // Si se selecciona "Blanco", se bloquea el campo de entrada de la edad y se borra su valor
        if (clase === "Blanco") {
            inputEdad.value = ''; // Establecer el valor del campo de entrada como una cadena vacía
            inputEdadLabel.textContent = "Edad"; // Restaurar texto original del label
            inputEdadLabel.classList.add('campo-bloqueado'); // Añadir clase para cambiar el estilo del label
            asterisco.classList.remove('campo-obligatorio'); // Remover clase para quitar el asterisco rojo
            inputEdadLabel.appendChild(asterisco); // Añadir asterisco al label
            // Establecer el campo de entrada de la edad como deshabilitado y con un color de fondo gris claro
            inputEdad.disabled = true;
            inputEdad.style.backgroundColor = 'lightgrey';
            // Limpiar el contenido del campo de entrada de la edad
           
        
        } else {
            // Cambiar el texto del label según la clase seleccionada
            if (clase === "Reposado") {
                inputEdadLabel.textContent = "Meses";
            } else if (clase === "Añejo") {
                inputEdadLabel.textContent = "Años";
            }
            asterisco.classList.add('campo-obligatorio'); // Añadir clase para el asterisco rojo
            inputEdadLabel.appendChild(asterisco); // Añadir asterisco al label
            inputEdadLabel.classList.remove('campo-bloqueado'); // Remover clase cuando el campo no está bloqueado
            // Establecer el campo de entrada de la edad como habilitado y con un color de fondo blanco
            inputEdad.disabled = false;
            inputEdad.style.backgroundColor = 'white';
        }
    });





</script>
