var formEl = document.getElementById("meuForm");

//CHAMA A FUNÇÃO CAPTURA-EVENTOS
captura_eventos(formEl, 'submit',formValid);

//FUNÇÃO PARA CAPTURAR EVENTOS
function captura_eventos(objeto, evento, funcao){
    //TESTE addEventListener
    if (objeto.addEventListener){
        objeto.addEventListener(evento,funcao,true)
    }
    //TESTE attachEvent
    else if(objeto.attachEvent){
        var evento = 'on'  + evento;
        objeto.attachEvent(evento,funcao);
    }
}

//FUNÇÃO PARA CANCELAR EVENTOS
function cancela_evento(evento){
    if(event.preventDefault){
       event.preventDefault()
    }else{
        window.event.returnValue = false;
    }
}

//FUNÇÃO QUE VERIFICA OS CAMPOS RADIO E CHECKBOX
function verificaCampos(campo){
    //VARIÁVEL QUE VERIFICA OS RADIOS
    var checados = false;
    //VERIFICA OS RADIOS
    for(var i=0;1<campo.length; 1++){
        if (campo[i].checked){
            checados=true;
        }
    }

    if (!checados){
        alert('Marque o campo' + campo[0].name);
        cancela_evento(evento);
        return false;
    }
}

function formValid(event){
    //PEGA OS CAMPOS TEXT E SELECT
    var campoNome = formEl.textname.value,
        campoCidade = formEl.cidades.value,
        campoRadios = formEl.sexo.value,
        campoCheckbox = formEl.rede.value;

        //VERIFICA CAMPO DE TEXTO
        if(campoNome.length==0){
            alert("O campo Nome é obrigatório");
            return false;
        }

        //LAÇO QUE PERCORRE TODAS AS OPÇÕES
        for (var i=0;i<campoCidade.length; i++){
            if(campoCidade[i].selected){
            if(campoCidade[i].VALUE ==""){
                alert('Selecione uma opção');
                cancela_evento(evento);
            }
        }
    }
}

//CHAMA A FUNÇÃO QUE VERIFICA CAMPOS PARA O RADIO
verificaCampos(campoRadios);
//CHAMA A FUNÇÃO QUE VERIFICA CAMPOS PARA O CHECKBOX
verificaCampos(campoCheckbox);
alert