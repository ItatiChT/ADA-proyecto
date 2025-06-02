/*Define una constante PI con el valor de pi (3.14159). Pide al usuario 
que ingrese el radio de un círculo y calcula su área y perímetro 
utilizando la constante PI.*/

const prompt = require("prompt-sync")({ sigint: true });

/* pido al usurario que ingrese un dato, lo tranformo a numero con parseFloat*/
let radio = parseFloat(prompt( 'por favor, ingrese el valor del radio: '));
/*establezco pi como otra variable para los calculos, podria tambien ser una constante*/
let pi = 3.14150
/*formulas*/
let perimetro = 2 * radio * pi
let area = pi * (radio ** 2 )
/*resultado*/
console.log(' El perimetro es: ' + perimetro)
console.log(' El area es: ' + area)