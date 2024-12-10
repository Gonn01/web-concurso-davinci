import { registrarUsuario } from '../usuarios/user_repository.js';
document.getElementById('formulario-registro').addEventListener('submit', async (event) => {
    event.preventDefault();

    let nombre = document.getElementById('nombre-registro').value;
    let apellido = document.getElementById('apellido-registro').value;
    let email = document.getElementById('email-registro').value;
    let contraseña = document.getElementById('contraseña-registro').value;
    let telefono = document.getElementById('telefono-registro').value;

    let cargando = document.getElementById('cargando-registro');
    cargando.style.display = 'block';

    let response = await registrarUsuario(nombre, apellido, email, contraseña, telefono);

    if (response['success']) {
        Swal.fire({
            title: "Exito!",
            text: "Tu cuenta ha sido creada exitosamente",
            icon: "success",

        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = './login.html';
            }
        });
    } else {
        let mensajeError = document.getElementById('mensaje-error-registro');
        mensajeError.style.display = 'block';
        mensajeError.innerHTML = response['message'];
    }
    cargando.style.display = 'none';
});