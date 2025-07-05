/*Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
parámetros: la base y la altura de un triángulo. La función debe devolver el 
área del triángulo. */

function calcularAreaTriangulo(base, altura) { 
    let area = ( base * altura ) / 2
    return 'Hola, el area del triangulo es ' + area;
}
console.log(calcularAreaTriangulo(19,40));
