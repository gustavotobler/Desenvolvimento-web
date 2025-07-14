var formEl = document.getElementById("meuform");

// Captura eventos
captura_eventos(formEl, 'submit', formValid);

function captura_eventos(objeto, evento, funcao) {
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    } else if (objeto.attachEvent) {
        objeto.attachEvent('on' + evento, funcao);
    }
}

function cancela_evento(evento) {
    if (evento.preventDefault) {
        evento.preventDefault();
    } else {
        window.event.returnValue = false;
    }
}

function verificaCampos(campo, evento) {
    var checados = false;
    for (var i = 0; i < campo.length; i++) {
        if (campo[i].checked) {
            checados = true;
            break;
        }
    }

    if (!checados) {
        alert('Marque o campo ' + campo[0].name);
        cancela_evento(evento);
        return false;
    }
}

function formValid(event) {
    var campoNome = formEl.textname.value,
        campoCidade = formEl.cidades.options,
        campoRadios = formEl.querySelectorAll('input[name="sexo"]'),
        campoCheckbox = formEl.querySelectorAll('input[name="rede"]');

    if (campoNome.length == 0) {
        alert("O campo Nome é obrigatório");
        cancela_evento(event);
        return false;
    }

    var cidadeSelecionada = false;
    for (var i = 0; i < campoCidade.length; i++) {
        if (campoCidade[i].selected && campoCidade[i].value == "") {
            alert('Selecione uma cidade válida');
            cancela_evento(event);
            return false;
        }
    }

    verificaCampos(campoRadios, event);
    verificaCampos(campoCheckbox, event);
}
