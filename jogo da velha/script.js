let vez = "";
let rodadas;

function cmcX() {
    vez = "X";
    let telaInicial = document.getElementById("telaInicial");
    telaInicial.style.marginRight = "200%";
    telaInicial.style.opacity = "0";

    let quantasRodadas = Number(document.getElementById("rodadas").value);
    rodadas = quantasRodadas + 1;
}

function cmcO() {
    vez = "O";
    let telaInicial = document.getElementById("telaInicial");
    telaInicial.style.marginRight = "200%";
    telaInicial.style.opacity = "0";

    let quantasRodadas = Number(document.getElementById("rodadas").value);
    rodadas = quantasRodadas + 1;
}

function jogada(casa) {
    if (casa.innerHTML === "") {
        casa.innerHTML = vez;
        alterna_jogador();
        ganhador();
    }
}

function alterna_jogador() {
    if (vez === "X") {
        vez = "O"
    } else {
        vez = "X"
    }
}

const casa01 = document.getElementById('casa01');
const casa02 = document.getElementById('casa02');
const casa03 = document.getElementById('casa03');
const casa04 = document.getElementById('casa04');
const casa05 = document.getElementById('casa05');
const casa06 = document.getElementById('casa06');
const casa07 = document.getElementById('casa07');
const casa08 = document.getElementById('casa08');
const casa09 = document.getElementById('casa09');

function reset() {
    casa01.innerHTML = "";
    casa02.innerHTML = "";
    casa03.innerHTML = "";
    casa04.innerHTML = "";
    casa05.innerHTML = "";
    casa06.innerHTML = "";
    casa07.innerHTML = "";
    casa08.innerHTML = "";
    casa09.innerHTML = "";
    vez = "X";
}

function ganhador() {
    if (casa01.innerHTML != "O" && casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa03.innerHTML === casa01.innerHTML) {
        placarX();
    }
    else if (casa01.innerHTML != "O" && casa01.innerHTML != "" && casa01.innerHTML === casa04.innerHTML && casa04.innerHTML === casa07.innerHTML) {
        placarX();
    }
    else if (casa01.innerHTML != "O" && casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa05.innerHTML === casa09.innerHTML) {
        placarX()
    }
    else if (casa02.innerHTML != "O" && casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa05.innerHTML === casa08.innerHTML) {
        placarX();
    }
    else if (casa03.innerHTML != "O" && casa03.innerHTML != "" && casa03.innerHTML === casa06.innerHTML && casa06.innerHTML === casa09.innerHTML) {
        placarX();
    }
    else if (casa03.innerHTML != "O" && casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa07.innerHTML) {
        placarX();
    }
    else if (casa04.innerHTML != "O" && casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML) {
        placarX();
    }
    else if (casa07.innerHTML != "O" && casa07.innerHTML != "" && casa08.innerHTML === casa07.innerHTML && casa08.innerHTML === casa09.innerHTML) {
        placarX();
    }

    else if (casa01.innerHTML != "X" && casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa03.innerHTML === casa01.innerHTML) {
        placarO();
    }
    else if (casa01.innerHTML != "X" && casa01.innerHTML != "" && casa01.innerHTML === casa04.innerHTML && casa04.innerHTML === casa07.innerHTML) {
        placarO();
    }
    else if (casa01.innerHTML != "X" && casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa05.innerHTML === casa09.innerHTML) {
        alert(`Ganhador: ${casa01.innerHTML}`);
        placarO()
    }
    else if (casa02.innerHTML != "X" && casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa05.innerHTML === casa08.innerHTML) {
        placarO();
    }
    else if (casa03.innerHTML != "X" && casa03.innerHTML != "" && casa03.innerHTML === casa06.innerHTML && casa06.innerHTML === casa09.innerHTML) {
        placarO();
    }
    else if (casa03.innerHTML != "X" && casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa07.innerHTML) {
        placarO();
    }
    else if (casa04.innerHTML != "X" && casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML) {
        placarO();
    }
    else if (casa07.innerHTML != "X" && casa07.innerHTML != "" && casa08.innerHTML === casa07.innerHTML && casa08.innerHTML === casa09.innerHTML) {
        placarO();
    }
}

let resultadoX = 0;

function placarX() {
    let placarX = document.querySelector('#placar .x p');
    resultadoX += 1;
    placarX.innerHTML = resultadoX;
    reset();
    zerarPlacar()
}

let resultadoO = 0;

function placarO() {
    let placarO = document.querySelector('#placar .o p');
    resultadoO += 1;
    placarO.innerHTML = resultadoO;
    reset();
    zerarPlacar()
}

function zerarPlacar() {
    let placarX = document.querySelector('#placar .x p');
    let placarO = document.querySelector('#placar .o p');
    if (resultadoO == Math.ceil(rodadas / 2) || resultadoX == Math.ceil(rodadas / 2)) {
        if (resultadoX > resultadoO) alert("Ganhador X");
        else alert("Ganhador O");
        resultadoO = "";
        placarO.innerHTML = resultadoO
        resultadoX = "";
        placarX.innerHTML = resultadoX

    }
}

function recarregarAPagina(){
    window.location.reload();
} 




