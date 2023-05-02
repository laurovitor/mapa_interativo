$(document).ready(function () {
    $('#map .state').click(function () {
        var estado = $(this).attr('data-state');
        var box_estado = '#box_' + estado;

        //console.log('.state_'+estado+' .shape');

        $('.state .label_icon_state').css({ 'fill': '#666' });
        $('.state .shape').css({ 'fill': '#ddd' });

        $('#state_' + estado + ' .label_icon_state').css({ 'fill': '#FFF' });
        $('#state_' + estado + ' .shape').css({ 'fill': '#fd7132' });

        if ($('#box_' + estado).length == 0) {
            //console.log('Não existe');
        } else {
            $('.parca .estado').addClass('some');
            $('.parca .estado').css({ 'opacity': 0, 'visibitity': 'hidden' });

            $(box_estado).removeClass('some');
            $(box_estado).css({ 'opacity': 1, 'visibitity': 'visible' });
        }
    });

    $('#map .state').click(function (e) {
        e.preventDefault();
    });

    $('#seletory').change(function () {
        $('.parca .estado').css({ 'opacity': 0, 'visibitity': 'hidden' });
        $('#box_' + $(this).val()).css({ 'opacity': 1, 'visibitity': 'visible' });
    });
});
