import { generarListaUsuarios } from './generarListaUsuarios.js';
import { getUsuarios, eliminarUsuario, editarUsuario, hacerAdmin } from './user_repository.js';

function asignarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll(".boton-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', async function () {
            let id = boton.getAttribute('data-id');

            // Esperar la respuesta de Swal.fire
            let result = await Swal.fire({
                title: "¿Quieres eliminar al usuario?",
                showDenyButton: true,
                confirmButtonText: "Sí",
                denyButtonText: "Cancelar"
            });

            if (result.isConfirmed) {
                let data = await eliminarUsuario(id);
                let users = usuarios['body'];
                let newUsers = users.filter(usuario => usuario.id !== parseInt(id));
                usuarios['body'] = newUsers; // Actualizar la variable global de usuarios
                generarListaUsuarios(newUsers); // Regenerar la lista

                if (data['success']) {
                    swal.fire({
                        icon: "success",
                        title: "Usuario eliminado",
                        text: "Usuario eliminado con éxito",
                    });
                } else {
                    swal.fire({
                        icon: "error",
                        title: data['message'],
                        text: "No se pudo eliminar el usuario",
                    });
                }

                asignarEventosEliminar();
                asignarEventosEditar();
            } else if (result.isDenied) {
                Swal.fire("El usuario no fue eliminado");
            }
        });
    });
}
function asignarEventosEditar() {
    const botonesEditar = document.querySelectorAll(".boton-editar");
    botonesEditar.forEach(boton => {
        boton.addEventListener('click', async function () {
            let id = boton.getAttribute('data-id');
            let usuario = usuarios['body'].find(usuario => usuario.id === parseInt(id));
            // Esperar la respuesta de Swal.fire
            let result = await Swal.fire({
                title: 'Editar Usuario',
                html: `
                    <form id="form-editar-usuario" class="text-start">
                        <div class="mb-3">
                            <label for="usuario-nombre" class="form-label">Nombre</label>
                            <input type="text" id="usuario-nombre" class="form-control" value="${usuario.nombre}" required>
                        </div>
                        <div class="mb-3">
                            <label for="usuario-apellido" class="form-label">Apellido</label>
                            <input type="text" id="usuario-apellido" class="form-control" value="${usuario.apellido}" required>
                        </div>
                        <div class="mb-3">
                            <label for="usuario-rol" class="form-label">Rol</label>
                            <input type="text" id="usuario-rol" class="form-control" value="${usuario.rol['nombre']}" required disabled>
                        </div>
             ${usuario.rol['id'] == 1 ? `
                <div class="mt-3">
                    <button type="button" id="btn-hacer-admin" class="btn btn-primary w-100">
                        Hacer administrador
                    </button>
                </div>
                ` : ''}
                        <div class="mb-3">
                            <label for="usuario-email" class="form-label">Correo</label>
                            <input type="email" id="usuario-email" class="form-control" value="${usuario.email}" required>
                        </div>
                        <div class="mb-3">
                            <label for="usuario-telefono" class="form-label">Correo</label>
                            <input type="text" id="usuario-telefono" class="form-control" value="${usuario.telefono}" required>
                        </div>
                        <div class="mb-3">
                            <label for="usuario-urlImagen" class="form-label">Correo</label>
                            <input type="text" id="usuario-urlImagen" class="form-control" value="${usuario.urlImagen}" required>
                        </div>
                    </form>
                `,
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
                didRender: () => {
                    if (usuario.rol['id'] == 1) {
                        document.getElementById('btn-hacer-admin').addEventListener('click', async () => {
                            await hacerAdm(usuario.id);
                        });
                    }
                },
            });
            if (result.isConfirmed) {
                let nombre = document.getElementById('usuario-nombre').value;
                let apellido = document.getElementById('usuario-apellido').value;
                let email = document.getElementById('usuario-email').value;
                let telefono = document.getElementById('usuario-telefono').value;
                let urlImagen = document.getElementById('usuario-urlImagen').value;
                if (nombre === '' && apellido === '' && email === '' && telefono === '' && urlImagen === '') {
                    swal.fire({
                        icon: "error",
                        title: "Datos incompletos",
                        text: "Por favor, completa todos los campos",
                    });
                    return;
                }
                let data = await editarUsuario(usuario.id, nombre, apellido, email, telefono, urlImagen);
                let users = await getUsuarios();
                generarListaUsuarios(users['body']);

                if (data['success']) {
                    swal.fire({
                        icon: "success",
                        title: "Usuario editado",
                        text: "Usuario editado con éxito",
                    });
                } else {
                    swal.fire({
                        icon: "error",
                        title: data['message'],
                        text: "No se pudo editar el usuario",
                    });
                }

                asignarEventosEliminar();
                asignarEventosEditar();
            } else if (result.isDenied) {
                Swal.fire("El usuario no fue editado");
            }
        });
    });
}
async function hacerAdm(id) {
    let result = await Swal.fire({
        title: '¿Qué deseas hacer?',
        showDenyButton: true,
        confirmButtonText: 'Hacer Admin',
        denyButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
        let data = await hacerAdmin(id);
        let users = await getUsuarios();
        generarListaUsuarios(users['body']);

        if (data['success']) {
            swal.fire({
                icon: "success",
                title: "Usuario editado",
                text: "Usuario editado con éxito",
            });
        } else {
            swal.fire({
                icon: "error",
                title: data['message'],
                text: "No se pudo editar el usuario",
            });
        }

        asignarEventosEliminar();
        asignarEventosEditar();
    } else if (result.isDenied) {
        Swal.fire("El usuario no fue editado");
    }
}

let usuarios = await getUsuarios();
generarListaUsuarios(usuarios['body']);
asignarEventosEliminar();
asignarEventosEditar();
