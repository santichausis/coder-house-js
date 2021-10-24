// Ciclo For
// El usuario ingresa un número y luego se imprime en consola hasta llegar a 0

let numero = prompt('Ingresa un número para jugar 🎲');
for (numero; numero >= 0; numero--) {
  console.log('El número es: ' + numero);
}

// Ciclo While
// El usario ingresa la lista de frutas que quiere comprar

let frutas = prompt(
  'Ingresa las frutas que queres comprar 🍎 🍌. Para finalizar escribi FIN.'
);
while (frutas != 'FIN') {
  console.log('Comprar: ' + frutas);
  frutas= prompt(
    'Ingresa las frutas que queres comprar 🍓 🥝. Para finalizar escribi FIN.'
  );
}

// Ciclo Switch

let color = prompt("Ingresa tu club favorito de fútbol")
switch (color) {
  case 'Boca':
    alert("¡Sos hincha del mejor club del mundo!")
    break;
  case 'Riber':
    alert("Ese club dejó de existir en el 2011")
    break;
  case 'Racing':
    alert("Medio pelo")
    break;
  default:
    alert("No sé que quisiste ingresar")
}