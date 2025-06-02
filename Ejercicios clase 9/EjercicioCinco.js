/*Escribe un programa que pida al usuario que ingrese tres números y 
determine cuál es el mayor de los tres.*/

const prompt = require("prompt-sync")({ sigint: true });

/* inclui al principio este console.log para no tener que repetir lo mismo en cada variable*/
console.log( 'Por favor, ingrese tres numeros')
/*declaro los datos de entrada*/
let numero1 = parseFloat( prompt( 'Primer numero: '))
let numero2 = parseFloat( prompt( 'Segundo numero: '))
let numero3 = parseFloat( prompt( 'Tercer numero: '))
/*ahora empiezo a marcas las condiciones*/
if( numero1 > numero2 && numero1 > numero3) {console.log(numero1 + ' es mayor que ' + numero2 + ' y ' + numero3)}
else if ( numero2 > numero1 && numero2 > numero3) {console.log(numero2 + ' es mayor que ' + numero1 + ' y ' + numero3 )}
else if ( numero3 > numero1 && numero3 > numero2) {console.log(numero3 + ' es mayor que ' + numero2 + ' y ' + numero1)}
else{ console.log( 'hay dos o mas numeros iguales' )};