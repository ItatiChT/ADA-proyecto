/*Crea un programa que le pida al usuario un número positivo. El programa deberá contar 
desde el 1 hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para realizar 
la tarea.*/
const prompt = require("prompt-sync")({ sigint: true });
let numeroIngresado = parseFloat(prompt(' Por favor, ingrese un numero positivo: '))

for(let vuelta = 1 ; vuelta <= numeroIngresado; vuelta ++)
    console.log('el valor es ' + vuelta)


