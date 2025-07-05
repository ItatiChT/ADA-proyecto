/*Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida 
al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, 
negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo 
en cada caso.*/
const prompt = require("prompt-sync")({ sigint: true });
let numeroIngresado = parseFloat(prompt(' Por favor, ingrese un numero: '))
if(numeroIngresado === 0){console.log(' Numero igual a 0')}
else if(numeroIngresado > 0){console.log('Numero positvo')}
else if(numeroIngresado < 0){ console.log( 'Numero negatvo')}