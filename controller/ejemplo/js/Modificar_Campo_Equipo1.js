// Función para hacer la solicitud AJAX
        // Obtener el valor del parámetro 'id' de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // Imprimir el valor obtenido
        console.log('4')
                
        // Hacer la solicitud utilizando fetch
        fetch(`../../controller/ejemplo/Obtener_RegistroE1.php?id=${id}`)
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
                    const campo1 = item.campo1;
                    const campo2 = item.campo2;
                    const campo3 = item.campo3;
                    const campo4 = item.campo4;
                    const campo5 = item.campo5;
                    
                
                    // Hacer lo que necesites con los datos, por ejemplo, imprimirlos en la consola
                    
                    
                    document.getElementById('campo1').value = campo1;
                    document.getElementById('campo2').value = campo2;
                    document.getElementById('campo3').value = campo3;
                    document.getElementById('campo4').value = campo4;
                    document.getElementById('campo5').value = campo5;
                });// Mostrar los datos en la consola
            })
            .catch(error => {
                // Manejar cualquier error que pueda ocurrir
                console.error('Error:', error);
            });
    

    // Llamar a la función para obtener los datos con un ID específico
     // Cambia el 1 por el ID que desees obtener