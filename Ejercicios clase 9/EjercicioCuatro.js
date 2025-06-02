/*Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre.*/

const prompt = require("prompt-sync")({ sigint: true });
/* pido al usuario que ingrese su numero */
let nombre = prompt( 'por favor, ingrese su nombre: ' );
/* agrego otra variable con mi nombre*/
let minombre = nombre.toLowerCase() === 'itati';
 /* agrego un if, si corresponde o no hara variar la respuesta */
if( minombre) {console.log( 'igual a mi nombre') }
else {console.log( 'distinto a mi nombre')}