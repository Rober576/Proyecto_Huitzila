document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("insumos_form");

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validarFormulario();
        });
    });

  
    const cajasDeTexto = form.querySelectorAll('input[type="number"]');
    cajasDeTexto.forEach(caja => {
        caja.addEventListener('keydown', function(event) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
                (event.keyCode == 65 && (event.ctrlKey === true || event.metaKey === true)) ||
                (event.keyCode == 67 && (event.ctrlKey === true || event.metaKey === true)) ||
                (event.keyCode == 86 && (event.ctrlKey === true || event.metaKey === true)) ||
                (event.keyCode == 88 && (event.ctrlKey === true || event.metaKey === true)) ||
                (event.keyCode >= 35 && event.keyCode <= 40)) {
                return;
            }
            if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        if (validarFormulario()) {
            enviarDatos();
        } else {
            alert("Por favor, complete correctamente todos los campos.");
        }
    });

    function validarFormulario() {
        const nombre = document.getElementById("Nombre").value;
        const unidades = document.getElementById("Unidades").value;
        const existencia = document.getElementById("Existencia").value;
        const fechaReg = document.getElementById("FechaReg").value;
        const stockMin = document.getElementById("Stockmi").value;
        const stockMax = document.getElementById("Stockma").value;
        const costo = document.getElementById("Costo").value;

        let bandera = true;

        if (!/^([a-zA-Z.]{1,50})$/.test(nombre)) {
            form.Nombre.style.border = "5px solid red";
            bandera = false;
        } else {
            form.Nombre.style.border = ""; 
        }

   
        if (!/^([a-zA-Z]{1,10})$/.test(unidades)) {
            form.Unidades.style.border = "5px solid red";
            bandera = false;
        } else {
            form.Unidades.style.border = "";
        }

        
        if (!Number.isInteger(Number(existencia))) {
            form.Existencia.style.border = "5px solid red";
            bandera = false;
        } else {
            form.Existencia.style.border = ""; 
        }

        
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaReg)) {
            form.FechaReg.style.border = "5px solid red";
            bandera = false;
        } else {
            form.FechaReg.style.border = ""; 
        }

        
        if (parseInt(stockMax) <= parseInt(stockMin)) {
            form.Stockmi.style.border = "5px solid red";
            form.Stockma.style.border = "5px solid red";
            bandera = false;
        } else {
            form.Stockmi.style.border = "";
            form.Stockma.style.border = ""; 
        }

       
        if (isNaN(parseFloat(costo))) {
            form.Costo.style.border = "5px solid red";
            bandera = false;
        } else {
            form.Costo.style.border = "";
        }

        return bandera; 
    }


    function enviarDatos() {
        var datos = new FormData(form);

        fetch('../../controller/Insumos/Modificar_Insumo.php', { 
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                form.reset();
                alert("Se han modificado los datos");
                window.location.href = '../../view/Insumos/Mostrar_Insumos.html';
            }
        });
    }
});
