import { generarListaUsuarios } from './generarListaUsuarios.js';
import { eliminarUsuario } from './eliminarUsuario.js';
async function getUsuarios() {

    try {
        const response = await fetch('./functions/getUsuarios.php');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

let usuarios = await getUsuarios();

generarListaUsuarios(usuarios['body']);
const botonesEliminar = document.querySelectorAll(".boton-eliminar");
botonesEliminar.forEach(boton => {
    boton.addEventListener('click', async function () {
        let id = boton.getAttribute('data-id');
        console.log('Botón eliminar presionado, ID:', id);

        // Esperar la respuesta de Swal.fire
        let result = await Swal.fire({
            title: "¿Quieres eliminar al usuario?",
            showDenyButton: true,
            confirmButtonText: "Sí",
            denyButtonText: "Cancelar"
        });

        if (result.isConfirmed) {
            console.log("Eliminando usuario con ID:", id);
            let data = await eliminarUsuario(id);
            let users = usuarios['body'];
            let newUsers = users.filter(usuario => usuario.id !== parseInt(id));
            generarListaUsuarios(newUsers);

            if (data['success']) {
                swal.fire({
                    icon: "success",
                    title: "Usuario eliminado",
                    text: "Usuario eliminado con éxito",
                });
            } else {
                swal.fire({
                    icon: "error",
                    title: response['message'],
                    text: "No se pudo eliminar el usuario",
                });
            }
        } else if (result.isDenied) {
            Swal.fire("El usuario no fue eliminado");
        }
    });
});

