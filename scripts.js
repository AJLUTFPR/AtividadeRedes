var form = document.getElementById("form");
var mascara = form.elements['masc'];
var subrede = form.elements['subrede'];
var endereco = form.elements['endereco'];
var btnLimpar = document.getElementById("limpar")
var btnVoltar = document.querySelector("#voltar")
var tabela = document.querySelector("#tabela")
var tituloSubrede = document.querySelector("#tituloSubrede")
var tituloPrimeiroEnd = document.querySelector("#tituloPrimeiroEnd")
var tituloUltimoEnd = document.querySelector("#tituloUltimoEnd")
var tituloMascara = document.querySelector("#tituloMascara")

btnLimpar.addEventListener("click", handleBtnLimpar)
btnVoltar.addEventListener("click", handleBtnVoltar)


function handleBtnLimpar(){
    if(subrede.value !== '' || endereco.value !== ''){
        subrede.value = ''
        endereco.value = ''
    }

    if(mascara.value !== '1'){
        mascara.value = "1"
    }

    handleBtnLimpar()
}

function handleBtnVoltar(){
    container.style.display = "block"
    resultado.style.display = "none";
}

function permitirNumerosEPonto(input) {
    input.value = input.value.replace(/[^\d.]/g, '');
    input.value = input.value.replace(/(\.\.+)/g, '.');
}

permitirNumerosEPonto()
