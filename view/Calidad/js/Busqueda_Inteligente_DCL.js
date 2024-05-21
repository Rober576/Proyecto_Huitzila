// public/js/Busqueda_Inteligente_Ficoquimico.js

$(document).ready(function () {
    $('#buscar-txt').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#tablaResultado table tbody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
