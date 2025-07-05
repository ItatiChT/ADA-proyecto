const prompt = require("prompt-sync")({ sigint: true });

console.log('Por favor, ingrese sus datos');

let Nombre = prompt( 'Nombre: ')
let Edad = parseFloat(prompt( ' Edad: '));
let Peso = parseFloat(prompt( 'Peso: ' ));

if( !isNaN(Edad) && !isNaN(Peso)) {
    console.log( 'Hola ' + Nombre + ' de ' + Edad + ' años, tu peso es ' + Peso + 'kg' );}
else{ 
console.log("Por favor, revise los datos ingresados")}
