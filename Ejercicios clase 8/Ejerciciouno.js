
//1. Solicite al usuario que ingrese un número cualquiera. (dato de entrada)
//2. Calcule el doble de ese número. (dato de salida)
//3. Muestre el resultado en la consola. 

const prompt = require('prompt-sync')({ sigint: true });

let numero = prompt('ingrese un numero: ');
// al principio puse "ingrese un numero" pero luego agregue los dos puntos y el espacio porque quedaba mas prolijo, sino me daba el promp asi Ingrese un numero34
numero = Number(numero);
//acá aclare que numero era un dato numerico, podria ocnfundirse ya que yo use caracteres
let doble = numero * 2;
console.log( ` el doble es :${doble}`); 
// EL signo ${} lo recomendo el programa



