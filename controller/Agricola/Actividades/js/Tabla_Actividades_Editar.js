

function Lista(){
    const tabla = document.getElementById("tablaActividades");
    document.getElementById('canFecha2').disabled = true;

    if (tabla.rows.length > 1) {
        console.log("Hay elementos antes de agregar");
        const numeroDeFilas = tabla.rows.length;

        const listaNombreTrabajador = [];
        const listaDiasSeleccionados = [];
        const listaDescripcion = [];
        const listaGastoGasolina = [];
        const listaDatosVehiculo = [];
        const listaGastoLiquidos = [];
        const listaCompraMaterial = [];
        const listaGastosExtras = [];
        const listaSemana = [];

        

        for (let i = 1; i < numeroDeFilas; i++) {
            const fila = tabla.rows[i];
            const Nombre = fila.cells[0].textContent;
            const Dias = fila.cells[1].textContent;
            const Semana = fila.cells[2].textContent;
            const Actividad = fila.cells[3].textContent;
            const Gas = fila.cells[4].textContent;
            const Vehiculo = fila.cells[5].textContent;
            const Liquidos = fila.cells[6].textContent;
            const Material = fila.cells[7].textContent;
            const GasExtra = fila.cells[8].textContent;

            let arrayDias = Dias.split(', ');

            listaNombreTrabajador.push(Nombre);
            listaDiasSeleccionados.push(arrayDias);
            listaDescripcion.push(Actividad);
            listaGastoGasolina.push(Gas);
            listaDatosVehiculo.push(Vehiculo);
            listaGastoLiquidos.push(Liquidos);
            listaCompraMaterial.push(Material);
            listaGastosExtras.push(GasExtra);
            listaSemana.push(Semana);
            const total1 = listaCompraMaterial.reduce((acumulador, valor) => acumulador + parseFloat(valor), 0);
            const total2 = listaGastoGasolina.reduce((acumulador, valor) => acumulador + parseFloat(valor), 0);
            const total3 = listaGastoLiquidos.reduce((acumulador, valor) => acumulador + parseFloat(valor), 0);
            const total4 = listaGastosExtras.reduce((acumulador, valor) => acumulador + parseFloat(valor), 0);
            const General = document.getElementById("cosGenral").value;
            const CostoGeneral = parseFloat(General);
            const Final= total1+total2+total3+total4+CostoGeneral

            let sumaRedondeada = Final.toFixed(2);
            document.getElementById("total").value = sumaRedondeada;

            console.log(Final)

        }

        console.log(listaGastoGasolina)

        localStorage.setItem('listaNombreTrabajador', JSON.stringify(listaNombreTrabajador));
        localStorage.setItem('listaDiasSeleccionados', JSON.stringify(listaDiasSeleccionados));
        localStorage.setItem('listaSemana', JSON.stringify(listaSemana));
        localStorage.setItem('listaDescripcion', JSON.stringify(listaDescripcion));
        localStorage.setItem('listaGastoGasolina', JSON.stringify(listaGastoGasolina));
        localStorage.setItem('listaDatosVehiculo', JSON.stringify(listaDatosVehiculo));
        localStorage.setItem('listaGastoLiquidos', JSON.stringify(listaGastoLiquidos));
        localStorage.setItem('listaCompraMaterial', JSON.stringify(listaCompraMaterial));
        localStorage.setItem('listaGastosExtras', JSON.stringify(listaGastosExtras));
        
        //Mostrar una lista horrible 
        let listaGastosExtrasString = localStorage.getItem('listaGastosExtras');
        let listaGastosExtra= JSON.parse(listaGastosExtrasString);
        console.log("Listas horribles",listaGastosExtra);

    } else {
        console.log("La tabla no contiene más elementos.");
    }

}



function agregarFilaATabla() {
    

    const nombreTrabajador = document.getElementById("nomTrab").value;
    const gastoGasolina = document.getElementById("gasGas").value;
    const datosVehiculo = document.getElementById("desVei").value;
    const gastoLiquidos = document.getElementById("gasLiq").value;
    const compraMaterial = document.getElementById("gasMat").value;
    const gastosExtras = document.getElementById("gasExt").value;
    const descripcion = document.getElementById("actDes").value;
    const Semana = document.getElementById("semSele").value;
    


    const checkboxes = [
        { id: "diaLunes", nombre: "Lunes" },
        { id: "diaMartes", nombre: "Martes" },
        { id: "diaMiercoles", nombre: "Miércoles" },
        { id: "diaJueves", nombre: "Jueves" },
        { id: "diaViernes", nombre: "Viernes" },
        { id: "diaSabado", nombre: "Sábado" }
    ];

    const diasSeleccionados = checkboxes
        .filter(cb => document.getElementById(cb.id).checked)
        .map(cb => cb.nombre);

    const diasString = diasSeleccionados.join(", ");
    console.log(diasString) 

    const tabla = document.getElementById("tablaActividades");
    const nuevaFila = document.createElement("tr");

    nuevaFila.appendChild(crearCelda(nombreTrabajador));
    nuevaFila.appendChild(crearCelda(diasString));
    nuevaFila.appendChild(crearCelda(Semana));
    nuevaFila.appendChild(crearCelda(descripcion));
    nuevaFila.appendChild(crearCelda(gastoGasolina));
    nuevaFila.appendChild(crearCelda(datosVehiculo));
    nuevaFila.appendChild(crearCelda(gastoLiquidos));
    nuevaFila.appendChild(crearCelda(compraMaterial));
    nuevaFila.appendChild(crearCelda(gastosExtras));
    nuevaFila.appendChild(BotonEliminar());


    tabla.appendChild(nuevaFila);

    Lista();
    limpiarCampos();
}


function crearCelda(texto) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    return celda;
}

function logInput() {
    Lista();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cosGenral").addEventListener("input", logInput);
});




function BotonEliminar() {                                  
    const celda = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "btn-eliminar Boton_Tabla"; 

    botonEliminar.addEventListener("click", function () {
        const fila = botonEliminar.parentNode.parentNode;
    
        const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta fila?");
    
        if (confirmacion) {
            fila.remove();
            Lista();

        } else {
            console.log("Eliminación cancelada");
        }
    });

    celda.appendChild(botonEliminar);
    return celda;
    
}

function limpiarCampos() {
    document.getElementById("nomTrab").value = "";
    document.getElementById("gasGas").value = "0";
    document.getElementById("desVei").value = "";
    document.getElementById("gasLiq").value = "0";
    document.getElementById("gasMat").value = "0";
    document.getElementById("gasExt").value = "0";
    document.getElementById("actDes").value = "";

    const checkboxes = [
        "diaLunes",
        "diaMartes",
        "diaMiercoles",
        "diaJueves",
        "diaViernes",
        "diaSabado"
    ];

    checkboxes.forEach(id => {
        document.getElementById(id).checked = false;
    });

    const actividadSele = document.getElementById('semSele');
    if (actividadSele.options.length > 0) {
        actividadSele.value = 'Semana 1'; 
    }

}


document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("anadirGasto");
    boton.addEventListener("click", procesarResultado);
});


function procesarResultado() {
    const resultado = central();

    if (resultado) {
        console.log('La validación fue exitosa.');
        agregarFilaATabla()
        
    } else {
        console.log('La validación falló.');
        alert("Por favor, revisa todos los campos")
        
    }
}

