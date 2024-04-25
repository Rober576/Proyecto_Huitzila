function agregarFilaATabla() {
    const nombreTrabajador = document.getElementById("nomTrab").value;
    const gastoGasolina = document.getElementById("gasGas").value;
    const datosVehiculo = document.getElementById("desVei").value;
    const gastoLiquidos = document.getElementById("gasLiq").value;
    const compraMaterial = document.getElementById("gasMat").value;
    const gastosExtras = document.getElementById("gasExt").value;
    const descripcion = document.getElementById("actDes").value;

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
    nuevaFila.appendChild(crearCelda(descripcion));
    nuevaFila.appendChild(crearCelda(gastoGasolina));
    nuevaFila.appendChild(crearCelda(datosVehiculo));
    nuevaFila.appendChild(crearCelda(gastoLiquidos));
    nuevaFila.appendChild(crearCelda(compraMaterial));
    nuevaFila.appendChild(crearCelda(gastosExtras));
    nuevaFila.appendChild(BotonEliminar());

    tabla.appendChild(nuevaFila);

    limpiarCampos();
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
    botonEliminar.className = "btn-eliminar"; 

    botonEliminar.addEventListener("click", function () {
        const fila = botonEliminar.parentNode.parentNode;
        fila.remove();
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
}


document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("anadirGasto");
    boton.addEventListener("click", agregarFilaATabla);
});
