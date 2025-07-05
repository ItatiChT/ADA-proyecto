const prompt = require("prompt-sync")({ sigint: true });

let Edad = parseInt(prompt( 'Por favor, ingrese su edad: '));

const EDAD_MAXIMA = 99
const EDAD_MINIMA =  18

if( Edad >= EDAD_MINIMA && Edad <= EDAD_MAXIMA)
  { console.log( ' Dentro del rango de edad permitido');
} else
   { console.log ( 'No cumple los requisitos' )};
