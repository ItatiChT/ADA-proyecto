const prompt = require("prompt-sync")({ sigint: true });

console.log( ' Por favor ingrese dos numeros')

let primerNumero = parseFloat(prompt( 'Primer numero: '))
let segundoNumero = parseFloat(prompt( 'Segundo numero: '))

let resultadoSuma = primerNumero + segundoNumero
let resultadoResta =  primerNumero - segundoNumero
let resultadoMultiplicacion = primerNumero * segundoNumero
let resultadoDivision = primerNumero / segundoNumero

console.log(' El resultado de la suma de ambos numeros es: ' + resultadoSuma )
console.log( ' El resultado de la resta de ambos numeros es: ' + resultadoResta )
console.log(' El resultado de la multiplicacion de ambos numeros es: ' + resultadoMultiplicacion)
console.log(' El resultado de la division de ambos numeros es: ' + resultadoDivision)
