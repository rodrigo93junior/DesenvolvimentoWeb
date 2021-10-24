$(document).ready(function () {
    $(".btn-secondary").click(function () {
        $(this.parentElement.parentElement.children[1]).toggle();
    });
});