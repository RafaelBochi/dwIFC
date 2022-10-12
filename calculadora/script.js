let btnNumeros = document.querySelectorAll('.numeros');
let visor = document.getElementById('visor');
let btnC = document.querySelector('.btn-c');
let operador = document.querySelectorAll('.operador');
let bntIgual = document.querySelector('#btn-igual');
let btnPonto = document.querySelector('#btn-ponto');

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

btnPonto.addEventListener('click', cliquePonto);

function cliquePonto(event) {
let valorVisor = Number(visor.innerHTML);
    if (!isNaN(visor.innerHTML+'.')) {
        visor.innerHTML = visor.innerHTML + ".";
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


document.addEventListener('keydown', cliqueTecla);

function cliqueTecla(event) {
    let tecla = event.key;
    if ( tecla == 0 || tecla == 1 || tecla == 2 || tecla == 3 || tecla == 4 || tecla == 5 || tecla == 6 || tecla == 7 || tecla == 8 || tecla == 9) {
        if (isNaN(visor.innerHTML)) {
            visor.innerHTML = tecla;
        }
        else {
            visor.innerHTML = visor.innerHTML + tecla;
        }
    }
    
    else if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        if (!isNaN(visor.innerHTML)) {
            if (valorSalvo === undefined) {
                
                valorSalvo = Number(visor.innerHTML);
            }
            else {
                valorSalvo = calculoOperacao(valorSalvo, operacaoSalva, Number(visor.innerHTML));
            }
            operacaoSalva = tecla;
            visor.innerHTML = tecla;
        }
    }

    else if (tecla == 'Enter' || tecla === '=') {
        calcular();
    }

    else if (tecla == '.' || tecla == ',') {
        cliquePonto();
    }
} 
