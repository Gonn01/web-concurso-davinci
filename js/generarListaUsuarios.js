export function generarListaUsuarios(usuarios) {
    let todosLosTbody = document.querySelectorAll("table tbody");

    todosLosTbody.forEach(tbody => {
        tbody.remove();
    });

    // Limpiar la lista de usuarios antes de llenarla
    let listaUsuarios = document.createElement("tbody");

    if (usuarios.length === 0) {
        listaUsuarios.innerHTML = "<tr><td colspan='5'>No hay usuarios registrados</td></tr>";
        return;
    }

    usuarios.forEach(usuario => {
        // Crear elementos de fila y columnas
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td>${usuario.rol['nombre']}</td>
            <td>
                <button class="btn btn-primary boton-editar" data-id="${usuario.id}">Editar</button>
                <button class="btn btn-danger boton-eliminar" data-id="${usuario.id}">Eliminar</button>
            </td>
        `;

        // Añadir la fila a la tabla
        listaUsuarios.appendChild(fila);
    });
    let tabla = document.getElementById("tabla-usuarios");
    tabla.appendChild(listaUsuarios);
}
