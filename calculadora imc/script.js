let btnCalc = document.querySelector("button");
let nome = document.querySelector('.nome-input');
let altura = document.querySelector('.altura-input');
let peso = document.querySelector('.peso-input');
let secImcs = document.querySelector('.imcs');

btnCalc.addEventListener('click', () => calcular ());

const calcular = () => {

    let imcs = secImcs.childNodes;

    if (nome.value.trim().length < 5) {
        return nome.classList.add("invalidInput")
    }

    else {
        nome.classList.remove("invalidInput");
    }

    if (altura.value.trim().length < 1) {
        return altura.classList.add("invalidInput")
    }

    

    if (peso.value.trim().length < 1) {
        return peso.classList.add("invalidInput")
    }

    else {
        peso.classList.remove("invalidInput");
    }

    if(imcs.length == 15) {
        secImcs.firstChild.remove();
    }

    let imc = (peso.value/(altura.value*altura.value)).toFixed(1);

    let imcDiv = document.createElement('div');
    imcDiv.classList.add('imc')

    if (imc < 15.99) {

        imcDiv.style.backgroundColor = "red";
        imcDiv.innerHTML = `${nome.value} seu IMC é ${imc}. Você está classificado com MAGREZA EXTREMA`
        
    }
    else if (imc >= 16  && imc <= 16.99) {

        imcDiv.style.backgroundColor = "rgb(255, 60, 0)";
        imcDiv.innerHTML = `${nome.value} seu IMC é ${imc}. Você está classificado com MAGREZA MODERADA`
        
    }
    else if (imc >= 17 && imc <= 18.5) {

        imcDiv.style.backgroundColor = "rgb(255, 174, 0)";
        imcDiv.innerHTML = `${nome.value} seu IMC é ${imc}. Você está classificado com MAGREZA LEVE`
        
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        
        imcDiv.style.backgroundColor = "rgb(200, 200, 200)";
        imcDiv.innerHTML = `${nome.value} seu IMC é ${imc}. Você está classificado com SAUDÁVEL`

    }
    else if (imc >= 25 && imc <= 29.9) {
        
        imcDiv.style.backgroundColor = "rgb(255, 174, 0)";
        imcDiv.innerHTML = `${nome.value} seu IMC é ${imc}. Você está classificado com SOBREPESO`

    }
    else if (imc >= 30 && imc <= 34.9) {
        
        imcDiv.style.backgroundColor = "rgb(255, 60, 0)";
        imcDiv.innerHTML = `${nome.value} seu IMC é ${imc}. Você está classificado com OBESIDADE GRAU 1`

    }
    else if ( imc >= 35 && imc <= 39.9) {
        
        imcDiv.style.backgroundColor = "rgb(255, 174, 0)";
        imcDiv.innerHTML = `${nome.value} seu IMC é ${imc}. Você está classificado com OBESIDADE GRAU 2 (Severa)`

    }
    else if (imc >= 40) {
        
        imcDiv.style.backgroundColor = "rgb(0, 0, 0)";
        imcDiv.style.color = "white"
        imcDiv.innerHTML = `${nome.value} seu IMC é ${imc}. Você está classificado com OBESIDADE GRAU 3 (Mórbida)`

    }

    secImcs.appendChild(imcDiv)

}