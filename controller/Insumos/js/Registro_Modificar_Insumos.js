const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(id); 


fetch(`../../controller/Insumos/Registro_Modificar_Insumos.php?id=${id}`)
    .then(response => {
       
        if (!response.ok) {
            throw new Error('Ocurrió un error al obtener los datos');
        }
        
        return response.json();
    })
    .then(data => {

        data.forEach(item => {
            const campo1 = id;  
            const campo2 = item.NombreInsumo;
            const campo3 = item.Descripcion;
            const campo4 = item.Unidades;
            const campo5 = item.Existencia;
            const campo6 = item.FechaReg;
            const campo7 = item.StockMinimo;
            const campo8 = item.StockMaximo;
            const campo9 = item.Costo;
            


            
            document.getElementById('Identificador').value = campo1;
            document.getElementById('Nombre').value = campo2;
            document.getElementById('Descripcion').value = campo3;
            document.getElementById('Unidades').value = campo4;
            document.getElementById('Existencia').value = campo5;
            document.getElementById('FechaReg').value = campo6;
            document.getElementById('Stockmi').value = campo7;
            document.getElementById('Stockma').value = campo8;
            document.getElementById('Costo').value = campo9;
            
            console.log(campo1); 
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
