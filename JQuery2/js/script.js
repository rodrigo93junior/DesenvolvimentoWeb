$(document).ready(function () {

    $("input[id!='primeiroNome']").attr('readonly', true)
    $("select[id!='primeiroNome']").attr('readonly', true)
   

    $('input').on('input propertychange', function () {
        if ($(this).val() == "") {
            $("input[id!='primeiroNome']").attr('readonly', true)
            $("select[id!='primeiroNome']").attr('readonly', true)
        } else {
            $("input").attr('readonly', false)
            $("select").attr('readonly', false)
        }
    });

    'use strict';

    window.addEventListener('load', function () {
        // Selecione todos os campos desejados para aplicar estilos de validação customizados.
        var forms = document.getElementsByClassName('needs-validation');
        // Faz um loop neles e previne envio
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();