/*Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas.*/

const prompt = require("prompt-sync")({ sigint: true });
 /*pido al usuario que ingrese dos valores booleanos*/ 
let booleano1 = prompt( ' por favor, ingrese verdadero o falso: ');
let booleano2 = prompt( 'por favor, ingrese verdadero o falso: ');
/*tengo que tranrformar la entrada a un valor booleno, y ademas asegurarme de que funcione 
sin importar si se escribe con mayusculas o minusculas, por eso uso toLowerCast para transformar todo a minusculas*/
let condicion1 = booleano1.toLowerCase() === 'verdadero'
let condicion2 = booleano2.toLowerCase() === 'verdadero'
/* Ahora, con los datos ingresados y convertidos a booleaanos, pasamos a definir las combinaciones logicas*/
 console.log( 'Booleano 1, o condicion 1, AND booleano 2, o condicion 2: ', condicion1 && condicion2)
 console. log( 'Booleano 1, o condicion 1, OR booleano 2, o condicion 2: ', condicion1 || condicion2)
 console.log( 'NOT Booleano 1 o condicion 1:', !condicion1 ) 
 console.log( 'NOT Booleano 2, o condicion 2 : ', !condicion2)

