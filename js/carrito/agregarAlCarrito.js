import { carritoKey } from "../constantes.js";


export function agregarAlCarrito(itemStringifyed) {
    // Parseo el item a json
    const item = JSON.parse(itemStringifyed);

    // Traigo los items del local storage
    let itemsCarrito = JSON.parse(localStorage.getItem(carritoKey)) || [];

    // Me fijo si hay un item con el mismo titulo en el carrito
    //! (tendria que ser la id)
    const existeElItem = itemsCarrito.find(
        (cartItem) => cartItem.nombre === item.nombre
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