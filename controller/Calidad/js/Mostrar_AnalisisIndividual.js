// Función para hacer la solicitud AJAX
// Obtener el valor del parámetro 'id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Imprimir el valor obtenido
console.log(id)

// Hacer la solicitud utilizando fetch
fetch(`../../controller/Calidad/Mostrar_AnalisisIndividual.php?id=${id}`)
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
            const campo1 = item.Lote;
            const campo2 = item.Azucares;
            const campo3 = item.Madurez;
            const campo4 = item.TamañoMateria;
          

            // Hacer lo que necesites con los datos, por ejemplo, imprimirlos en la consola

            document.getElementById('lote_cal').value = campo1;
            document.getElementById('azucares_cal').value = campo2;
            document.getElementById('madurez_cal').value = campo3;
            document.getElementById('tamañomateria_cal').value = campo4;
            console.log(campo1)

        });// Mostrar los datos en la consola
    })
    .catch(error => {
        // Manejar cualquier error que pueda ocurrir
        console.error('Error:', error);
    });


// Llamar a la función para obtener los datos con un ID específico
// Cambia el 1 por el ID que desees obtener