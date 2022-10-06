let btnNumeros = document.querySelectorAll('.numeros');
let visor = document.getElementById('visor');
let btnC = document.querySelector('.btn-c');
let operador = document.querySelectorAll('.operador');
let bntIgual = document.querySelector('#btn-igual');

for (let btn of btnNumeros) {
    btn.addEventListener('click', cliqueNumero);
}

function cliqueNumero(event) {
    if (isNaN(visor.innerHTML)) {
        visor.innerHTML = event.target.innerHTML;
    }
    else {
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    }
    
}

function reset(){
    visor.innerHTML = "";
}

for (let i of operador) {
    i.addEventListener('click', cliqueOperador);
}

let valorSalvo;
let operacaoSalva;

function cliqueOperador(event) {

    if (!isNaN(visor.innerHTML)) {
        if (valorSalvo === undefined) {
            valorSalvo = Number(visor.innerHTML);
        }
        else {
            valorSalvo = calculoOperacao(valorSalvo, operacaoSalva, Number(visor.innerHTML));
        }
    }

    operacaoSalva = event.target.innerHTML;
    visor.innerHTML = event.target.innerHTML;
}

bntIgual.addEventListener('click', calcular);

function calcular(event) {
    if (valorSalvo != undefined && operacaoSalva != undefined && !isNaN(visor.innerHTML)){
        visor.innerHTML = calculoOperacao(valorSalvo, operacaoSalva, Number(visor.innerHTML));
        valorSalvo = undefined;
        operacaoSalva = undefined;
    }
    
}

function calculoOperacao(valor1, operacao, valor2) {
    
    if(operacao === "+") {
        return valor1+valor2
    }
    else if (operacao === "-") {
        return valor1-valor2
    }
    else if (operacao === "/") {
        return valor1/valor2
    }
    else if (operacao === "*") {
        return valor1*valor2
    }
}



