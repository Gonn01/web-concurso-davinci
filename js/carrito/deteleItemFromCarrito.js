import { carritoKey } from "./constantes.js";
import { initilizeCart } from "../carrito/inicializarCarrito.js";
import { generarItemsCarrito } from "../carrito/generarItemsCarrito.js";

export function deleteFromCarrito(itemStringifyed) {
    // Parseo el item a json
    const item = JSON.parse(itemStringifyed);

    // Traigo los items del local storage
    let itemsCarritos = JSON.parse(localStorage.getItem(carritoKey)) || [];
    // Filtrar los elementos que no coincidan con el item a eliminar
    // Osea elimino el item del carrito
    itemsCarritos = itemsCarritos.filter(
        (cartItem) => cartItem.nombre !== item.nombre
    );

    // Actualizo el local storage con los nuevos items del carrito
    const nuevoCarrito = JSON.stringify(itemsCarritos);
    localStorage.setItem(carritoKey, nuevoCarrito);

    // Actualizo el valor del carrito
    generarItemsCarrito(nuevoCarrito);
    // Actualizo el valor del carrito(header)
    initilizeCart();
}
