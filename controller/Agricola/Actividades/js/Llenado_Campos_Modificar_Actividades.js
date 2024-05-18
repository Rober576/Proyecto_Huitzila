document.addEventListener('DOMContentLoaded', function() {


    // Obtener datos almacenados en localStorage
    var dataString = localStorage.getItem('data');
    var data;
    if (dataString) {
        data = JSON.parse(dataString);
        console.log(data);

        // Verificar si hay datos de actividadplantacion y reporteactividad
       
            // Rellenar los campos del formulario con los datos obtenidos de actividadplantacion
            document.getElementById('fechaIni').value = data.actividadplantacion[0].Fecha;
            document.getElementById('canFecha2').value = data.actividadplantacion[0].Semana;
            document.getElementById('cosGenral').value = data.actividadplantacion[0].Costo;
            document.getElementById('descAct').value = data.actividadplantacion[0].Descripcion;
            document.getElementById('selePlaga').value = data.actividadplantacion[0].NombrePlaga;
            document.getElementById('seleHerbicida').value = data.actividadplantacion[0].NombreHerbicida;

            filas = data.reporteactividad.length;
            console.log("Número de filas: " + filas);

            General=parseFloat(data.actividadplantacion[0].Costo) || 0;
            GastoT=0+General;

            for (let i = 0; i < data.reporteactividad.length; i++) {
                Nombre= data.reporteactividad[i].NombreTrabajador;
                lunes= data.reporteactividad[i].Lunes;
                martes= data.reporteactividad[i].Martes;
                miercoles= data.reporteactividad[i].Miercoles;
                jueves= data.reporteactividad[i].Jueves;
                viernes= data.reporteactividad[i].Viernes;
                sabado= data.reporteactividad[i].Sabado;
                NoSemanas='Semana '+ data.reporteactividad[i].NoSemana;
                Actividad= data.reporteactividad[i].ActividadDesarrollada;
                let Gas = parseFloat(data.reporteactividad[i].Gasolina) || 0;
                Vehiculo= data.reporteactividad[i].Vehiculos;
                let Liquido = parseFloat(data.reporteactividad[i].Liquidos) || 0;
                let Material = parseFloat(data.reporteactividad[i].Materia) || 0;
                let GastosE = parseFloat(data.reporteactividad[i].GastosExtras) || 0;

                GastoT = GastoT+ Liquido + Material + GastosE+ Gas;

                let diasSeleccionados = [];


                if (data.reporteactividad[i].Lunes== 1) {
                    diasSeleccionados.push('Lunes')
                }
                if (data.reporteactividad[i].Martes== 1) {
                    diasSeleccionados.push('Martes'); 
                }
                if (data.reporteactividad[i].Miercoles== 1) {
                    diasSeleccionados.push('Miércoles');  
                }
                if (data.reporteactividad[i].Jueves== 1) {
                    diasSeleccionados.push('Jueves');
                }
                if (data.reporteactividad[i].Viernes== 1) {
                    diasSeleccionados.push('Viernes');
                }
                if (data.reporteactividad[i].Sabado== 1) {
                    diasSeleccionados.push('Sábado');
                }

                const tabla = document.getElementById("tablaActividades");
                const nuevaFila = document.createElement("tr");



                nuevaFila.appendChild(crearCelda(Nombre));
                nuevaFila.appendChild(crearCelda(diasSeleccionados.join(', ')));
                nuevaFila.appendChild(crearCelda(NoSemanas));
                nuevaFila.appendChild(crearCelda(Actividad));
                nuevaFila.appendChild(crearCelda(Gas));
                nuevaFila.appendChild(crearCelda(Vehiculo));
                nuevaFila.appendChild(crearCelda(Liquido));
                nuevaFila.appendChild(crearCelda(Material));
                nuevaFila.appendChild(crearCelda(GastosE));
                nuevaFila.appendChild(BotonEliminar());

                tabla.appendChild(nuevaFila);

            }

            console.log(GastoT)
            Lista();
            
            
            document.getElementById('total').value = GastoT;

            var actividadValue = '';


            switch (data.actividadplantacion[0].IdActividad) {
                case "1":
                    actividadValue = 'Plantación';
                    break;
                case "2":
                    actividadValue = 'Mantenimiento: Manual (deshierbe)';
                    break;
                case "3":
                    actividadValue = 'Mantenimiento: Mecánico (rastra, subsuelo, arado)';
                    break;
                case "4":
                    actividadValue = 'Control de plagas: Químico';
                    break;
                case "5":
                    actividadValue = 'Control de plagas: Biológico';
                    break;
                case "6":
                    actividadValue = 'Nutrición';
                    break;
                case "7":
                    actividadValue = 'Fertilización';
                    break;
                case "8":
                    actividadValue = 'Foliar';
                    break;
                case "9":
                    actividadValue = 'Cosecha';
                    break;
                default:
                    actividadValue = '';
                    break;
            }
            var actividadSelect = document.getElementById('actividadSele');
            var options = actividadSelect.options;

            for (var i = 0; i < options.length; i++) {
                if (options[i].text === actividadValue) {
                    options[i].selected = true;
                    break;
                }
            }
        } else {
            console.log('No hay datos disponibles de actividadplantacion o el formato de los datos es incorrecto.');
        }

        function crearCelda(texto) {
            const celda = document.createElement("td");
            celda.textContent = texto;
            return celda;
        }



        function BotonEliminar() {                                         
            const celda = document.createElement("td");
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.className = "btn-eliminar Boton_Tabla"; 
        
            botonEliminar.addEventListener("click", function () {   //////Funcion de eliminarrrrrrrrr 
                const fila = botonEliminar.parentNode.parentNode;
            
                const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta fila?");
            
                if (confirmacion) {
                    console.log("Eliminar")
                    fila.remove();
                    const listaNombreTrabajador = [];
                    const listaDiasSeleccionados = [];
                    const listaDescripcion = [];
                    const listaGastoGasolina = [];
                    const listaDatosVehiculo = [];
                    const listaGastoLiquidos = [];
                    const listaCompraMaterial = [];
                    const listaGastosExtras = [];
                    const listaSemana = [];
                    const General = document.getElementById("cosGenral").value;
                    const CostoGeneral = parseFloat(General);
                    const tabla = document.getElementById("tablaActividades");

                    if (tabla.rows.length > 1) {
                        console.log("Hay elementos antes de agregar");
                        const numeroDeFilas = tabla.rows.length;

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
                        


                    } else {
                        console.log("La tabla no contiene más elementos.");
                        document.getElementById("total").value = CostoGeneral;

                    }





                } else {
                    console.log("Eliminación cancelada");
                }
            });
        
            celda.appendChild(botonEliminar);
            return celda;
            
        }

        
        function Lista(){
            const tabla = document.getElementById("tablaActividades");

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




    } 

    


);
