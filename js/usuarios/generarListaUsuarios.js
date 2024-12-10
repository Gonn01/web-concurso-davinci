export function generarListaUsuarios(usuarios) {

    let todosLosTbody = document.querySelectorAll("table tbody");
    todosLosTbody.forEach(tbody => {
        tbody.remove();
    });

    let listaUsuarios = document.createElement("tbody");

    if (usuarios.length === 0) {
        listaUsuarios.innerHTML = "<tr><td colspan='5'>No hay usuarios registrados</td></tr>";
        return;
    }



    usuarios.forEach(usuario => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td class="align-middle">${usuario.id}</td>
            <td class="align-middle">${usuario.nombre}</td>
            <td class="align-middle">${usuario.apellido}</td>
            <td class="align-middle">${usuario.email}</td>
            <td class="align-middle">${usuario.rol['nombre']}</td>
            <td class="align-middle"> <img style="width: 50px;height: 50px" src=${usuario.urlImagen}> </td>
            <td class="align-middle">${usuario.telefono}</td>
            <td class="align-middle">
                <button class="btn btn-primary boton-editar" data-id="${usuario.id}">Editar</button>
                <button class="btn btn-danger boton-eliminar" data-id="${usuario.id}">Eliminar</button>
            </td>
        `;

        listaUsuarios.appendChild(fila);
    });
    let tabla = document.getElementById("tabla-usuarios");
    tabla.appendChild(listaUsuarios);
}
