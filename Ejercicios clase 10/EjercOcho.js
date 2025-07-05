const prompt = require("prompt-sync")({ sigint: true });
/* Conversión de Temperaturas: Escribe un programa que convierta una temperatura dada en 
grados Celsius a grados Fahrenheit. La fórmula de conversión es: */

let gradoCelsius = parseFloat(prompt('Grados Celsius = '))

const gradosFahrenheit = ( gradoCelsius * 1.8) + 32


console.log( gradoCelsius + ' C equivale a ' + gradosFahrenheit + ' F ')