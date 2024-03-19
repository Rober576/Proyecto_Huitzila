// Función para hacer la solicitud AJAX
// Obtener el valor del parámetro 'id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Imprimir el valor obtenido
console.log(id)

// Hacer la solicitud utilizando fetch
fetch(`../../controller/Usuarios/Registro_Modificar.php?id=${id}`)
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
            const campo1 = item.Clave;
            const campo2 = item.Nombre;
            const campo3 = item.ApellidoPaterno;
            const campo4 = item.ApellidoMaterno;
            const campo5 = item.Correo;
            const campo6 = item.IdentificadorTipo;
            const campo7 = item.IdentificadorArea;


            // Hacer lo que necesites con los datos, por ejemplo, imprimirlos en la consola


            document.getElementById('clave_us').value = campo1;
            document.getElementById('nombre_us').value = campo2;
            document.getElementById('apellido_pat').value = campo3;
            document.getElementById('apellido_mat').value = campo4;
            document.getElementById('email_us').value = campo5;
            document.getElementById('tipo_us').value = campo6;
            document.getElementById('area_us').value = campo7;
            console.log(campo1)

        });// Mostrar los datos en la consola
    })
    .catch(error => {
        // Manejar cualquier error que pueda ocurrir
        console.error('Error:', error);
    });


// Llamar a la función para obtener los datos con un ID específico
// Cambia el 1 por el ID que desees obtener