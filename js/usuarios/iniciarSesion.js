import { iniciarSesion } from '../usuarios/user_repository.js';
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value

    const cargando = document.getElementById('cargando');
    cargando.style.display = 'block';
    try {
        let response = await iniciarSesion(email, contraseña);

        if (response['success']) {
            if (response['body']['rol']['roles_id'] == 1) {
                localStorage.setItem('admin', true);
            } else {
                localStorage.setItem('admin', false);
            }
            localStorage.setItem('logeado', true);
            window.location.href = './menu_admin.php';
        } else {
            Swal.fire({
                icon: "error",
                title: response['message'],
                text: "Something went wrong!",
            });

        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: error,
            text: "Something went wrong!",
        });

    }
    cargando.style.display = 'none';

});