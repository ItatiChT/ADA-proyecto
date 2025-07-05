const prompt = require("prompt-sync")({ sigint: true });

let variableA = parseFloat(prompt( 'Por favor, ingrese un valor: '))
let variableB = parseFloat(prompt( 'Por favor, ingrese un valor: '))

let mayorQue = variableA >= 10 && variableB >= 10 
let menorQue = variableA < 10 && variableB < 10
let unoDistinto = (variableA < 10 && variableB >= 10) ||  (variableA >=10 && variableB < 10)
let iguales = (variableA === 10 && variableB === 10)

if (iguales){ console.log( ' Numeros iguales a 10 ')}
else if (mayorQue) {console.log( 'Ambos numeros son mayores que 10 ')}
else if( menorQue) {console.log('Ambos numeros son menores que 10 ')}
else if(unoDistinto) {console.log( ' Uno de los numeros no es mayor que 10 ' )}

