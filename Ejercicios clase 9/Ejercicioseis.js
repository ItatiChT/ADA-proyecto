/*Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
edad. Muestra un mensaje personalizado según el caso.*/

const prompt = require("prompt-sync")({ sigint: true });
/* pido al usuario que ingrese su edad, utilizo parseFloat para convertir todo a numeros*/
let edad = parseFloat( prompt( ' por favor, ingrese su edad: '))
/* establezco los condicionales*/
if (edad >= 18 ) {console.log( 'mayor de edad')}
else if ( edad < 18 ) {console.log( 'menor de edad')}
