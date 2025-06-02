//Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales. 

const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseFloat(prompt( 'Por favor, ingrese un numero: '));
let numero2 = parseFloat(prompt( 'por favor, ingrese otro numero: ' ));
 //Con parseFloat me aseguro que los datos ingresados sean leidos como numeros.
if ( numero1 > numero2 ) { console.log(`${numero1}  es mayor que   ${numero2}` );}
 else if( numero1 < numero2 ) { console.log(numero2 + ' es mayor que ' +  numero1 );}
 //En est parte, para seguir la consigna inverti las variables en console.log para que quede siempre el mayor primero
 else if( numero1 == numero2 ) { console.log(' Ambos numeros son iguales ');}
 else if( (numero1 && numero2) != Number ) {console.log ( 'por favor, solo ingrese numeros' )};
//use el && para que, al ingresar un dato que no sea un numero, ya sea en la varible uno o dos, se especifique que solo se trabaja con numeros.


