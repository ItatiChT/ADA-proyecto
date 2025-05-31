//1. Solicite al usuario que ingrese un número entero.  (entrada)
//2. Determine si el número es par o impar. (salida)
//3. Muestre un mensaje indicando si el número es par o impar. 


const prompt = require("prompt-sync")({ sigint: true });

let numero = prompt('Por favor, ingrese un número:');
numero = parseInt(numero); 
if ( numero = numero % 2 === 0) {
  console.log('El número es par');
} else {
  console.log('El número es impar');
}
 
//a la linea 6 la lei de este modo: si el modulo de un numero es igual a cero , y el numero es igual a un numero cuyo modulo seria 0, entonces es par 

