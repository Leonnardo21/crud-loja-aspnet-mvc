$(function () {
    var qtdPhones = $("#div-phones .row").length;
    $("#btn-add-phone").click(function (e) {
        e.preventDefault();
        var blocoTelefone = '<div class="row">' +
            '    <div class="col-md-2">' +
            '        <input type="number" name="Telefones[' + qtdPhones + '].DDD" maxlength = "2" placeholder = "DDD" class="form-control txt-ddd" /> ' +
            '    </div>' +
            '    <div class="col-md-6">' +
            '        <input type="text" name="Telefones[' + qtdPhones + '].Numero" placeholder = "Numero" class="form-control txt-numero" /> ' +
            '    </div>' +
            '    <div class="col-md-3">' +
            '        <select name="Telefones[' + qtdPhones + '].Tipo" class="form-control sel-tipo" > ' +
            '            <option value="0">Residencial</option>' +
            '            <option value="1">Comercial</option>' +
            '            <option value="2">Celular</option>' +
            '            <option value="3">Recado</option>' +
            '        </select>' +
            '    </div>' +
            '    <div class="col-md-1">' +
            '        <button class="btn btn-danger btn-remove-phones">' +
            '            <span class="glyphicon glyphicon-trash"></span>' +
            '        </button>' +
            '    </div>' +
            '</div>';

        $("#div-phones").append(blocoTelefone);
        qtdPhones++;
    });

    $("#div-phones").on("click", ".btn-remove-phones", function (e) {
        e.preventDefault();

        var id = $(this).attr("data-id");

        if (id)
            $.post("/Clientes/RemovePhone?id=" + id);

        $(this).parent().parent().remove();
        qtdPhones--;

        $("#div-phones .row").each(function (indice, elemento) {
            $(elemento).find(".txt-ddd").attr("name", "Telefones[" + indice + "].DDD");
            $(elemento).find(".txt-numero").attr("name", "Telefones[" + indice + "].Numero");
            $(elemento).find(".sel-tipo").attr("name", "Telefones[" + indice + "].Tipo");
        });
    });
});