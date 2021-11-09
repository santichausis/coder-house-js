//  Calcular precio de la compra de plantas y tierra.
let plantas = Number(
  prompt('¿Cuántas plantas quiere? El valor de cada una es de $135')
);
let tierra = Number(
  prompt('¿Cuántas bolsas de tierra quiere? El valor de cada bolsa es de $150')
);
let envio = prompt(
  '¿Necesita que se lo envien a su domicilio? Si/No. El valor es $300'
);

// Calcular costo de las plantas
function precioPlantas(plantas) {
  totalPlantas = plantas * 135;
  document.getElementById(
    'plantas'
  ).innerHTML = `🌿 En plantas usted gastó un total de $${totalPlantas} <br>`;
}

// Calcular costo de la tierra
function precioTierra(tierra) {
  totalTierra = tierra * 150;
  document.getElementById(
    'tierra'
  ).innerHTML = `🪨 En tierra usted gastó un total de $${totalTierra} <br>`;
}

// Calcular envio
function calcularEnvio(envio) {
  if (envio.toLowerCase() == 'si') {
    totalEnvio = 300;
    document.getElementById(
      'envio'
    ).innerHTML = `🚛 El precio del envio es de $300 <br>`;
  } else {
    totalEnvio = 0;
    document.getElementById(
      'envio'
    ).innerHTML = `🚛 El precio del envio es de $0 <br>`;
  }
}

// Calcular gasto total
function gastoTotal(totalPlantas, totalTierra) {
  precioFinal = totalPlantas + totalTierra + totalEnvio;
  document.getElementById('total').innerHTML = `💰 En total usted gastó $${
    totalPlantas + totalTierra + totalEnvio
  } <br>`;
}

// Calcular descuento
function descuento(precioFinal) {
  if (precioFinal > 1000) {
    precioFinal = precioFinal * 0.9;
    document.getElementById(
      'totalDesc'
    ).innerHTML = `💸 En total con descuentos usted gastó $${precioFinal}`;
  } else {
    document.getElementById(
      'totalDesc'
    ).innerHTML = `😕 No aplican descuentos en este monto. Total a pagar $${precioFinal}`;
  }
}

// Llamar funciones
precioPlantas(plantas);
precioTierra(tierra);
calcularEnvio(envio);
gastoTotal(totalPlantas, totalTierra);
descuento(precioFinal);

//  Arrays
const suculentas = [
  { id: 01, entorno: 'interior', nombre: 'Sansevieria', precio: 120 },
  { id: 02, entorno: 'exterior', nombre: 'Cactus de Navidad', precio: 120 },
  { id: 03, entorno: 'exterior', nombre: 'Aloe vera', precio: 120 },
  { id: 04, entorno: 'exterior', nombre: 'Rosa del desierto', precio: 500 },
  { id: 05, entorno: 'interior', nombre: 'Echeveria', precio: 300 },
];

// Usar array
for (const plantas of suculentas) {
  console.log(plantas.id, plantas.nombre, plantas.precio);
}

const entorno = suculentas.filter((planta) => planta.entorno == 'exterior');
console.log(entorno);

// Class Suculenta

class Suculentas {
  constructor(id, entorno, nombre, precio) {
    this.id = id;
    this.entorno = entorno;
    this.nombre = nombre;
    this.precio = precio;
  }
  mostrarSuculentas() {
    console.log(Suculentas);
  }
}

// Agregar Suculentas
const Suculenta1 = new Suculentas(01, 'exterior', 'Sansevieria', 375);
const Suculenta2 = new Suculentas(02, 'interior', 'Echeveria', 525);
const Suculenta3 = new Suculentas(03, 'exterior', 'Aloe vera', 175);
