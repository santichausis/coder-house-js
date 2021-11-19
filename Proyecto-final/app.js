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
    let div = document.createElement('div');
    div.classList.add('cardBook');
    let cardImage = document.createElement('img');
    cardImage.src = `./assets/images/portadas/${portada}`;
    cardImage.alt = `${nombre}`;
    let cardTitle = document.createElement('h2');
    cardTitle.textContent = `${nombre}`;
    let cardAuthor = document.createElement('h3');
    cardAuthor.textContent = `${autor}`;
    let cardPrice = document.createElement('p');
    cardPrice.textContent = `$${applyDesc(precio)}`;
    let addButton = document.createElement('button');
    addButton.setAttribute('id', 'addBook');
    addButton.textContent = `Lo quiero`;

    document.getElementById('cards').appendChild(div);
    div.appendChild(cardImage);
    div.appendChild(cardTitle);
    div.appendChild(cardAuthor);
    div.appendChild(cardPrice);
    div.appendChild(addButton);
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

  // Validar precio y aplicar descuento
  function applyDesc(precio) {
    if (precio > 2000) {
      return precio * 0.8;
    } else if (precio > 1500) {
      return precio * 0.85;
    } else if (precio > 1000) {
      return precio * 0.9;
    }
  }

  let addBook = document.getElementById('addBook');
  addBook.onclick = function () {
    alert('Comprado!');
  };

  addBook.map(console.log('gato'))
};

renderBooks();