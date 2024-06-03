const carritoKey = "itemsCarrito";
/// Items del carrito
let itemsCarrito = [];

// Categorias destacadas que se muestran en la pagina principal
let categoriasDestacadas = [
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

// Inventario de libros que se muestran en la tienda
let inventarioLibros = {
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
  // Inicializa el carrito
  initilizeCart();

  // Genera los items del carrito si el elemento existe
  let existeInventario = document.querySelector(".list-categoria-container");
  if (existeInventario) {
    generarInventarioEnLaTienda(inventarioLibros);
  }

  // Genera las categorias destacadas si el elemento existe
  let existeCategoriasDestacadas = document.getElementById("secciones");
  if (existeCategoriasDestacadas) {
    let itemsCarrito = localStorage.getItem(carritoKey);
    generarCategoriasDestacadas(itemsCarrito);
  }

  // Genera las categorias destacadas si el elemento existe
  let existeCarrito = document.getElementById("lista-items-carrito");
  if (existeCarrito) {
    let itemsCarrito = localStorage.getItem(carritoKey);
    agregarItemsCarrito(itemsCarrito);
  }
};

function initilizeCart() {
  // Obtengo el valor del texto con id carrito-valor
  const carrito = document.getElementById("carrito-valor");

  // Traigo los items del local storage
  const itemsCarrito = localStorage.getItem(carritoKey);

  // Defino una variable para guardar la cantidad total de items
  let valorCarrito = 0;

  // Si hay items guardados en el local storage
  if (itemsCarrito) {
    // Parseo los items guardados
    const parsedItems = JSON.parse(itemsCarrito);

    // Calculo la cantidad total de items
    valorCarrito = parsedItems.reduce((sum, item) => sum + item.cantidad, 0);
  }

  // Actualizo el texto con la cantidad total de items
  carrito.textContent = valorCarrito;
}
function sumarCarrito(itemStringifyed) {
  // Parseo el item a json
  const item = JSON.parse(itemStringifyed);
  // Traigo los items del local storage
  let itemsCarrito = JSON.parse(localStorage.getItem(carritoKey)) || [];

  // Me fijo si hay un item con el mismo titulo en el carrito
  //! (tendria que ser la id)
  const existeElItem = itemsCarrito.find(
    (cartItem) => cartItem.title === item.title
  );

  // Si lo hay, aumento la cantidad
  if (existeElItem) {
    existeElItem.cantidad++;
  } else {
    // Si no lo hay, agrego el item al carrito con cantidad 1
    item.cantidad = 1;
    itemsCarrito.push(item);
  }
  // Actualizo el local storage con los nuevos items del carrito
  const nuevoCarrito = JSON.stringify(itemsCarrito);
  localStorage.setItem(carritoKey, nuevoCarrito);

  // Actualizo el valor del carrito
  const cantidadTotal = itemsCarrito.reduce(
    (sum, item) => sum + item.cantidad,
    0
  );

  // Tomo el valor del carrito y lo actualizo
  const carrito = document.getElementById("carrito-valor");
  carrito.textContent = cantidadTotal;
}
function modificarProductoCarrito(itemStringifyed, restar) {
  // Parseo el item a json
  const item = JSON.parse(itemStringifyed);

  // Traigo los items del local storage
  let itemsCarrito = JSON.parse(localStorage.getItem(carritoKey)) || [];

  // Me fijo si hay un item con el mismo titulo en el carrito
  const existeElItem = itemsCarrito.find(
    (cartItem) => cartItem.title === item.title
  );

  // Si lo hay
  if (existeElItem) {
    // Si se quiere restar y la cantidad es 1, elimino el item
    if (restar) {
      existeElItem.cantidad--;
      if (existeElItem.cantidad === 0) {
        itemsCarrito = itemsCarrito.filter(
          (cartItem) => cartItem.title !== item.title
        );
      }
      // Si se quiere sumar, aumento la cantidad
    } else {
      existeElItem.cantidad++;
    }
  }

  // Actualizo el local storage con los nuevos items del carrito
  const nuevoCarrito = JSON.stringify(itemsCarrito);
  localStorage.setItem(carritoKey, nuevoCarrito);

  // Actualizo el valor del carrito
  agregarItemsCarrito(nuevoCarrito);

  // Actualizo el valor del carrito(header)
  initilizeCart();
}
function deleteFromCarrito(itemStringifyed) {
  // Parseo el item a json
  const item = JSON.parse(itemStringifyed);

  // Traigo los items del local storage
  let itemsCarritos = JSON.parse(localStorage.getItem(carritoKey)) || [];
  // Filtrar los elementos que no coincidan con el item a eliminar
  // Osea elimino el item del carrito
  itemsCarritos = itemsCarritos.filter(
    (cartItem) => cartItem.title !== item.title
  );

  // Actualizo el local storage con los nuevos items del carrito
  const nuevoCarrito = JSON.stringify(itemsCarritos);
  localStorage.setItem(carritoKey, nuevoCarrito);

  // Actualizo el valor del carrito
  agregarItemsCarrito(nuevoCarrito);
}

function agregarItemsCarrito(listaProductos) {
  let lista = JSON.parse(listaProductos);
  let listaCarrito = document.getElementById("lista-items-carrito");

  // Eliminar elementos previos del carrito
  while (listaCarrito.firstChild) {
    listaCarrito.removeChild(listaCarrito.firstChild);
  }

  lista.forEach((producto) => {
    // Crear elementos del producto
    let divItemCarrito = document.createElement("div");
    divItemCarrito.classList.add("items-carrito");

    let imgItemCarrito = document.createElement("img");
    imgItemCarrito.classList.add("img-item-carrito");
    imgItemCarrito.src = producto.img1;
    imgItemCarrito.alt = "";

    let nombreProducto = document.createElement("div");
    nombreProducto.textContent = `${producto.nombre}, editorial: ${producto.editorial}`;

    let divCantidadContainer = document.createElement("div");
    divCantidadContainer.classList.add("cantidad-item-container");

    let divCantidadMenos = document.createElement("div");
    divCantidadMenos.classList.add("cantidad-item");
    divCantidadMenos.textContent = "-";
    divCantidadMenos.onclick = () =>
      modificarProductoCarrito(JSON.stringify(producto), true);

    let divCantidad = document.createElement("div");
    divCantidad.classList.add("cantidad-item");
    divCantidad.textContent = producto.cantidad;

    let divCantidadMas = document.createElement("div");
    divCantidadMas.classList.add("cantidad-item");
    divCantidadMas.textContent = "+";
    divCantidadMas.onclick = () =>
      modificarProductoCarrito(JSON.stringify(producto), false);

    let precioProducto = document.createElement("div");
    precioProducto.classList.add("precio-item");
    precioProducto.textContent = producto.precio;

    let imgTacho = document.createElement("img");
    imgTacho.classList.add("tacho");
    imgTacho.src = "imgs/tacho.png";
    imgTacho.alt = "";
    imgTacho.onclick = () => deleteFromCarrito(JSON.stringify(producto));

    // Agregar elementos al contenedor del carrito
    divCantidadContainer.appendChild(divCantidadMenos);
    divCantidadContainer.appendChild(divCantidad);
    divCantidadContainer.appendChild(divCantidadMas);

    divItemCarrito.appendChild(imgItemCarrito);
    divItemCarrito.appendChild(nombreProducto);
    divItemCarrito.appendChild(divCantidadContainer);
    divItemCarrito.appendChild(precioProducto);
    divItemCarrito.appendChild(imgTacho);

    listaCarrito.appendChild(divItemCarrito);
  });
}

function generarCategoriasDestacadas() {
  const secciones = document.getElementById("secciones");
  categoriasDestacadas.forEach((categoria, index) => {
    const seccion = document.createElement("section");
    const titulo = document.createElement("h2");
    const descripcion = document.createElement("p");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    seccion.classList.add(
      index % 2 === 0 ? "categoria-destacada" : "categoria-destacada-reverse"
    );

    titulo.classList.add("categoria-destacada-title");
    titulo.textContent = categoria.title;

    descripcion.classList.add("categoria-destacada-description");
    descripcion.textContent = categoria.description;

    const boton = document.createElement("div");
    boton.classList.add("boton-outlined");
    boton.textContent = "Ver más";

    img1.classList.add("categoria-destacada-item");
    img1.src = categoria.img1;
    img2.classList.add("categoria-destacada-item");
    img2.src = categoria.img2;
    img3.classList.add("categoria-destacada-item");
    img3.src = categoria.img3;

    const categoriaDescription = document.createElement("div");
    categoriaDescription.classList.add("categoria-description");
    categoriaDescription.appendChild(titulo);
    categoriaDescription.appendChild(descripcion);
    categoriaDescription.appendChild(boton);

    seccion.appendChild(categoriaDescription);
    seccion.appendChild(img1);
    seccion.appendChild(img2);
    seccion.appendChild(img3);
    secciones.appendChild(seccion);
  });
}

function generarInventarioEnLaTienda(categoriasLibros) {
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
