const preco_gasolina = 6.59;
const preco_etanol = 5.79;
const gasto_combustivel = 10;
const distancia = 100;

const combustivel_veiculo = 'gasolina';

const litros_consumidos = distancia / gasto_combustivel;

if (combustivel_veiculo === 'Etanol') {
    const valor_gasto = litros_consumidos * preco_etanol;
    console.log(valor_gasto.toFixed(2));    /* tofixed arrendoda os numeros com apenas 2 digitos apos a virgula ou ponto */
}
else {
    const valor_gasto = litros_consumidos * preco_gasolina;
    console.log(valor_gasto.toFixed(2));
}


 /* tofixed arrendoda os numeros com apenas 2 digitos apos a virgula ou ponto */