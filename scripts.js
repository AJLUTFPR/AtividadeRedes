let form = document.getElementById("form");
let mascara = form.elements['masc'];
let subrede = form.elements['subrede'];
let endereco = form.elements['endereco'];
let btnLimpar = document.getElementById("limpar")

btnLimpar.addEventListener("click", handleBtnLimpar)


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



