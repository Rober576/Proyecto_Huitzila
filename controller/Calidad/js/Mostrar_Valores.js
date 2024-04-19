// Función para hacer la solicitud AJAX
// Obtener el valor del parámetro 'id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Imprimir el valor obtenido
console.log(id)

// Hacer la solicitud utilizando fetch
fetch(`../../controller/Calidad/Mostrar_Valores.php?id=${id}`)
    .then(response => {
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Ocurrió un error al obtener los datos');
        }
        // Convertir la respuesta a JSON
        return response.json();
    })
    .then(data => {
        // Manipular los datos obtenidos
        data.forEach(item => {
            // Acceder a cada propiedad del objeto
            const campo1 = item.ALCVolMin;
          

            // Hacer lo que necesites con los datos, por ejemplo, imprimirlos en la consola

            document.getElementById('min_alcohol').value = campo1;
            console.log(campo1)

        });// Mostrar los datos en la consola
    })
    .catch(error => {
        // Manejar cualquier error que pueda ocurrir
        console.error('Error:', error);
    });


// Llamar a la función para obtener los datos con un ID específico
// Cambia el 1 por el ID que desees obtener