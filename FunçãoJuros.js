/* 
1- A vista Debito, rece 10% de desconto;
2- A vista no dinheiro ou pix, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiquetas sem juros;
Acima de duas vezes, preço normal de etiquetas mais juros de 10%; 
*/
function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto / 100)));
}

const precoetiqueta = 100;
const formaDePagamento = 1;

if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoetiqueta, 10));
} else if(formaDePagamento === 2){
    console.log(aplicarDesconto(precoetiqueta, 15));
} else if(formaDePagamento === 3){
    console.log(precoetiqueta);
}else{
    console.log(aplicarJuros(precoetiqueta, 10));

}

console.log(200 * 0.10);
console.log(10 / 100);
