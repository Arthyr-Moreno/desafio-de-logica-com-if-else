const prompt = require('prompt-sync')();

const idade=prompt('diga sua idade ');

if(idade <=13 ){
    console.log('Faixa de idade: crainça '); 
} else if(idade >= 60){
    console.log('Faixa de idade: idoso '); 
    }else{
        console.log('Faixa de idade: adulto '); 
    }
    
