//1. Pida al usuario que ingrese un número (dato de entrada)
//2. Verifique si el número es positivo, negativo o igual a cero (dato de salida)
//3. Muestre un mensaje indicando cuál es el caso. 

const prompt = require('prompt-sync')({ sigint: true });
let numero = prompt('Ingrese un numero: ');
numero = parseFloat (numero)
//parsefloat va a convertir lo ingresado a numero, sino podria interpretarse como caracteres
if (numero > 0) {console.log ('El numero es positivo')}
else if (numero === 0) {console.log ('Cero')}
// en este punto al usar solo '=' no funcionaba, despues lei que la igualdad que tenia que establecer era del tipo ===
else if (numero < 0) { console.log ('Negativo') }; 