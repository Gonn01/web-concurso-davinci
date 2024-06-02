let itemsCarrito = [
  {
    title: "Berserk1",
    img1: "imgs/manga1.png",
    precio: 8000,
    cantidad: 1,
  },
  {
    title: "Berserk2",
    img1: "imgs/manga2.png",
    precio: 8000,
    cantidad: 1,
  },
  {
    title: "Berserk3",
    img1: "imgs/manga3.png",
    precio: 8000,
    cantidad: 1,
  },
];

let categorias = [
  {
    title: "Manga",
    description: "Todos los títulos que necesitas",
    img1: "imgs/manga1.png",
    img2: "imgs/manga2.png",
    img3: "imgs/manga3.png",
  },
  {
    title: "Novelas juveniles",
    description: "Todos los títulos de novela para adolescentes",
    img1: "imgs/novelas_juveniles1.png",
    img2: "imgs/novelas_juveniles2.png",
    img3: "imgs/novelas_juveniles3.png",
  },
  {
    title: "Bienestar personal",
    description: "Todos los títulos para bienestar personal",
    img1: "imgs/bienestar_personal1.png",
    img2: "imgs/bienestar_personal2.png",
    img3: "imgs/bienestar_personal3.png",
  },
];
let categoriasLibros = {
  manga: [
    {
      title: "Berserk",
      img1: "imgs/manga1.png",
      precio: 8000,
    },
    {
      title: "Vinland Saga",
      img1: "imgs/manga2.png",
      precio: 9000,
    },
    {
      title: "Vagabond",
      img1: "imgs/manga3.png",
      precio: 8500,
    },
  ],
  novelasJuveniles: [
    {
      title: "La mentira perfecta",
      img1: "imgs/novelas_juveniles1.png",
      categoria: "Novelas Juveniles",
      precio: 6000,
    },
    {
      title: "Promesas crueles",
      img1: "imgs/novelas_juveniles2.png",
      categoria: "Novelas Juveniles",
      precio: 5000,
    },
    {
      title: "Destrozando este diario",
      img1: "imgs/novelas_juveniles3.png",
      categoria: "Novelas Juveniles",
      precio: 3500,
    },
  ],
  bienestarPersonal: [
    {
      title: "Hábitos para el éxito",
      img1: "imgs/bienestar_personal1.png",
      categoria: "Bienesrar personal",
      precio: 4000,
    },
    {
      title: "La riqueza que el dinero no puede comprar",
      img1: "imgs/bienestar_personal2.png",
      categoria: "Bienesrar personal",
      precio: 5500,
    },
    {
      title: "Desbloquea el proximo nivel",
      img1: "imgs/bienestar_personal3.png",
      categoria: "Bienestar personal",
      precio: 6500,
    },
  ],
};

window.onload = function () {
  localStorage.removeItem("cartItems");
  // Inicializa el carrito
  initilizeCart();
  // Genera los items del carrito
  //! Al cambiar esto de lugar funciona la pag de libros o la del carrito no se xq
  generateProductCards(categoriasLibros);
  agregarItemsCarrito(itemsCarrito);
  renderCategories();
};

function agregarItemsCarrito(listaProductos) {
  const listaCarrito = document.getElementById("lista-items-carrito");

  const itemsHTML = listaProductos
    .map((producto) => {
      return `
      <div class="items-carrito">
        <img class="img-item-carrito" src="${producto.img1}" alt="" />
        <div>${producto.nombre}, editorial: ${producto.editorial}</div>
        <div class="cantidad-item-container">
          <div class="cantidad-item">-</div>
          <div class="cantidad-item">${producto.cantidad}</div>
          <div class="cantidad-item">+</div>
        </div>
        <div class="precio-item">${producto.precio}</div>
        <img class="tacho" src="imgs/tacho.png" alt="" />
      </div>
    `;
    })
    .join("");
  console.log(itemsHTML);
  listaCarrito.innerHTML = itemsHTML;
}
function initilizeCart() {
  const initialCart = JSON.stringify(itemsCarrito);
  localStorage.setItem("cartItems", initialCart);

  const carrito = document.getElementById("carrito-valor");
  const storedItems = localStorage.getItem("cartItems");

  let totalQuantity = 0;
  if (storedItems) {
    const parsedItems = JSON.parse(storedItems);
    totalQuantity = parsedItems.reduce((sum, item) => sum + item.cantidad, 0);
  }

  let itemEnCarrito = totalQuantity;
  carrito.textContent = itemEnCarrito;
}
function sumarCarrito(item) {
  const parsedItem = JSON.parse(item); // Parse the JSON string

  // Check if item already exists in the cart
  const existingItem = itemsCarrito.find(
    (cartItem) => cartItem.title === parsedItem.title
  );

  if (existingItem) {
    // Item already exists, increase quantity
    existingItem.cantidad++;
  } else {
    // New item, add it with quantity 1
    parsedItem.cantidad = 1; // Add the "cantidad" property with value 1
    itemsCarrito.push(parsedItem);
  }
  console.log(itemsCarrito);
  // Update local storage with the modified cart
  const initialCart = JSON.stringify(itemsCarrito);
  localStorage.setItem("cartItems", initialCart);

  // Update total quantity and cart value display
  const totalQuantity = itemsCarrito.reduce(
    (sum, item) => sum + item.cantidad,
    0
  );
  const carrito = document.getElementById("carrito-valor");
  carrito.textContent = totalQuantity;
}

function generateProductCards(categoriasLibros) {
  const listContainer = document.querySelector(".list-categoria-container");

  // Iterate over each category in categoriasLibros
  Object.entries(categoriasLibros).forEach(([categoria, librosEnCategoria]) => {
    // Create category container element
    const categoriaContainer = document.createElement("div");
    categoriaContainer.classList.add("categoria-container");

    // Add category title
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = categoria;
    categoriaContainer.appendChild(categoryTitle);

    // Add result count
    const categoriaResultados = document.createElement("p");
    categoriaResultados.classList.add("categoria-resultados");
    categoriaResultados.textContent = librosEnCategoria.length + " resultados";
    categoriaContainer.appendChild(categoriaResultados);

    // Create category wrapper div
    const categoriaWrapper = document.createElement("div");
    categoriaWrapper.classList.add("categoria-wrapper"); // Add a class for styling

    // Generate card elements
    librosEnCategoria.forEach((libro) => {
      // Create card element
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";

      // Create image element
      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.src = libro.img1;
      image.alt = libro.title;
      card.appendChild(image);

      // Create card body element
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Create card title element
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = libro.title;
      cardBody.appendChild(cardTitle);

      // Create card price element
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = libro.precio;
      cardBody.appendChild(cardText);

      // Create buy button element
      const buyButton = document.createElement("button");
      buyButton.classList.add("btn", "btn-primary");
      buyButton.textContent = "Comprar";
      buyButton.onclick = () => sumarCarrito(JSON.stringify(libro));
      cardBody.appendChild(buyButton);

      // Append card body to card
      card.appendChild(cardBody);

      // Append card to categoriaWrapper
      categoriaWrapper.appendChild(card);
    });

    // Append categoriaWrapper to category container
    categoriaContainer.appendChild(categoriaWrapper);

    // Append category container to the list container
    listContainer.appendChild(categoriaContainer);
  });
}
