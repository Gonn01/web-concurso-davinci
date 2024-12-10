
export function generarListaProductos(productos) {
    // Limpiar la lista de usuarios antes de llenarla
    let todosLosTbody = document.querySelectorAll("table tbody");
    todosLosTbody.forEach(tbody => {
        tbody.remove();
    });

    let listaProductos = document.createElement("tbody");

    if (productos.length === 0) {
        listaProductos.appendChild("<tr><td colspan='5'>No hay productos disponibles</td></tr>");
        return;
    }

    productos.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
        <tr>
            <td class="align-middle">${producto.sku}</td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">${producto.precio}</td>
            <td class="align-middle">${producto.cantidadDisponible}</td>
            <td class="align-middle"> <img style="width: 50px;height: 75px" src=${producto.urlImagen}> </td>
            <td class="align-middle">
                <button class="btn btn-primary boton-editar" data-id="${producto.id}">Editar</button>
                <button class="btn btn-danger boton-eliminar" data-id="${producto.id}">Eliminar</button>
            </td>
        </tr>
        `;

        // Añadir la fila a la tabla
        listaProductos.appendChild(fila);
    });
    let tabla = document.getElementById("tabla-productos");
    tabla.appendChild(listaProductos);
}