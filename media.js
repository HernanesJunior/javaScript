const nota1 = 9;
const nota2 = 10;
const nota3 = 8;

const media = (nota1 + nota2 + nota3)/ 3;
console.log(media);

if(media < 5){
    console.log('reprovação');
}
else if(media >= 5 && media <= 7){
    console.log('recuperação');
}
else if(media > 7){
    console.log('passou de semestre');
}


