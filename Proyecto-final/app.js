let bookJson = './assets/data.json';
// Llamar al archivo json
const getBooks = async () => {
  const resp = await fetch(bookJson);
  const respData = await resp.json();
  return respData;
};

// Función para gestionar el json
const renderBooks = async () => {
  let books = await getBooks();

  // Recorrer array
  for (const book of books) {
    const { portada, nombre, autor, precio } = book;

    // Crear variables
    $('#cards').append(`
      <div class='cardBook'>
      <img class='cardImage' src='./assets/images/portadas/${portada}' alt='${nombre}'></img>
      <h2 class='cardTitle'>${nombre}</h2>
      <h3 class='cardAuthor'>${autor}</h3>
      <p class='cardPrice'>$${applyDesc(precio)}</p>
      <button class='addButton' id='addBook' onclick='buyBook()'>Lo quiero</button></div>
    `);
  }

  // Ordenar array por precio
  books.sort((a, b) => {
    if (a.precio > b.precio) {
      return 1;
    } else {
      return -1;
    }
  });

  // Almacenar de forma local
  localStorage.setItem('books', JSON.stringify(books));
};
renderBooks();

// Validar precio y aplicar descuento
applyDesc = (precio) => {
  if (precio > 2000) {
    return precio * 0.8;
  } else if (precio > 1500) {
    return precio * 0.85;
  } else if (precio > 1000) {
    return precio * 0.9;
  }
};

// Agregar al changuito
buyBook = () => {
  $('.addButton').click(function () {
    $(this).text('Comprado').attr('disabled', 'disabled').addClass('disabled');
  });
};
