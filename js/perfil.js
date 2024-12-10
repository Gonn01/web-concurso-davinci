import { editarUsuario } from './usuarios/user_repository.js';
const botonEditar = document.getElementById("boton-editar-perfil");

botonEditar.addEventListener('click', async function () {
    let usuario = localStorage.getItem('usuario');
    usuario = JSON.parse(usuario);
    let result = await Swal.fire({
        title: 'Editar Usuario',
        html: `
                    <form id="form-editar-usuario" class="text-start">
                        <div class="mb-3">
                            <label for="usuario-nombre" class="form-label">Nombre</label>
                            <input type="text" id="usuario-nombre" class="form-control" value="${usuario['nombre']}" required>
                        </div>
                        <div class="mb-3">
                            <label for="usuario-apellido" class="form-label">Apellido</label>
                            <input type="text" id="usuario-apellido" class="form-control" value="${usuario['apellido']}" required>
                        </div>
                        <div class="mb-3">
                            <label for="usuario-email" class="form-label">Email</label>
                            <input type="text" id="usuario-email" class="form-control" value="${usuario['email']}" required>
                        </div>
                        <div class="mb-3">
                            <label for="usuario-telefono" class="form-label">Telefono</label>
                            <input type="text" id="usuario-telefono" class="form-control" value="${usuario['telefono']}" required>
                            
                        </div>
                        <div class="mb-3">
                            <label for="usuario-urlImagen" class="form-label">Imagen</label>
                            <input type="text" id="usuario-urlImagen" class="form-control" value="${usuario['urlImagen']}" required>
                        </div>
                    </form>
                `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
    });
    if (result.isConfirmed) {
        let nombre = document.getElementById('usuario-nombre').value;
        let apellido = document.getElementById('usuario-apellido').value;
        let email = document.getElementById('usuario-email').value;
        let telefono = document.getElementById('usuario-telefono').value;
        let urlImagen = document.getElementById('usuario-urlImagen').value;
        if (email === '' && nombre === '' && telefono === '' && urlImagen === '' && apellido === '') {
            swal.fire({
                icon: "error",
                title: "Datos incompletos",
                text: "Por favor, completa todos los campos",
            });
        }
        let data = await editarUsuario(usuario.idUsuario, nombre, apellido, email, telefono, urlImagen);

        if (data['success']) {
            localStorage.setItem('usuario', JSON.stringify(data['body']));
            let r = await swal.fire({
                icon: "success",
                title: "Usuario editado",
                text: "Usuario editado con éxito",
            });
            console.log(r.isConfirmed);
            if (r.isConfirmed) {
                window.location.href = 'perfil.php';
            }
        } else {
            swal.fire({
                icon: "error",
                title: data['message'],
                text: "No se pudo editar el usuario",
            });
        }
    } else if (result.isDenied) {
        Swal.fire("El usuario no fue editado");
    }
});