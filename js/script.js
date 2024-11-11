const carritoKey = "itemsCarrito";
const usuariosKey = "usuarios";
/// Items del carrito
let itemsCarrito = [];

// Usuarios registrados en la pagina
let usuariosRegistrados = [
  {
    id: 0,
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@gmail.com",
    password: "1234",
  },
  {
    id: 1,
    nombre: "gon",
    apellido: "Perez",
    email: "gon@gmail.com",
    password: "1234",
  },
];


// Inventario de peliculas que se muestran en la tienda
let inventarioPeliculas = [
  {
    id: 0,
    title: "Infantiles",
    elementos: [
      {
        title: "Dvd - Isla De Perros",
        img1: "./imgs/infantiles1.webp",
        precio: 8000,
        sku: "SKU-0001",
        cantidad: 1,
      },
      {
        title: "Dvd - Power Rangers",
        img1: "./imgs/infantiles2.webp",
        precio: 9000,
        sku: "SKU-0002",
        cantidad: 1,
      },
      {
        title: "Dvd - Natacha",
        img1: "./imgs/infantiles3.webp",
        precio: 8500,
        sku: "SKU-0003",
        cantidad: 1,
      },
      {
        title: "Dvd - Pokemon 4 Ever",
        img1: "./imgs/infantiles4.webp",
        precio: 8000,
        sku: "SKU-0004",
        cantidad: 1,
      },
      {
        title: "Blu-ray - Turbo (3d)",
        img1: "./imgs/infantiles5.webp",
        precio: 9000,
        sku: "SKU-0005",
        cantidad: 1,
      },
      {
        title: "Dvd - El Castillo De Cagliostro",
        img1: "./imgs/infantiles6.webp",
        precio: 8500,
        sku: "SKU-0006",
        cantidad: 1,
      },
      {
        title: "Dvd - Doctor Strange - El Hechicero Maximo",
        img1: "./imgs/infantiles7.webp",
        precio: 8000,
        sku: "SKU-0007",
        cantidad: 1,
      },
      {
        title: "Dvd - Barbie Y La Puerta Secreta",
        img1: "./imgs/infantiles8.webp",
        precio: 9000,
        sku: "SKU-0008",
        cantidad: 1,
      },
      {
        title: "Blu-ray - Lego Ninjago: La Pelicula",
        img1: "./imgs/infantiles9.webp",
        precio: 8500,
        sku: "SKU-0009",
        cantidad: 1,
      },
      {
        title: "Dvd - Ositos Cariñosos",
        img1: "./imgs/infantiles10.webp",
        precio: 8500,
        sku: "SKU-0010",
        cantidad: 1,

      },
      {
        title: "Dvd - Barbie En Un Mundo De Video Juegos",
        img1: "./imgs/infantiles11.webp",
        precio: 8000,
        sku: "SKU-0011",
        cantidad: 1,
      },
      {
        title: "Dvd - Colorin Colorado",
        img1: "./imgs/infantiles12.webp",
        precio: 8000,
        sku: "SKU-0012",
        cantidad: 1,
      },
    ],
  },
  {
    id: 1,
    title: "Comedia",
    elementos: [
      {
        title: "Dvd - Zoolander 2",
        img1: "./imgs/comedia1.webp",
        precio: 6000,
        sku: "SKU-0013",
        cantidad: 1,
      },
      {
        title: "Dvd - Zapada",
        img1: "./imgs/comedia2.webp",
        precio: 5000,
        sku: "SKU-0014",
        cantidad: 1,
      },
      {
        title: "Dvd - 50 Primaveras",
        img1: "./imgs/comedia3.webp",
        precio: 3500,
        sku: "SKU-0015",
        cantidad: 1,
      },
      {
        title: "Dvd - Beata Ignorancia",
        img1: "./imgs/comedia4.webp",
        precio: 3500,
        sku: "SKU-0016",
        cantidad: 1,
      },
      {
        title: "Dvd - Mujer Y Marido",
        img1: "./imgs/comedia5.webp",
        precio: 3500,
        sku: "SKU-0017",
        cantidad: 1,
      },
      {
        title: "Dvd - Boca De Fresa",
        img1: "./imgs/comedia6.webp",
        precio: 3500,
        sku: "SKU-0018",
        cantidad: 1,
      },
      {
        title: "Dvd - El Futbol O Yo",
        img1: "./imgs/comedia7.webp",
        precio: 3500,
        sku: "SKU-0019",
        cantidad: 1,
      },
      {
        title: "Dvd - Dictablanda",
        img1: "./imgs/comedia8.webp",
        precio: 3500,
        sku: "SKU-0020",
        cantidad: 1,
      },
      {
        title: "Dvd - Por Que El?",
        img1: "./imgs/comedia9.webp",
        precio: 3500,
        sku: "SKU-0021",
        cantidad: 1,
      },
      {
        title: "Dvd - Hablemos De Amor",
        img1: "./imgs/comedia10.webp",
        precio: 3500,
        sku: "SKU-0022",
        cantidad: 1,
      },
      {
        title: "Dvd - Permitidos",
        img1: "./imgs/comedia10.webp",
        precio: 3500,
        sku: "SKU-0023",
        cantidad: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Terror",
    elementos: [
      {
        title: "Dvd - 05:00 A.m.",
        img1: "./imgs/terror1.webp",
        precio: 4000,
        sku: "SKU-0024",
        cantidad: 1,
      },
      {
        title: "Dvd - Aplicacion Siniestra",
        img1: "./imgs/terror2.webp",
        precio: 5500,
        sku: "SKU-0025",
        cantidad: 1,
      },
      {
        title: "Dvd - Buscando Al Demonio",
        img1: "./imgs/terror3.webp",
        precio: 6500,
        sku: "SKU-0026",
        cantidad: 1,
      },
      {
        title: "Dvd - 12 Horas Para Sobrevivir 4",
        img1: "./imgs/terror4.webp",
        precio: 6500,
        sku: "SKU-0027",
        cantidad: 1,
      },
      {
        title: "Dvd - Ataud Blanco",
        img1: "./imgs/terror5.webp",
        precio: 6500,
        sku: "SKU-0028",
        cantidad: 1,
      },
      {
        title: "Dvd - Fear The Walking Dead 3",
        img1: "./imgs/terror6.webp",
        precio: 6500,
        sku: "SKU-0029",
        cantidad: 1,
      },
      {
        title: "Dvd - Nadie Vive",
        img1: "./imgs/terror7.webp",
        precio: 6500,
        sku: "SKU-0030",
        cantidad: 1,
      },
      {
        title: "Dvd - La Resurreccion Del Mal",
        img1: "./imgs/terror8.webp",
        precio: 6500,
        sku: "SKU-0031",
        cantidad: 1,
      },
      {
        title: "Dvd - Verdad O Reto",
        img1: "./imgs/terror9.webp",
        precio: 6500,
        sku: "SKU-0032",
        cantidad: 1,
      },
      {
        title: "Dvd - Feliz Dia De Tu Muerte 2",
        img1: "./imgs/terror10.webp",
        precio: 6500,
        sku: "SKU-0033",
        cantidad: 1,
      },
    ],
  },
];
// Inventario de libros que se muestran en la tienda
let inventarioLibros = [
  {
    id: 0,
    title: "Manga",
    elementos: [
      {
        title: "Berserk",
        img1: "./imgs/manga1.png",
        precio: 8000,
        sku: "SKU-0034",
        cantidad: 1,
      },
      {
        title: "Vinland Saga",
        img1: "./imgs/manga2.png",
        precio: 9000,
        sku: "SKU-0035",
        cantidad: 1,
      },
      {
        title: "Vagabond",
        img1: "./imgs/manga3.png",
        precio: 8500,
        sku: "SKU-0036",
        cantidad: 1,
      },
      {
        title: "Blue lock 13",
        img1: "./imgs/blue_lock_1.webp",
        precio: 8000,
        sku: "SKU-0037",
        cantidad: 1,
      },
      {
        title: "Dragon ball",
        img1: "./imgs/dragon_ball.webp",
        precio: 9000,
        sku: "SKU-0038",
        cantidad: 1,
      },
      {
        title: "Tokyo Revengers 19",
        img1: "./imgs/tokyo_revengers_1.webp",
        precio: 8500,
        sku: "SKU-0039",
        cantidad: 1,
      },
      {
        title: "Tokyo Revengers 21",
        img1: "./imgs/tokyo_revengers_2.webp",
        precio: 8000,
        sku: "SKU-0040",
        cantidad: 1,
      },
      {
        title: "Tokyo Revengers 17",
        img1: "./imgs/tokyo_revengers_3.webp",
        precio: 9000,
        sku: "SKU-0041",
        cantidad: 1,
      },
      {
        title: "Tokyo Revengers 18",
        img1: "./imgs/tokyo_revengers_4.webp",
        precio: 8500,
        sku: "SKU-0042",
        cantidad: 1,
      },
      {
        title: "Tokyo Revengers 20",
        img1: "./imgs/tokyo_revengers_5.webp",
        precio: 8500,
        sku: "SKU-0043",
        cantidad: 1,
      },
      {
        title: "Blue lock 14",
        img1: "./imgs/blue_lock_2.webp",
        precio: 8000,
        sku: "SKU-0044",
        cantidad: 1,
      },
      {
        title: "Blue lock 15",
        img1: "./imgs/blue_lock_3.webp",
        precio: 8000,
        sku: "SKU-0045",
        cantidad: 1,
      },
      {
        title: "Blue lock 16",
        img1: "./imgs/blue_lock_4.webp",
        precio: 8000,
        sku: "SKU-0046",
        cantidad: 1,
      },
      {
        title: "Kaiju",
        img1: "./imgs/kaiju.webp",
        precio: 8000,
        sku: "SKU-0047",
        cantidad: 1,
      },
    ],
  },
  {
    id: 1,
    title: "Novelas Juveniles",
    elementos: [
      {
        title: "La mentira perfecta",
        img1: "./imgs/novelas_juveniles1.png",
        precio: 6000,
        sku: "SKU-0048",
        cantidad: 1,
      },
      {
        title: "Promesas crueles",
        img1: "./imgs/novelas_juveniles2.png",
        precio: 5000,
        sku: "SKU-0049",
        cantidad: 1,
      },
      {
        title: "Destrozando este diario",
        img1: "./imgs/novelas_juveniles3.png",
        precio: 3500,
        sku: "SKU-0050",
        cantidad: 1,
      },
      {
        title: "Tu Amigo Invisible 2 - Tai - Santiago L. Speranza",
        img1: "./imgs/novelas_juveniles4.webp",
        precio: 3500,
        sku: "SKU-0051",
        cantidad: 1,
      },
      {
        title: "Alas De Hierro - Saga Empireo 2 - Rebecca Yarros",
        img1: "./imgs/novelas_juveniles5.webp",
        precio: 3500,
        sku: "SKU-0052",
        cantidad: 1,
      },
      {
        title: "Heartless - Marissa Meyer",
        img1: "./imgs/novelas_juveniles6.webp",
        precio: 3500,
        sku: "SKU-0053",
        cantidad: 1,
      },
      {
        title: "Fabricante De Lagrimas - Erin Doom",
        img1: "./imgs/novelas_juveniles7.webp",
        precio: 3500,
        sku: "SKU-0054",
        cantidad: 1,
      },
      {
        title: "La Maldicion Del Amor Verdadero - Stephanie Garber",
        img1: "./imgs/novelas_juveniles8.webp",
        precio: 3500,
        sku: "SKU-0055",
        cantidad: 1,
      },
      {
        title: "El Hilo Invisible - Miriam Tirado - Full",
        img1: "./imgs/novelas_juveniles9.webp",
        precio: 3500,
        sku: "SKU-0056",
        cantidad: 1,
      },
      {
        title: "Coleccion Ana La De Las Tejas Verdes - Lucy Maud Montgomery",
        img1: "./imgs/novelas_juveniles10.webp",
        precio: 3500,
        sku: "SKU-0057",
        cantidad: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Bienestar Personal",
    elementos: [
      {
        title: "Hábitos para el éxito",
        img1: "./imgs/bienestar_personal1.png",
        precio: 4000,
        sku: "SKU-0058",
        cantidad: 1,
      },
      {
        title: "La riqueza que el dinero no puede comprar",
        img1: "./imgs/bienestar_personal2.png",
        precio: 5500,
        sku: "SKU-0059",
        cantidad: 1,
      },
      {
        title: "Desbloquea el proximo nivel",
        img1: "./imgs/bienestar_personal3.png",
        precio: 6500,
        sku: "SKU-0060",
        cantidad: 1,
      },
      {
        title: "Tu Nombre Ancestral Es Abundancia - Enric Corbera",
        img1: "./imgs/bienestar_personal5.webp",
        precio: 6500,
        sku: "SKU-0061",
        cantidad: 1,
      },
      {
        title: "Deseo - Lic. Cecilia Ce",
        img1: "./imgs/bienestar_personal6.webp",
        precio: 6500,
        sku: "SKU-0062",
        cantidad: 1,
      },
      {
        title: "El Amor Despues Del Desamor - Maximiliano Mc Coubrey",
        img1: "./imgs/bienestar_personal7.webp",
        precio: 6500,
        sku: "SKU-0063",
        cantidad: 1,
      },
      {
        title: "Desbloquea Tu Proximo Nivel - Daniela De Lucia",
        img1: "./imgs/bienestar_personal8.webp",
        precio: 6500,
        sku: "SKU-0064",
        cantidad: 1,
      },
      {
        title: "El Cerebro Optimista - Mikel Alonso Lopez",
        img1: "./imgs/bienestar_personal9.webp",
        precio: 6500,
        sku: "SKU-0065",
        cantidad: 1,
      },
      {
        title: "Espiritu Animal - Magali Tajes",
        img1: "./imgs/bienestar_personal10.webp",
        precio: 6500,
        sku: "SKU-0066",
        cantidad: 1,
      },
      {
        title: "Constelaciones Astrologicas - Cecilia Garcia Robles",
        img1: "./imgs/bienestar_personal11.webp",
        precio: 6500,
        sku: "SKU-0067",
        cantidad: 1,
      },
    ],
  },
];// Inventario de articulos de libreria que se muestran en la tienda
let inventarioArticulosLibreria = [
  {
    id: 0,
    title: "Escolar",
    elementos: [
      {
        title: "Libreta Brugge 9x14 Mickey - Hojas Rayadas",
        img1: "./imgs/escolares1.webp",
        precio: 8000,
        sku: "SKU-0068",
        cantidad: 1,
      },
      {
        title: "Marcadores Touch Tonos Piel X12 - Nuwa",
        img1: "./imgs/escolares2.webp",
        precio: 9000,
        sku: "SKU-0069",
        cantidad: 1,
      },
      {
        title: "Boligrafos Disney X5 - Tinta Azul - Princesas - Nuwa",
        img1: "./imgs/escolares3.webp",
        precio: 8500,
        sku: "SKU-0070",
        cantidad: 1,
      },
      {
        title: "Resaltadores Disney Mini X6 Toy Story - Nuwa",
        img1: "./imgs/escolares4.webp",
        precio: 8000,
        sku: "SKU-0071",
        cantidad: 1,
      },
      {
        title: "Cuaderno A5 Rayado Mafalda El Feminismo Rosa - Tapa Dura",
        img1: "./imgs/escolares5.webp",
        precio: 9000,
        sku: "SKU-0072",
        cantidad: 1,
      },
      {
        title: "Resaltadores Disney - Mini X6 - Pixar - Nuwa",
        img1: "./imgs/escolares6.webp",
        precio: 8500,
        sku: "SKU-0073",
        cantidad: 1,
      },
      {
        title: "Marcadores Lettering Lata - Nuwa",
        img1: "./imgs/escolares7.webp",
        precio: 8000,
        sku: "SKU-0074",
        cantidad: 1,
      },
      {
        title: "Resaltadores Disney - Mini X6 - Princesas - Nuwa",
        img1: "./imgs/escolares8.webp",
        precio: 9000,
        sku: "SKU-0075",
        cantidad: 1,
      },
      {
        title: "Cuaderno A5 Rayado Mafalda Protesta Triste... - Tapa Dura",
        img1: "./imgs/escolares9.webp",
        precio: 8500,
        sku: "SKU-0076",
        cantidad: 1,
      },
      {
        title: "Cuaderno A5 Rayado Nuwa Trama Bicicleta Cosido - Tapa Blanda",
        img1: "./imgs/escolares10.webp",
        precio: 8500,
        sku: "SKU-0077",
        cantidad: 1,
      },
      {
        title: "Cuaderno A4 Rayado Nuwa Trama Lampara - Tapa Dura",
        img1: "./imgs/escolares11.webp",
        precio: 8000,
        sku: "SKU-0078",
        cantidad: 1,
      },
      {
        title: "Libreta Brugge 13x21 Mafalda Hojas Rayadas",
        img1: "./imgs/escolares12.webp",
        precio: 8000,
        sku: "SKU-0079",
        cantidad: 1,
      },
    ],
  },
  {
    id: 1,
    title: "Agendas y Diarios Íntimos",
    elementos: [
      {
        title: "Agenda Escolar Perpetua - Pajaros - Granica",
        img1: "./imgs/agendasydiarios1.webp",
        precio: 6000,
        sku: "SKU-0080",
        cantidad: 1,
      },
      {
        title: "Agenda Artesanal Perpetua - Palabras Para El Alma - Roja",
        img1: "./imgs/agendasydiarios2.webp",
        precio: 5000,
        sku: "SKU-0081",
        cantidad: 1,
      },
      {
        title: "Notebook Planner Girl Power Perpetuo - Linea Trendy",
        img1: "./imgs/agendasydiarios3.webp",
        precio: 3500,
        sku: "SKU-0082",
        cantidad: 1,
      },
      {
        title: "Agenda Perpetua Quino Roja - Quino",
        img1: "./imgs/agendasydiarios4.webp",
        precio: 3500,
        sku: "SKU-0083",
        cantidad: 1,
      },
      {
        title: "Agenda Artesanal Perpetua - La Vida Es Movimiento - Verde",
        img1: "./imgs/agendasydiarios5.webp",
        precio: 3500,
        sku: "SKU-0084",
        cantidad: 1,
      },
      {
        title: "Agenda Perpetua Gaturro - Nik",
        img1: "./imgs/agendasydiarios6.webp",
        precio: 3500,
        sku: "SKU-0085",
        cantidad: 1,
      },
      {
        title: "Agenda Perpetua En Ingles Mafalda And Friends Amarilla Quino",
        img1: "./imgs/agendasydiarios7.webp",
        precio: 3500,
        sku: "SKU-0086",
        cantidad: 1,
      },
      {
        title: "Agenda Perpetua Quino Verde - Quino",
        img1: "./imgs/agendasydiarios8.webp",
        precio: 3500,
        sku: "SKU-0087",
        cantidad: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Artística y Pintura",
    elementos: [
      {
        title: "Lapices Acuarelables Disney X12 - Pixar Toy Story - Nuwa",
        img1: "./imgs/artisticaypintura1.webp",
        precio: 4000,
        sku: "SKU-0088",
        cantidad: 1,
      },
      {
        title: "Lapices Acuarelables Disney X12 - Princesas Pastel - Nuwa",
        img1: "./imgs/artisticaypintura2.webp",
        precio: 5500,
        sku: "SKU-0089",
        cantidad: 1,
      },
      {
        title: "Lapices Acuarelables Disney X12 - Princesas - Nuwa",
        img1: "./imgs/artisticaypintura3.webp",
        precio: 6500,
        sku: "SKU-0090",
        cantidad: 1,
      },

    ],
  },
];

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

  let existeLibros = document.querySelector(".list-categoria-container");
  if (existeLibros) {
    generarTienda(inventarioLibros, ".list-categoria-container");
  }

  let existePeliculas = document.querySelector(".list-categoria-container-peliculas");
  if (existePeliculas) {
    generarTienda(inventarioPeliculas, ".list-categoria-container-peliculas");
  }

  let existeArticulosLibreria = document.querySelector(".list-categoria-container-articulos-libreria");
  if (existeArticulosLibreria) {
    generarTienda(inventarioArticulosLibreria, ".list-categoria-container-articulos-libreria");
  }

  // Genera las categorias destacadas si el elemento existe
  let existeCarrito = document.getElementById("lista-items-carrito");
  if (existeCarrito) {
    let itemsCarrito = localStorage.getItem(carritoKey);
    generarItemsCarrito(itemsCarrito);

  }

  // Genera las categorias destacadas si el elemento existe
  let existeProductosInventario = document.getElementById("lista-productos-inventario");
  if (existeProductosInventario) {
    let listas = [inventarioLibros, inventarioPeliculas, inventarioArticulosLibreria];
    generarListaDeProductosInventario2(listas);
  }
};
function generarListaDeProductosInventario2(listas) {
  const productosContainer = document.createElement('div');
  productosContainer.classList.add('productos-container');

  listas.forEach(categoria => {
    const categoriaContainer = document.createElement('div');
    categoriaContainer.classList.add('categoria');

    const categoriaTitulo = document.createElement('h2');
    categoriaTitulo.textContent = categoria.title;
    categoriaContainer.appendChild(categoriaTitulo);

    const productosLista = document.createElement('ul');
    categoria.elementos.forEach(producto => {
      const productoItem = document.createElement('li');
      productoItem.classList.add('producto');
      productoItem.innerHTML = `
        <img src="${producto.img1}" alt="${producto.title}">
        <h3>${producto.title}</h3>
        <p>SKU: ${producto.sku}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
      `;
      productosLista.appendChild(productoItem);
    });

    categoriaContainer.appendChild(productosLista);
    productosContainer.appendChild(categoriaContainer);
  });

  // Append the entire structure to your desired location in the DOM
  document.body.appendChild(productosContainer);
}
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

function generarTienda(categoriasLibros, element) {
  // Obtengo el contenedor donde se van a agregar los items del inventario
  const listContainer = document.querySelector(element);

  // Por cada categoria, genero los items en la tienda
  categoriasLibros.forEach((categoria) => {
    const librosEnCategoria = categoria["elementos"];
    // Creo el contenedor de la categoria
    const categoriaContainer = document.createElement("div");
    categoriaContainer.classList.add("categoria-container");

    const cateContainer = document.createElement("div");
    cateContainer.classList.add("py-4", "text-center");

    // Creo el titulo de la categoria, le agrego el contenido y lo agrego al contenedor de la categoria
    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("px-4", "fs-2", "fw-bold");
    categoryTitle.textContent = categoria["title"];
    cateContainer.appendChild(categoryTitle);

    // Creo el contador de resultados, le agrego las claes y el contenido y lo agrego al contenedor de la categoria
    const categoriaResultados = document.createElement("p");
    categoriaResultados.classList.add("categoria-resultados", "px-4");
    categoriaResultados.textContent = librosEnCategoria.length + " resultados";
    cateContainer.appendChild(categoriaResultados);

    // Agrego el contenedor de la categoria al contenedor de la lista
    categoriaContainer.appendChild(cateContainer);

    // Creo un contenedor para los items de la categoria para poder darle estilo
    const categoriaWrapper = document.createElement("div");
    categoriaWrapper.classList.add("categoria-wrapper");

    // Por cada libro en la categoria, genero un item en la tienda
    librosEnCategoria.forEach((libro) => {
      // Creo el contenedor del item
      const card = document.createElement("div");
      card.classList.add("tarjeta");

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
      buyButton.classList.add("boton", "btn-tienda");
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

function iniciarSesion() {
  // Obtengo los valores de los inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Recuperamos los datos del localStorage
  const usuariosJSON = localStorage.getItem(usuariosKey);

  // Convertimos el string JSON a un objeto JavaScript
  const usuariossRegistrados = JSON.parse(usuariosJSON);

  // Busco el usuario con el email y la contraseña ingresados
  const usuario = usuariossRegistrados.find(
    (user) => user.email === email && user.password === password
  );

  // Si no se encuentra el usuario, muestro un mensaje de error
  if (!usuario) {
    alert("Usuario o contraseña incorrectos");
    return;
  }

  // Guardo el usuario en el local storage
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Redirijo al usuario a la pagina principal
  window.location.href = "menu_admin.php";
}

function registrarUsuario() {
  // Recuperamos los datos del localStorage
  const usuariosJSON = localStorage.getItem(usuariosKey);

  // Convertimos el string JSON a un objeto JavaScript
  const usuariossRegistrados = JSON.parse(usuariosJSON);

  // Obtengo los valores de los inputs
  const nombre = document.getElementById("nombre-registro").value;
  const apellido = document.getElementById("apellido-registro").value;
  const email = document.getElementById("email-registro").value;
  const password = document.getElementById("password-registro").value;

  // Creo un nuevo usuario
  const nuevoUsuario = {
    id: usuariossRegistrados.length + 1,
    nombre,
    apellido,
    email,
    password,
  };

  // Agrego el nuevo usuario al array de usuarios registrados
  usuariossRegistrados.push(nuevoUsuario);

  // Convertimos el array de objetos a un string JSON
  const usuariosJSONs = JSON.stringify(usuariossRegistrados);

  // Guardamos el string JSON en el localStorage
  localStorage.setItem(usuariosKey, usuariosJSONs);


  // Redirijo al usuario a la pagina principal
  window.location.href = "login.php";
}