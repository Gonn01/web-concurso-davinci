const carritoKey = "itemsCarrito";
const usuariosKey = "usuarios";
/// Items del carrito
let itemsCarrito = [];

window.onload = function () {
  const header = document.querySelector("header");
  if (header) {
    // Inicializa el carrito
    initilizeCart();

    const elemento = document.getElementById('carrito-ref');

    elemento.addEventListener('click', function () {
      // Aquí va el código que quieres ejecutar al hacer clic
      window.location.href = './carrito.php'; // Redirige a otra página
    });

    const elemento2 = document.getElementById('perfil-ref');
    elemento2.addEventListener('click', function () {
      // Aquí va el código que quieres ejecutar al hacer clic
      window.location.href = './perfil.php'; // Redirige a otra página
    });
  }

  // Convertimos el array de objetos a un string JSON
  const usuariosJSON = JSON.stringify(usuariosRegistrados);

  // Guardamos el string JSON en el localStorage
  localStorage.setItem(usuariosKey, usuariosJSON);


  // Genera las categorias destacadas si el elemento existe
  let existeCarrito = document.getElementById("lista-items-carrito");
  if (existeCarrito) {
    let itemsCarrito = localStorage.getItem(carritoKey);
    generarItemsCarrito(itemsCarrito);

  }

};

function generarListaDeProductosInventario(listas) {
  const productos = document.createElement("div");
  productos.classList.add("productos");
  console.log(listas);
  listas.forEach((lista) => {
    // Creo el contenedor de la categoria
    const categoriaContainer = document.createElement("div");
    categoriaContainer.classList.add("producto");

    const rowContainer = document.createElement("div");
    categoriaContainer.classList.add("row");

    categoriaContainer.appendChild(rowContainer);

    console.log(lista);
    lista.forEach((categoria) => {
      let elementos = categoria.elementos;
      console.log(elementos);
      elementos.forEach((libro) => {
        // Crear elementos principales
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        // Crear elementos de la fila
        const col1 = document.createElement('div');
        col1.classList.add('col');
        const skuInput = document.createElement('input');
        skuInput.type = 'text';
        skuInput.classList.add('clean-input-a');
        skuInput.placeholder = 'SKU';
        skuInput.value = libro.sku;
        col1.appendChild(skuInput);

        const col2 = document.createElement('div');
        col2.classList.add('col');
        const nombreInput = document.createElement('input');
        nombreInput.type = 'text';
        nombreInput.classList.add('clean-input-a');
        nombreInput.placeholder = 'Nombre producto';
        nombreInput.value = libro.title;
        col2.appendChild(nombreInput);

        const col3 = document.createElement('div');
        col3.classList.add('col');
        const descripcionInput = document.createElement('input');
        descripcionInput.type = 'text';
        descripcionInput.classList.add('clean-input-a');
        descripcionInput.placeholder = 'Descripcion';
        col3.appendChild(descripcionInput);

        const col4 = document.createElement('div');
        col4.classList.add('col', 'text-center');
        const img = document.createElement('img');
        img.classList.add('img-inventario');
        img.src = libro.img1;
        img.alt = '';
        col4.appendChild(img);

        const col5 = document.createElement('div');
        col5.classList.add('col', 'text-center');
        const cantidadDiv = document.createElement('div');
        cantidadDiv.textContent = libro.cantidad;
        col5.appendChild(cantidadDiv);

        // Agregar columnas a la fila
        rowDiv.appendChild(col1);
        rowDiv.appendChild(col2);
        rowDiv.appendChild(col3);
        rowDiv.appendChild(col4);
        rowDiv.appendChild(col5);

        // Agregar fila al contenedor principal
        productoDiv.appendChild(rowDiv);
      });
    });
    productos.appendChild(categoriaContainer);
  },);
}

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
  generarItemsCarrito(nuevoCarrito);

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
  generarItemsCarrito(nuevoCarrito);
  // Actualizo el valor del carrito(header)
  initilizeCart();
}

