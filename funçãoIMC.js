function calcularIMC(peso,altura){
    return peso/ Math.pow (altura,2);
}

function classificarIMC(imc){
    
}

const peso = 80;
const altura = 1.74;
const imc = calcularIMC(peso,altura);  /* puxa  a função que foi criada em cima */

console.log(imc);
