$(document).ready(function () {
    $('#buscar-txt').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#tablaResultado table tbody tr').filter(function () {
            var textToSearch = $(this).children('td').slice(0, -2).text().toLowerCase();
            $(this).toggle(textToSearch.indexOf(value) > -1);
        });
    });
});
