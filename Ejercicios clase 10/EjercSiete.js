const prompt = require("prompt-sync")({ sigint: true });
/*Declara dos variables con valores iniciales y luego intercambia sus valores. 
 Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal,
 aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, 
investiga sobre el que usaras*/

let variableA = parseFloat(prompt( 'Por favor, ingrese un valor: '))
let variableB = parseFloat(prompt( 'Por favor, ingrese un valor: '))

console.log('Valores antes del intercambia: valor A = ' + variableA + ' valor B = ' + variableB)

let variableIntercambio =  ('')

variableIntercambio = variableA
variableA = variableB
variableB = variableIntercambio

console.log( 'Los valores despues del intercambio son: Valor A = ' + variableA + ' Valor B = ' + variableB)