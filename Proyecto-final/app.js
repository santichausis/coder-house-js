// Llamar al archivo json
async function getBooks() {
  let url = './assets/data.json';
  let res = await fetch(url);
  return await res.json();
}

// Función para gestionar el json
async function renderBooks() {
  let books = await getBooks();
  // Recorrer array
  for (const book of books) {
    let div = document.createElement('div');
    div.classList.add('cardBook');
    div.innerHTML = `<img class='cardImage' src='./assets/images/portadas/${book.portada}'/>
                    <h2 class='cardTitle'>${book.nombre}</h2>
                    <h3 class='cardAuthor'>${book.autor}</h3>
                    <p class='cardPublisher'>${book.editorial}</p>
                    <p class='cardPrice' id='cardPrice'>$${book.precio}</p>
                    <button class='addButton'>¡Lo quiero!</button>`;
    document.getElementById('cards').appendChild(div);
  }
  // Almacenar de forma local
  localStorage.setItem('books', JSON.stringify(books));
  // Console table para ver el archivo JSON
  console.table(books);
}
renderBooks();

//   // Validar precio y aplicar descuento
//   function aplicarDescuento() {
//     if (libro.precio > 2000) {
//       document
//         .getElementById('cardPrice')
//         .replaceWith(`¡20% OFF! $${libro.precio * 0.8}`);

//     } else if (libro.precio > 1500) {
//       document
//         .getElementById('cardPrice')
//         .replaceWith(`¡15% OFF! $${libro.precio * 0.85}`);
//     } else if (libro.precio > 1000) {
//       document
//         .getElementById('cardPrice')
//         .replaceWith(`¡10% OFF! $${libro.precio * 0.9}`);
//     }
//   }
//   aplicarDescuento();
// }

// // Ordenar array
// libros.sort(function (a, b) {
//   if (a.nombre > b.nombre) {
//     return 1;
//   } else {
//     return -1;
//   }
// });