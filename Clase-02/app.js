// Pedir notas del examen
let nota1 = prompt("📗 Ingresar nota del primer examen");
let nota2 = prompt("📘 Ingresar nota del segundo examen");
let nota3 = prompt("📙 Ingresar nota del tercer examen");
let total = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
let promedio = total / 3;

// Sacar promedio de notas
if ( promedio >= 8) {
    alert("¡Felicitaciones! Aprobaste la materia con un promedio de " + promedio);
} else if (promedio >=6){
    alert("¡Felicitaciones! Aprobaste la cursada, ya podes rendir el examen final. Recordá que tu promedio fue de " + promedio);
} else {
    alert("A seguir estudiando. Tu promedio fue " + promedio + ". Se necesita 7 o más para aprobar la cursada.");
}