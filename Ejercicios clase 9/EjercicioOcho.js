/*Pide al usuario que ingrese las longitudes de los tres lados de un 
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
escaleno. (Investiga sobre los triángulos para determinar la formula)*/

const prompt = require("prompt-sync")({ sigint: true });
/* empece con una consigna para que se entienda mejor*/
console.log ('por favor, ingrese los lados del triangulo');
/* pido al usuario ingresar numeros, los transformo a numeros para el programa*/
let lado1 = parseFloat(prompt( ' Lado A: '));
let lado2 = parseFloat(prompt( 'Lado B: '));
let lado3 = parseFloat(prompt( ' Lado C: '));
/* establezo igualdades y condiciones*/
if( lado1 === lado2 && lado2 === lado3) {console.log( 'Triangulo equilatero' )}
else if( lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {console.log( 'Triangulo isosceles')}
else {console.log(' Triangulo escaleno')}