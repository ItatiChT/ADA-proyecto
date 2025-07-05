/*    • Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:

    1. Crear un array para almacenar las notas.
    2. Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
    3. Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
    4. Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
    5. Imprime en consola las notas ingresadas usando el array notas.*/
    

const prompt = require("prompt-sync")({ sigint: true });

let notas = []; 
let cantidadEstudiantes = 6; 

for (let i = 0; i < cantidadEstudiantes; i++) {
    let notaIngresada = parseInt(prompt('Ingrese la nota del estudiante ' + (i+1) + ': '));
    notas[i] = notaIngresada;
}

console.log('Las notas ingresadas son:');
console.log(notas);
