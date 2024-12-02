import { generarItemsCarrito } from "./generarItemsCarrito.js";
import { carritoKey } from "../constantes.js";
export function initilizeCart() {
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
window.onload = function () {
    const header = document.querySelector("header");
    if (header) {
        // Inicializa el carrito
        initilizeCart();
    }

    // Genera las categorias destacadas si el elemento existe
    let existeCarrito = document.getElementById("lista-items-carrito");
    if (existeCarrito) {
        let itemsCarrito = localStorage.getItem(carritoKey);
        generarItemsCarrito(itemsCarrito);
    }

};