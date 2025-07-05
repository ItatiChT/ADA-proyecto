/*Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número 
y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso*/

const prompt = require("prompt-sync")({ sigint: true });
let numeroIngresado = parseFloat(prompt(' Por favor, ingrese un numero: '))

numeroIngresado % 2 === 0 ? console.log('Numero par') : console.log('Numero impar')
