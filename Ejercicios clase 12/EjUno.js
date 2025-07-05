/* Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo.
 Luego, imprime la suma de todos los números ingresados.*/

const prompt = require("prompt-sync")({ sigint: true });
let numeroIngresado = parseInt(prompt(' Por favor, ingrese un numero: '))
let suma = 0 ;
while(numeroIngresado >= 0){
    suma = suma + numeroIngresado
    numeroIngresado = parseInt(prompt('Ingrese otro número (o uno negativo para salir): '));
}
console.log('La suma total es:' + suma)
