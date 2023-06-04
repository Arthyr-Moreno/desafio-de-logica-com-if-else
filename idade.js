const prompt = require('prompt-sync')();

const idade = prompt('Qual sua idade? ');

if (idade < 18 ){
    console.log('Sai daqui pveti');
} else{
    console.log('De boa entra ae');
}