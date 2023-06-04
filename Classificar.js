const prompt = require('prompt-sync')();

function main() {

let maior, menor, meio;

numero1 = Number(prompt('diz um numero ae  '));
numero2 = Number(prompt('mais um '));
numero3 = Number(prompt('o ultimo '));


if(numero1 > numero2 && numero1 > numero3){
    maior = numero1;

    if(numero2 < numero3){
        menor = numero2;
        meio = numero3;
    } else{
    menor=numero3;
    meio=numero2;
    }

}else if(numero1 < numero2 && numero1 < numero3){
    menor=numero1;
    
    if(numero2 > numero3){
        maior= numero2;
        meio = numero3;
    } else{
    maior=numero3;
    meio=numero2;
    }

} else{
    meio = numero1

    if(numero2 > numero3){
        maior= numero2;
        menor = numero3;
    } else{
    maior=numero3;
    menor=numero2;
    }
}

console.log('Menor: ', menor);
console.log('Meio: ', meio);
console.log('Maior: ', maior);


}

main();
