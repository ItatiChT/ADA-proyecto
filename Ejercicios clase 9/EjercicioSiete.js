/* Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras*/


const prompt = require("prompt-sync")({ sigint: true });

console.log( 'Introduzca su peso en kilogramos: ' )
/* pide el ingreso de un dato y convierto el dato string a numero */
let peso = parseFloat( prompt( ' peso: ' ))
/*agrego otra variable libra, con la cual voy a multiplicar el peso y obtener el equivalente en libras*/
let libra = 2.205
 console.log( 'su peso en libras es: ' + peso * libra )