function generarItemsCarrito(listaProductos) {
  // Parseo a json la lista de productos agregados al carrito
  let lista = JSON.parse(listaProductos);

  // Obtengo el elemento donde se van a agregar los items del carrito
  let listaCarrito = document.getElementById("lista-items-carrito");

  // Eliminar elementos previos del carrito
  while (listaCarrito.firstChild) {
    listaCarrito.removeChild(listaCarrito.firstChild);
  }

  const totalText = document.getElementById("total-text");
  const t = lista.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  totalText.textContent = `Total: ${formatearPrecio(t)}`;
  if (lista.length === 0) {
    const vacio = document.createElement("div");
    vacio.textContent = "El carrito está vacío";
    vacio.style.fontWeight = "bold";
    vacio.style.fontSize = "1.5rem";
    vacio.style.textAlign = "center";
    listaCarrito.appendChild(vacio);
  }
  lista.forEach((producto) => {
    // Creo el contenedor del item del carrito
    let divItemCarrito = document.createElement("div");
    divItemCarrito.classList.add("row", "py-3", "item-carrito", "rowa");

    // Creo la imagen del item del carrito
    const imgCol = document.createElement("div");
    imgCol.className = "col my-auto text-center col-carrito";

    let imgItemCarrito = document.createElement("img");
    imgItemCarrito.classList.add("img-item-carrito");
    imgItemCarrito.src = producto.img1;
    imgItemCarrito.alt = "";

    imgCol.appendChild(imgItemCarrito);

    // Creo el nombre del producto
    const nombreCol = document.createElement("div");
    nombreCol.classList.add("col", "my-auto", "text-center", "col-carrito");
    let nombreProducto = document.createElement("div");
    nombreProducto.textContent = `${producto.title}`;
    nombreProducto.style.fontWeight = "bold";
    nombreCol.appendChild(nombreProducto);

    // Creo el contenedor de la cantidad del producto
    const cantidadCol = document.createElement("div");
    cantidadCol.classList.add("col", "my-auto", "text-center", "col-carrito");

    let divCantidadContainer = document.createElement("div");
    divCantidadContainer.classList.add("cantidad-item-container");

    // Dentro del contenedor de la cantidad, creo el boton de restar la cantidad con su funcion
    let divCantidadMenos = document.createElement("div");
    divCantidadMenos.classList.add("menos", "cantidad-item", "fs-4", "fw-normal");
    divCantidadMenos.textContent = "-";
    divCantidadMenos.style.cursor = "pointer";
    divCantidadMenos.onclick = () =>
      modificarProductoCarrito(JSON.stringify(producto), true);

    // Creo el div que contiene la cantidad
    let divCantidad = document.createElement("div");
    divCantidad.classList.add("cantidad-item");
    divCantidad.textContent = producto.cantidad;

    // Dentro del contenedor de la cantidad, creo el boton de sumar la cantidad con su funcion
    let divCantidadMas = document.createElement("div");
    divCantidadMas.classList.add("mas", "cantidad-item", "fs-4", "fw-normal");
    divCantidadMas.textContent = "+";
    divCantidadMas.style.cursor = "pointer";
    divCantidadMas.onclick = () =>
      modificarProductoCarrito(JSON.stringify(producto), false);
    cantidadCol.appendChild(divCantidadContainer);
    // Creo el precio del producto
    const precioCol = document.createElement("div");
    precioCol.classList.add("col", "my-auto", "text-center", "col-carrito");
    let precioProducto = document.createElement("div");
    precioProducto.classList.add("precio-item");
    precioProducto.textContent = formatearPrecio(
      producto.precio * producto.cantidad
    );
    precioProducto.style.fontWeight = "bold";
    precioCol.appendChild(precioProducto);

    // Creo el icono de tacho para eliminar el producto del carrito
    const tachoCol = document.createElement("div");
    tachoCol.classList.add("col", "my-auto", "text-center", "col-carrito");
    let imgTacho = document.createElement("div");
    imgTacho.classList.add("tacho", 'mx-auto');
    imgTacho.onclick = () => deleteFromCarrito(JSON.stringify(producto));
    tachoCol.appendChild(imgTacho);
    // Agregar elementos al contenedor de la cantidad
    divCantidadContainer.appendChild(divCantidadMenos);
    divCantidadContainer.appendChild(divCantidad);
    divCantidadContainer.appendChild(divCantidadMas);

    // Agregar elementos al contenedor del item del carrito
    divItemCarrito.appendChild(imgCol);
    divItemCarrito.appendChild(nombreCol);
    divItemCarrito.appendChild(cantidadCol);
    divItemCarrito.appendChild(precioCol);
    divItemCarrito.appendChild(tachoCol);

    // Agregar el item del carrito a la lista de items del carrito
    listaCarrito.appendChild(divItemCarrito);
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
