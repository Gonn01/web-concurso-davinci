const carritoKey = "itemsCarrito";
/// Items del carrito
let itemsCarrito = [];

// Categorias destacadas que se muestran en la pagina principal
let categoriasDestacadas = [
  {
    id: 0,
    title: "Manga",
    description: "Todos los títulos que necesitas",
    imgs: ["imgs/manga1.png", "imgs/manga2.png", "imgs/manga3.png"],
    color: "#FEDBC0",
  },
  {
    id: 1,
    title: "Novelas juveniles",
    description: "Todos los títulos de novela para adolescentes",
    imgs: [
      "imgs/novelas_juveniles1.png",
      "imgs/novelas_juveniles2.png",
      "imgs/novelas_juveniles3.png",
    ],
    color: "#F6B784",
  },
  {
    id: 2,
    title: "Bienestar personal",
    description: "Todos los títulos para bienestar personal",
    imgs: [
      "imgs/bienestar_personal1.png",
      "imgs/bienestar_personal2.png",
      "imgs/bienestar_personal3.png",
    ],
    color: "#E89547",
  },
];

// Inventario de libros que se muestran en la tienda
let inventarioLibros = [
  {
    id: 0,
    title: "Manga",
    libros: [
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
  },
  {
    id: 1,
    title: "Novelas Juveniles",
    libros: [
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
  },
  {
    id: 2,
    title: "Bienestar Personal",
    libros: [
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
  },
];

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
  // Parseo a json la lista de productos agregados al carrito
  let lista = JSON.parse(listaProductos);

  // Obtengo el elemento donde se van a agregar los items del carrito
  let listaCarrito = document.getElementById("lista-items-carrito");

  // Eliminar elementos previos del carrito
  while (listaCarrito.firstChild) {
    listaCarrito.removeChild(listaCarrito.firstChild);
  }

  lista.forEach((producto) => {
    // Creo el contenedor del item del carrito
    let divItemCarrito = document.createElement("div");
    divItemCarrito.classList.add("items-carrito");

    // Creo la imagen del item del carrito
    let imgItemCarrito = document.createElement("img");
    imgItemCarrito.classList.add("img-item-carrito");
    imgItemCarrito.src = producto.img1;
    imgItemCarrito.alt = "";

    // Creo el nombre del producto
    let nombreProducto = document.createElement("div");
    nombreProducto.textContent = `${producto.title}`;

    // Creo el contenedor de la cantidad del producto
    let divCantidadContainer = document.createElement("div");
    divCantidadContainer.classList.add("cantidad-item-container");

    // Dentro del contenedor de la cantidad, creo el boton de restar la cantidad con su funcion
    let divCantidadMenos = document.createElement("div");
    divCantidadMenos.classList.add("cantidad-item");
    divCantidadMenos.textContent = "-";
    divCantidadMenos.onclick = () =>
      modificarProductoCarrito(JSON.stringify(producto), true);

    // Creo el div que contiene la cantidad
    let divCantidad = document.createElement("div");
    divCantidad.classList.add("cantidad-item");
    divCantidad.textContent = producto.cantidad;

    // Dentro del contenedor de la cantidad, creo el boton de sumar la cantidad con su funcion
    let divCantidadMas = document.createElement("div");
    divCantidadMas.classList.add("cantidad-item");
    divCantidadMas.textContent = "+";
    divCantidadMas.onclick = () =>
      modificarProductoCarrito(JSON.stringify(producto), false);

    // Creo el precio del producto
    let precioProducto = document.createElement("div");
    precioProducto.classList.add("precio-item");
    precioProducto.textContent = formatearPrecio(
      producto.precio * producto.cantidad
    );

    // Creo el icono de tacho para eliminar el producto del carrito
    let imgTacho = document.createElement("img");
    imgTacho.classList.add("tacho");
    imgTacho.src = "imgs/tacho.png";
    imgTacho.alt = "";
    imgTacho.onclick = () => deleteFromCarrito(JSON.stringify(producto));

    // Agregar elementos al contenedor de la cantidad
    divCantidadContainer.appendChild(divCantidadMenos);
    divCantidadContainer.appendChild(divCantidad);
    divCantidadContainer.appendChild(divCantidadMas);

    // Agregar elementos al contenedor del item del carrito
    divItemCarrito.appendChild(imgItemCarrito);
    divItemCarrito.appendChild(nombreProducto);
    divItemCarrito.appendChild(divCantidadContainer);
    divItemCarrito.appendChild(precioProducto);
    divItemCarrito.appendChild(imgTacho);

    // Agregar el item del carrito a la lista de items del carrito
    listaCarrito.appendChild(divItemCarrito);
  });
}

//! Esto va a cambiar cuando agregue nombres a las categorias
function generarInventarioEnLaTienda(categoriasLibros) {
  // Obtengo el contenedor donde se van a agregar los items del inventario
  const listContainer = document.querySelector(".list-categoria-container");

  // Por cada categoria, genero los items en la tienda
  categoriasLibros.forEach((categoria) => {
    const librosEnCategoria = categoria["libros"];
    // Creo el contenedor de la categoria
    const categoriaContainer = document.createElement("div");
    categoriaContainer.classList.add("categoria-container");

    // Creo el titulo de la categoria, le agrego el contenido y lo agrego al contenedor de la categoria
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = categoria["title"];
    categoriaContainer.appendChild(categoryTitle);

    // Creo el contador de resultados, le agrego las claes y el contenido y lo agrego al contenedor de la categoria
    const categoriaResultados = document.createElement("p");
    categoriaResultados.classList.add("categoria-resultados");
    categoriaResultados.textContent = librosEnCategoria.length + " resultados";
    categoriaContainer.appendChild(categoriaResultados);

    // Creo un contenedor para los items de la categoria para poder darle estilo
    const categoriaWrapper = document.createElement("div");
    categoriaWrapper.classList.add("categoria-wrapper");

    // Por cada libro en la categoria, genero un item en la tienda
    librosEnCategoria.forEach((libro) => {
      // Creo el contenedor del item
      const card = document.createElement("div");
      card.classList.add("card");

      // Creo la imagen del item y le agrego las clases y el contenido y lo agrego a la card
      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.src = libro.img1;
      image.alt = libro.title;
      card.appendChild(image);

      // Creo el contenedor del cuerpo de la card y le agrego las clases
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Creo el titulo del item y le agrego las clases y el contenido y lo agrego al cuerpo de la card
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = libro.title;
      cardBody.appendChild(cardTitle);

      // Creo el precio del item y le agrego las clases y el contenido y lo agrego al cuerpo de la card
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = formatearPrecio(libro.precio);
      cardBody.appendChild(cardText);

      // Creo el boton de comprar y le agrego las clases y el contenido y lo agrego al cuerpo de la card
      const buyButton = document.createElement("button");
      buyButton.classList.add("btn", "btn-primary");
      buyButton.textContent = "Comprar";
      buyButton.onclick = () => sumarCarrito(JSON.stringify(libro));
      cardBody.appendChild(buyButton);

      // Agrego el cuerpo de la card a la card
      card.appendChild(cardBody);

      // Agrego la card al contenedor de la categoria
      categoriaWrapper.appendChild(card);
    });

    // Agrego el contenedor de los libros al contenedor de la lista
    categoriaContainer.appendChild(categoriaWrapper);

    // Agrego la categoria completa al contenedor de la lista
    listContainer.appendChild(categoriaContainer);
  });
}
function formatearPrecio(precio) {
  // Convertir el precio a número
  const numero = parseFloat(precio);

  // Validar si el precio es un número
  if (isNaN(numero)) {
    return "Precio inválido";
  }

  // Formatear el precio con separadores de miles y decimales
  const opcionesFormato = {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

  const formateador = new Intl.NumberFormat("es-AR", opcionesFormato);
  const precioFormateado = formateador.format(numero);

  return precioFormateado;
}
function generarCategoriasDestacadas() {
  const secciones = document.getElementById("secciones");
  for (let index = 0; index < categoriasDestacadas.length; index++) {
    const categoria = categoriasDestacadas[index];
    // Creo el container de cada categoria y le agrego las clases
    const container = document.createElement("div");
    container.classList.add("container-fluid", "mx-auto", "p-0");

    // Creo la row de cada categoria y le agrego las clases
    const row = document.createElement("div");
    row.classList.add(
      "row",
      "categoria-destacada",
      "categoria-responsive",
      categoria.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
    );
    row.style.backgroundColor = categoria.color;

    // Creo la columna del titulo, descripcion y boton de cada categoria
    const datos = document.createElement("div");
    datos.classList.add("col", "my-auto", "col-responsive");

    // Creo un wrapper que contiene el titulo, descripcion y boton
    const datosWrapper = document.createElement("div");
    datosWrapper.classList.add("categoria-description");

    // Creo el titulo de la categoria y le agrego las clases y el contenido
    // y lo agrego al wrapper
    const title = document.createElement("h2");
    title.classList.add("categoria-destacada-title");
    title.textContent = categoria.title;
    datosWrapper.appendChild(title);

    // Creo la descripcion de la categoria y le agrego las clases y el contenido
    // y lo agrego al wrapper
    const description = document.createElement("p");
    description.classList.add("categoria-destacada-description");
    description.textContent = categoria.description;
    datosWrapper.appendChild(description);

    // Creo el boton de la categoria y le agrego las clases y el contenido
    // y lo agrego al wrapper
    const boton = document.createElement("div");
    boton.classList.add("boton-outlined");
    boton.textContent = "Ver más";
    datosWrapper.appendChild(boton);

    // Agrego el wrapper al contenedor de datos
    datos.appendChild(datosWrapper);

    // Agrego la columna de datos a la row
    row.appendChild(datos);

    // Por cada imagen de la categoria, creo una columna y una imagen
    // y la agrego a la row
    categoria.imgs.forEach((element) => {
      // Creo la columna de la imagen
      const col = document.createElement("div");
      col.classList.add("col", "col-responsive");

      // Creo la imagen
      const img = document.createElement("img");
      img.src = element;
      img.alt = element;
      img.classList.add("categoria-destacada-item");

      // Agrego la imagen a la columna
      col.appendChild(img);

      // Agrego la columna a la row
      row.appendChild(col);
    });
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "1920");
    svg.setAttribute("height", "99");
    svg.setAttribute("viewBox", "0 0 1920 99");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute("version", "1.1");

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", 1920);
    rect.setAttribute("height", 99);

    rect.setAttribute(
      "fill",
      index == 0 ? "#ffffff" : categoriasDestacadas[index - 1].color
    );

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M0 32L21.4 35.5C42.6 39 85.4 46 128 46.8C170.6 47.7 213.4 42.3 256 40C298.6 37.7 341.4 38.3 384 41.2C426.6 44 469.4 49 512 45.7C554.6 42.3 597.4 30.7 640 26.7C682.6 22.7 725.4 26.3 768 32.3C810.6 38.3 853.4 46.7 896 49.2C938.6 51.7 981.4 48.3 1024 41.8C1066.6 35.3 1109.4 25.7 1152 25.3C1194.6 25 1237.4 34 1280 37.3C1322.6 40.7 1365.4 38.3 1408 33.2C1450.6 28 1493.4 20 1536 18.7C1578.6 17.3 1621.4 22.7 1664 23.5C1706.6 24.3 1749.4 20.7 1792 16C1834.6 11.3 1877.4 5.69999 1898.6 2.79999L1920 0V99H1898.6C1877.4 99 1834.6 99 1792 99C1749.4 99 1706.6 99 1664 99C1621.4 99 1578.6 99 1536 99C1493.4 99 1450.6 99 1408 99C1365.4 99 1322.6 99 1280 99C1237.4 99 1194.6 99 1152 99C1109.4 99 1066.6 99 1024 99C981.4 99 938.6 99 896 99C853.4 99 810.6 99 768 99C725.4 99 682.6 99 640 99C597.4 99 554.6 99 512 99C469.4 99 426.6 99 384 99C341.4 99 298.6 99 256 99C213.4 99 170.6 99 128 99C85.4 99 42.6 99 21.4 99H0V32Z"
    );
    path.setAttribute("fill", categoria.color);
    svg.appendChild(rect);
    svg.appendChild(path);

    container.appendChild(svg);
    // Agrego la row al container
    container.appendChild(row);
    if (index == categoriasDestacadas.length - 1) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "1920");
      svg.setAttribute("height", "99");
      svg.setAttribute("viewBox", "0 0 1920 99");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      svg.setAttribute("version", "1.1");

      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect.setAttribute("x", 0);
      rect.setAttribute("y", 0);
      rect.setAttribute("width", 1920);
      rect.setAttribute("height", 99);

      rect.setAttribute("fill", "#ffffff");

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M0 32L21.4 35.5C42.6 39 85.4 46 128 46.8C170.6 47.7 213.4 42.3 256 40C298.6 37.7 341.4 38.3 384 41.2C426.6 44 469.4 49 512 45.7C554.6 42.3 597.4 30.7 640 26.7C682.6 22.7 725.4 26.3 768 32.3C810.6 38.3 853.4 46.7 896 49.2C938.6 51.7 981.4 48.3 1024 41.8C1066.6 35.3 1109.4 25.7 1152 25.3C1194.6 25 1237.4 34 1280 37.3C1322.6 40.7 1365.4 38.3 1408 33.2C1450.6 28 1493.4 20 1536 18.7C1578.6 17.3 1621.4 22.7 1664 23.5C1706.6 24.3 1749.4 20.7 1792 16C1834.6 11.3 1877.4 5.69999 1898.6 2.79999L1920 0V99H1898.6C1877.4 99 1834.6 99 1792 99C1749.4 99 1706.6 99 1664 99C1621.4 99 1578.6 99 1536 99C1493.4 99 1450.6 99 1408 99C1365.4 99 1322.6 99 1280 99C1237.4 99 1194.6 99 1152 99C1109.4 99 1066.6 99 1024 99C981.4 99 938.6 99 896 99C853.4 99 810.6 99 768 99C725.4 99 682.6 99 640 99C597.4 99 554.6 99 512 99C469.4 99 426.6 99 384 99C341.4 99 298.6 99 256 99C213.4 99 170.6 99 128 99C85.4 99 42.6 99 21.4 99H0V32Z"
      );
      path.setAttribute("fill", categoria.color);
      svg.appendChild(rect);
      svg.appendChild(path);
      svg.style.transform = "rotate(180deg)";
      container.appendChild(svg);
    }

    // Agrego el container a la seccion
    secciones.appendChild(container);
  }
}
