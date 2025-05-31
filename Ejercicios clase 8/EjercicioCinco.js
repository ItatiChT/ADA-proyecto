//1. Solicite al usuario que ingrese su nombre. (entrada)
//2. Muestre un saludo personalizado usando el nombre ingresado.(salida)

const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt( 'por favor, ingrese su nombre: ')

console.log( 'Hola, bienvenida ' + nombre)
