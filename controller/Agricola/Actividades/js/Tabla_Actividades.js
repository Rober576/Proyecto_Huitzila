
function agregarFilaATabla() {
    const nombreTrabajador = document.getElementById("nomTrab").value;
    const gastoGasolina = document.getElementById("gasGas").value;
    const datosVehiculo = document.getElementById("desVei").value;
    const gastoLiquidos = document.getElementById("gasLiq").value;
    const compraMaterial = document.getElementById("gasMat").value;
    const gastosExtras = document.getElementById("gasExt").value;

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
    nuevaFila.appendChild(crearCelda(gastoGasolina));
    nuevaFila.appendChild(crearCelda(datosVehiculo));
    nuevaFila.appendChild(crearCelda(gastoLiquidos));
    nuevaFila.appendChild(crearCelda(compraMaterial));
    nuevaFila.appendChild(crearCelda(gastosExtras));
    nuevaFila.appendChild(crearCelda(diasString)); 

    tabla.appendChild(nuevaFila);

    console.log("Nueva fila agregada a la tabla");
}

function crearCelda(texto) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    return celda;
}

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("anadirGasto");
    boton.addEventListener("click", agregarFilaATabla);
});
