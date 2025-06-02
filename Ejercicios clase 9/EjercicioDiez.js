/*Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error.*/

const prompt = require("prompt-sync")({ sigint: true });
/* pide al usuario que ingrese un digito y lo relaciono con los dias de la semana*/
console.log( ' ingres un digito al que se le asignara un dia de la semana')
/* variable a la que le asigno el valor ingresado, a dicho valor lo convierto en numero con parseFloat*/
let numero = parseFloat(prompt( ' numero ingresado: '))
/*establezco las igualdades*/
if( numero == 1) {console.log('domingo')}
else if( numero == 2) {console.log('lunes')}
else if( numero == 3) {console.log('martes')}
else if( numero == 4) {console.log('miercoles')}
else if( numero == 5) {console.log('jueves')}
else if( numero == 6) {console.log('viernes')}
else if( numero == 7) {console.log('sabado')}
else if( numero > 7) {console.log('fuera de rango')}


