import { carritoKey } from "./constantes.js";
import { initilizeCart } from "./inicializarCarrito.js";
import { generarItemsCarrito } from "./generarItemsCarrito.js";

export function modificarProductoCarrito(itemStringifyed, restar) {
    // Parseo el item a json
    const item = JSON.parse(itemStringifyed);

    // Traigo los items del local storage
    let itemsCarrito = JSON.parse(localStorage.getItem(carritoKey)) || [];

    // Me fijo si hay un item con el mismo titulo en el carrito
    const existeElItem = itemsCarrito.find(
        (cartItem) => cartItem.nombre === item.nombre
    );

    // Si lo hay
    if (existeElItem) {
        // Si se quiere restar y la cantidad es 1, elimino el item
        if (restar) {
            existeElItem.cantidad--;
            if (existeElItem.cantidad === 0) {
                itemsCarrito = itemsCarrito.filter(
                    (cartItem) => cartItem.nombre !== item.nombre
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
