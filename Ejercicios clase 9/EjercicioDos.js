/*Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
valores numéricos de tu elección. Pide al usuario que ingrese un 
número y verifica si está dentro del rango definido por las constantes.*/

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt( ' por favor, ingrese un numero dentro del rango 0-10: '));
const RANGO_MINIMO = 0;
const RANGO_MAXIMO = 10;

if( numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {console.log( 'el numero esta dentro del rango')}
 else if( !(numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO)) {console.log( 'el numero esta fuera del rango')}
 // Utilice la negacion ! de la condicion del primer if para marcar lo que quede fuera del codigo

