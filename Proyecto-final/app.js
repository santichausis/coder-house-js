// Crear clase Libro con todos los atributos que va a tener
class Libro {
  constructor(id, nombre, autor, año, editorial, portada, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.autor = autor;
    this.año = año;
    this.editorial = editorial;
    this.portada = portada;
    this.precio = precio;
    this.stock = stock;
  }
}

// Crear array vacio de libros para luego almacenarlos y manipularlos
const libros = [];

libros.push(
  new Libro(
    01,
    'Todos somos villanos',
    'M.L.RIO',
    2017,
    'Penguin',
    'portada1.jpg',
    1500,
    25
  )
);
libros.push(
  new Libro(
    02,
    'Agujas doradas',
    'Michael McDowell',
    2021,
    'La bestia equilatera',
    'portada2.jpg',
    2185,
    95
  )
);
libros.push(
  new Libro(
    03,
    'A prueba de fuego',
    'Javier Moro',
    2020,
    'Espasa',
    'portada3.jpg',
    1800,
    55
  )
);
libros.push(
  new Libro(
    04,
    'Una educación',
    'Tara Westover',
    2018,
    'Lumen',
    'portada4.jpg',
    1900,
    15
  )
);
libros.push(
  new Libro(
    05,
    'La chica salvaje',
    'Delia Owens',
    2019,
    'Vintage Espanol',
    'portada5.jpg',
    1340,
    5
  )
);
libros.push(
  new Libro(
    06,
    'El instituto',
    'Stephen King',
    2019,
    'Plaza & Janés',
    'portada6.jpg',
    1760,
    20
  )
);

// Almacenar de forma local
localStorage.setItem('libros', JSON.stringify(libros));

// Recorrer el array y mostarlo en el DOM
for (const libro of libros) {
  let div = document.createElement('div');
  div.classList.add('cardLibro');
  div.innerHTML = `
                  <img class='cardImage' src='./assets/images/portadas/${libro.portada}'/>
                  <h2 class='cardTitle'>${libro.nombre}</h2>
                  <h3 class='cardAuthor'>${libro.autor}</h3>
                  <p class='cardPublisher'>${libro.editorial}</p>
                  <p class='cardPrice' id='cardPrice'>$${libro.precio}</p>
                  `;

  document.getElementById('arrayLibros').appendChild(div);

  // Validar precio y aplicar descuento 
  function aplicarDescuento() {
    if (libro.precio > 2000) {
      document
        .getElementById('cardPrice')
        .replaceWith(`¡20% OFF! $${libro.precio * 0.8}`);
    } else if (libro.precio > 1500) {
      document
        .getElementById('cardPrice')
        .replaceWith(`¡15% OFF! $${libro.precio * 0.85}`);
    } else if (libro.precio > 1000) {
      document
      .getElementById('cardPrice')
      .replaceWith(`¡10% OFF! $${libro.precio * 0.9}`);
    }
  }
  aplicarDescuento();
}

// Ordenar array
libros.sort(function (a, b) {
  if (a.nombre > b.nombre) {
    return 1;
  } else {
    return -1;
  }
});

console.table(libros)