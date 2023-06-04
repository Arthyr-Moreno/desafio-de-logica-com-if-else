const prompt = require('prompt-sync')();

function main(){ 

const nota = prompt('Informe a nota do aluno ');

if (nota >= 7){
    console.log('Aluno aprovado');
} else{
    console.log('Aluno reprovado');
}
}
main();