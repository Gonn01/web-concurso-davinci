import { formatearPrecio } from "./formatearPrecio.js";
import { sumarCarrito } from "./carrito/agregarAlCarrito.js";
export function generarListaProductos(categoriasLibros, element) {
    // Obtengo el contenedor donde se van a agregar los items del inventario
    const listContainer = document.querySelector(element);

    // Por cada categoria, genero los items en la tienda
    categoriasLibros.forEach((categoria) => {
        const librosEnCategoria = categoria["productos"];
        // Creo el contenedor de la categoria
        const categoriaContainer = document.createElement("div");
        categoriaContainer.classList.add("categoria-container");

        const cateContainer = document.createElement("div");
        cateContainer.classList.add("py-4", "text-center");

        // Creo el titulo de la categoria, le agrego el contenido y lo agrego al contenedor de la categoria
        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("px-4", "fs-2", "fw-bold");
        categoryTitle.textContent = categoria["nombreCategoria"];
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
            image.src = libro.urlImagen;
            image.alt = libro.nombre;
            card.appendChild(image);

            // Creo el contenedor del cuerpo de la card y le agrego las clases
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            // Creo el titulo del item y le agrego las clases y el contenido y lo agrego al cuerpo de la card
            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = libro.nombre;
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