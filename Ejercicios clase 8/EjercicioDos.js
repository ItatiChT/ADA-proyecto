//1. Pida al usuario que ingrese un número. 
//2. Verifique si el número es positivo, negativo o igual a cero. 
//3. Muestre un mensaje indicando cuál es el caso. 

const prompt = require('prompt-sync')({ sigint: true });
let numero = prompt('Ingrese un numero: ');
numero = parseFloat (numero)
if (numero > 0) {console.log ('Positivo')}
else if (numero === 0) {console.log ('Cero')}
else if (numero < 0) { console.log ('Negativo') }; 