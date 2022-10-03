function calculo() {

    const a = Number(document.getElementById('valor-a').value);
    const b = Number(document.getElementById('valor-b').value);
    const c = Number(document.getElementById('valor-c').value);

    const delta = (b*b)-(4*a*c);

    if(delta > 0 ){
        const x1 = Number((-b + (Math.sqrt(delta))) / (2*a));
        const x2 = Number((-b - (Math.sqrt(delta))) / (2*a));
        document.getElementById("resultado").innerHTML = `X1 = ${x1.toFixed(2)}, X2 = ${x2.toFixed(2)}`;
    }
    else if (delta == 0) {
        const x2 = Number((-b) / (2*a));
        document.getElementById("resultado").innerHTML = `Resultado: ${x2}`;
    }
    else {
        document.getElementById("resultado").innerHTML = `Impossivel calcular`;
    }
    

    
}
