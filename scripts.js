let form = document.getElementById("form");
let mascara = form.elements['masc'];
let subrede = form.elements['subrede'];
let endereco = form.elements['endereco'];
let btnLimpar = document.getElementById("limpar")

function handleBtnLimpar(){
    if(subrede.value !== '' || endereco.value !== ''){
        subrede.value = ''
        endereco.value = ''
    }
    handleBtnLimpar()
}


btnLimpar.addEventListener("click", handleBtnLimpar)

