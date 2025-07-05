/* Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a pedirla 
hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".*/
const prompt = require("prompt-sync")({ sigint: true });
let contraseña;
do { 
    contraseña = parseFloat(prompt('Por favor ingrese la contraseña numerica: '))
    if ( contraseña !== 1234 ){
        console.log('incorrecto')};
}
while (contraseña !== 1234) { 
    console.log('contraseña correcta')
    
}
