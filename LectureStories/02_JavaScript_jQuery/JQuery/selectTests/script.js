$(document).ready(function () {
    alert('Bonjour!  Je suis enchantée de faire votre connaissance.');

    $('#animals tbody tr:even').css('background-color', '#ffdddd');
    $('#animals tbody tr:even').css('color', '#6666ff');

    $("a").click(function () {
        alert("Didn't we just meet?");
    });

    $("p").click(function () {
        $("p").css('color', 'red', 'font-weight', 'bold');
    });

    $("ol li").click(function () {
        $("ol li:even").css('color', 'green');
        $("ol li:odd").css('color', 'red');
        $(this).css('color', 'blue');
    });

    $("h2").click(function () {
        $(this).hide();
    });
});