$(function () {
    var qtdPhones = 0;
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
            '        <button class="btn btn-danger btn-remover-telefone">' +
            '            <span class="glyphicon glyphicon-trash"></span>' +
            '        </button>' +
            '    </div>' +
            '</div>';

        $("#div-phones").append(blocoTelefone);
        qtdPhones++;
    });
});