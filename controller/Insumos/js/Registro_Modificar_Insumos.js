const urlParams = new URLSearchParams(window.location.search);
const identificador = urlParams.get('id');

console.log(identificador); 


fetch(`../../controller/Insumos/Registro_Modificar_Insumos.php?id=${identificador}`)
    .then(response => {
       
        if (!response.ok) {
            throw new Error('Ocurrió un error al obtener los datos');
        }
        
        return response.json();
    })
    .then(data => {

        data.forEach(item => {
            const campo1 = item.Identificador;
            const campo2 = item.NombreInsumo;
            const campo3 = item.Unidades;
            const campo4 = item.Existencia;
            const campo5 = item.FechaRegistro;
            const campo6 = item.StockMinimo;
            const campo7 = item.StockMaximo;
            const campo8 = item.Costo;
            const campo9 = item.Descripcion;


            
            document.getElementById('Identificador').value = campo1;
            document.getElementById('Nombre').value = campo2;
            document.getElementById('Unidades').value = campo3;
            document.getElementById('Existencia').value = campo4;
            document.getElementById('FechaReg').value = campo5;
            document.getElementById('Stockmi').value = campo6;
            document.getElementById('Stockma').value = campo7;
            document.getElementById('Costo').value = campo8;
            document.getElementById('Descripcion').value = campo9;

            console.log(campo1); 
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
