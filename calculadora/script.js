let btnNumeros = document.querySelectorAll('.numeros');
let visor = document.getElementById('visor');
let btnC = document.querySelector('.btn-c')

for (let btn of btnNumeros) {
    btn.addEventListener('click', cliqueNumero);
}

function cliqueNumero(event) {

    visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}

function reset(){
    visor.innerHTML = "";
}



