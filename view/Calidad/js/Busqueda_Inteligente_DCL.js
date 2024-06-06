$(document).ready(function () {
    $('#buscar-txt').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        var rows = $('#tablaResultado table tbody tr').filter(function () {
            var textToSearch = $(this).children('td:first').text().toLowerCase();
            $(this).toggle(textToSearch.indexOf(value) > -1);
            return $(this).is(':visible');
        });

        if (rows.length === 0 && value !== "") {
            $('#tablaResultado').hide(); // Ocultar la tabla solo si se ha ingresado texto de búsqueda
            $('#mensaje').show(); // Mostrar mensaje de no resultados
        } else {
            $('#tablaResultado').show(); // Mostrar la tabla si hay resultados
            $('#mensaje').hide(); // Ocultar mensaje de no resultados
        }
    });

    // Ocultar mensaje de no resultados y mostrar la tabla al cargar la página
    $('#mensaje').hide();
    $('#tablaResultado').show();
});
