/*Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe 
mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si
 son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número 
 inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son 
 inválidos.*/

const prompt = require("prompt-sync")({ sigint: true });
let numeroIngresado = parseInt(prompt(' Por favor, ingrese un numero: '))
let numeroIngresadoDos = parseInt(prompt(' Por favor, ingrese otro numero: '))

if(numeroIngresadoDos <= numeroIngresado){
    console.log('No valido')}
else{ 
    console.log('Los numeros pares entre el primer numero y segundo numero son' );
    for( let numerosPar = numeroIngresado; numerosPar <= numeroIngresadoDos ; numerosPar ++) {
        if(numerosPar % 2 === 0  ){
            console.log( numerosPar);
            }
        }
    } 


