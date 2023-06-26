const prompt = require('prompt-sync')({sigint: true});
const calculadora = require('./calculadora.js')
const idade = require('./idade.js');

function mostrarMenu(){
    console.log('+------------------------------------------------+');
console.log('|  bem vindo ao menu principal      |');
console.log('+------------------------------------------------+');

console.log('escolha uma opcao para iniciar um dos programas disponiveis');
console.log('0- sair do menu');
console.log('1-calculadora');
console.log('2-idade');
}




 
let condicao = true;
do{ 
    mostrarMenu();
    const opcao = prompt('\ninforme a opção desejada: ');
    const condicao = false;
switch(opcao) {
    case '2':
        idade.principal();
    case '1':
        calculadora.principal();
        break;
    case '0':
        console.log('😢saindo... ');
        
        break;

        default:
        console.log('opção invalida maldito ');
 }
}while(!condicao);



