function incrementarjuros(valor, percentualjuros){
    const valorDeAcrescimo =  (percentualjuros / 100)* valor;
    return valor + valorDeAcrescimo;
}
console.log(incrementarjuros(100,10));
console.log(incrementarjuros(100,10));
