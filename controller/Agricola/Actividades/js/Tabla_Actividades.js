// Aquí creas tus listas correspondientes
const listaNombreTrabajador = [];
const listaDiasSeleccionados = [];
const listaDescripcion = [];
const listaGastoGasolina = [];
const listaDatosVehiculo = [];
const listaGastoLiquidos = [];
const listaCompraMaterial = [];
const listaGastosExtras = [];
const listaSemana = [];

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

    listaNombreTrabajador.push(nombreTrabajador);
    listaDiasSeleccionados.push(diasSeleccionados);
    listaDescripcion.push(descripcion);
    listaGastoGasolina.push(gastoGasolina);
    listaDatosVehiculo.push(datosVehiculo);
    listaGastoLiquidos.push(gastoLiquidos);
    listaCompraMaterial.push(compraMaterial);
    listaGastosExtras.push(gastosExtras);
    listaSemana.push(Semana);
    guardarListasEnLocalStorage()

    tabla.appendChild(nuevaFila);

    Sumaa();
    limpiarCampos();
}

function Sumaa(){
    const General = document.getElementById("cosGenral").value;
    function sumaLista(lista) {
        return lista.reduce((acumulador, valor) => {
            const numero = parseFloat(valor);
            return isNaN(numero) ? acumulador : acumulador + numero;
        }, 0);
    }
    let sumaGasolina = sumaLista(listaGastoGasolina);
    let sumaLiquidos = sumaLista(listaGastoLiquidos);
    let sumaMaterial = sumaLista(listaCompraMaterial);
    let sumaExtra =sumaLista(listaGastosExtras);
    const CostoGeneral = parseFloat(General);

    let suma = sumaGasolina + sumaLiquidos + sumaMaterial + sumaExtra+ CostoGeneral;
    document.getElementById("total").value = suma;

}

function crearCelda(texto) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    return celda;
}


function BotonEliminar() {                                         ///Botonnnnnnnnnnnnnnnn aquiiiiiiiiiii
    const celda = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "btn-eliminar Boton_Tabla"; 

    botonEliminar.addEventListener("click", function () {
        const fila = botonEliminar.parentNode.parentNode;
        const indiceFila = fila.rowIndex - 1; // Restamos 1 porque los índices de las filas comienzan en 0

        fila.remove();

        // Eliminar los elementos correspondientes de las listas
        listaNombreTrabajador.splice(indiceFila, 1);
        listaDiasSeleccionados.splice(indiceFila, 1);
        listaDescripcion.splice(indiceFila, 1);
        listaGastoGasolina.splice(indiceFila, 1);
        listaDatosVehiculo.splice(indiceFila, 1);
        listaGastoLiquidos.splice(indiceFila, 1);
        listaCompraMaterial.splice(indiceFila, 1);
        listaGastosExtras.splice(indiceFila, 1);
        listaSemana.splice(indiceFila, 1);
        guardarListasEnLocalStorage()

        Sumaa();


    });

    celda.appendChild(botonEliminar);
    return celda;
    
}

function limpiarCampos() {
    document.getElementById("nomTrab").value = "";
    document.getElementById("gasGas").value = "";
    document.getElementById("desVei").value = "";
    document.getElementById("gasLiq").value = "";
    document.getElementById("gasMat").value = "";
    document.getElementById("gasExt").value = "";
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
    boton.addEventListener("click", agregarFilaATabla);
});



// Función para guardar las listas en el localStorage del navegador
function guardarListasEnLocalStorage() {
    localStorage.setItem('listaNombreTrabajador', JSON.stringify(listaNombreTrabajador));
    localStorage.setItem('listaDiasSeleccionados', JSON.stringify(listaDiasSeleccionados));
    localStorage.setItem('listaSemana', JSON.stringify(listaSemana));
    localStorage.setItem('listaDescripcion', JSON.stringify(listaDescripcion));
    localStorage.setItem('listaGastoGasolina', JSON.stringify(listaGastoGasolina));
    localStorage.setItem('listaDatosVehiculo', JSON.stringify(listaDatosVehiculo));
    localStorage.setItem('listaGastoLiquidos', JSON.stringify(listaGastoLiquidos));
    localStorage.setItem('listaCompraMaterial', JSON.stringify(listaCompraMaterial));
    localStorage.setItem('listaGastosExtras', JSON.stringify(listaGastosExtras));
    
}
