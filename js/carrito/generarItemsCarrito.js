import { formatearPrecio } from "../formatearPrecio.js";
import { modificarProductoCarrito } from "./modificarItemFromCarrito.js";
import { deleteFromCarrito } from "./deteleItemFromCarrito.js";

export function generarItemsCarrito(listaProductos) {
    // Parseo a json la lista de productos agregados al carrito
    let lista = JSON.parse(listaProductos);

    // Obtengo el elemento donde se van a agregar los items del carrito
    let listaCarrito = document.getElementById("lista-items-carrito");

    // Eliminar elementos previos del carrito
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }

    const totalText = document.getElementById("total-text");
    if (lista === null || lista.length === 0) {
        const vacio = document.createElement("div");
        vacio.textContent = "El carrito está vacío";
        vacio.style.fontWeight = "bold";
        vacio.style.fontSize = "1.5rem";
        vacio.style.textAlign = "center";
        listaCarrito.appendChild(vacio);
        return;
    }
    const t = lista.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    totalText.textContent = `Total: ${formatearPrecio(t + 4000)}`;
    lista.forEach((producto) => {
        // Creo el contenedor del item del carrito
        let divItemCarrito = document.createElement("div");
        divItemCarrito.classList.add("row", "py-3", "item-carrito", "rowa");

        // Creo la imagen del item del carrito
        const imgCol = document.createElement("div");
        imgCol.className = "col my-auto text-center col-carrito";

        let imgItemCarrito = document.createElement("img");
        imgItemCarrito.classList.add("img-item-carrito");
        imgItemCarrito.src = producto.urlImagen;
        imgItemCarrito.alt = "";

        imgCol.appendChild(imgItemCarrito);

        // Creo el nombre del producto
        const nombreCol = document.createElement("div");
        nombreCol.classList.add("col", "my-auto", "text-center", "col-carrito");
        let nombreProducto = document.createElement("div");
        nombreProducto.textContent = `${producto.nombre}`;
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
