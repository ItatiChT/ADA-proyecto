//1. Pida al usuario que ingrese dos números. (dato de entrada)
//2. Sume ambos números. 
//3. Muestre el resultado de la suma.(dato de salida)

const prompt = require("prompt-sync")({ sigint: true });

let numeroA = prompt ('Por favor, ingrese un numero:');
let numeroB = prompt ('Por favor, ingrese otro numero:');
// ingrese dos varibales diferentes para los dos datos que deben ingresar
numeroA = parseFloat(numeroA);
numeroB = parseFloat(numeroB);
let suma = parseFloat(numeroA + numeroB);
// parseFloat permite sumar 4=4 y que el resultado sea 8, antes sin parsefloat el resultado seria 44
//crea hay otras maneras de realizar esta suma como A+=B, pero me quede con la forma mas sencilla de solo usar el +
console.log(`El resultado de la suma es: ${suma}`);
//de nuevo, lo violeta el ${} lo recomienda el programa