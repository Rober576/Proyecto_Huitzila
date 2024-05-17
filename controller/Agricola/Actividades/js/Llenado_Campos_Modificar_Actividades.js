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

            // Comparar el valor de IdActividad y asignar el campo correspondiente
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
                    actividadValue = ''; // Caso por defecto
                    break;
            }

            // Seleccionar la opción en el combobox (select)
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
    } 
);
