/*    • Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego,
 solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 
 (Pueden desglosar en pasos el código si eso les facilita su desarrollo)*/

 let arrayDeNombres = []
 for (let i = 0; i < 5; i++) {
    const Nombres = prompt('Por fvor, ingrese un nombre: ').toLowerCase()
     arrayDeNombres[i] = Nombres;
    
 }
 
const nombreBuscado = prompt('Ingrese un nombre para buscar: ').toLowerCase();
if (arrayDeNombres.includes(nombreBuscado)) {
    console.log('El nombre se encuentra en la lista.');
} else {
    console.log('El nombre NO se encuentra en la lista.');
}