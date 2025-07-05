const prompt = require("prompt-sync")({ sigint: true });
console.log('por favor ingrese su edad y su peso');
let Edad = parseFloat(prompt( ' Edad: '));
let Peso = parseFloat(prompt( 'Peso: ' ));
if ( !isNaN(Edad) && !isNaN(Peso)){
    console.log( 'muchas gracias');}
else { console.log ( 'datos introducidos no validos');}
