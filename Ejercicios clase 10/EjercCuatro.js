const prompt = require("prompt-sync")({ sigint: true });

console.log('Bienvenido al centro de Especialistas en Enfermedades Fantasticas')
let texto = prompt( 'Por favor, indique su nombre:' );
let nada = prompt( 'Tiene usted imsomnio, falta de concentracion o perdida de memoria? (dejar la casilla vacia si no corresponde):' );
let verdadero = (prompt( 'Usted viajo a Macondo en los ultimos 6 meses? (si/no): ')) . toLowerCase();
let numeroDeDias = parseInt(prompt( 'Cuantos dias estuvo de visita? (utilice numeros): '));

let verdaderoDos = verdadero === 'si';
let aumentoPorDia = 5 
let calculo = numeroDeDias * aumentoPorDia
let calculoFinal = Math.min( calculo, 100)
 
if ( verdaderoDos){
     console.log( 'Estimada/o ' + texto + 'le informamos que la probabilidad de que padezca de la enfermedad del sueño es del' + calculoFinal + ' %' )}
else if (!verdaderoDos && nada === "") { 
    console.log( 'Estimada/o ' + texto + ' usted no tiene la enfermedad del sueño' )}
else { 
    console.log( 'Estimada/o ' + texto + ' usted no tiene la enfermedad del sueño, tome un te de tilo' )}
