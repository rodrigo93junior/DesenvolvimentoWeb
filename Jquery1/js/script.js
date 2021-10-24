$(document).ready(function () {

    $('main').hide();

    $(".form-control").keyup(function () {
        let mostrar = this.value;

        if (mostrar == 'mostrar') {
            $('main').hide(100);
        } else {
            $('main').show(300);
        }

    })

});