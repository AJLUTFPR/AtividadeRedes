let form = document.getElementById("form");
let mascara = form.elements['masc'];
let subrede = form.elements['subrede'];
let endereco = form.elements['endereco'];
let btnLimpar = document.getElementById("limpar")
let btnVoltar = document.querySelector("#voltar")

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

