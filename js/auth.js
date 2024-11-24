async function iniciarSesion(email, contraseña) {

    try {
        const response = await fetch('./functions/iniciarSesion.php'
            , {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    contraseña: contraseña
                }),
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value

    const mensajeError = document.getElementById('mensajeError');

    const cargando = document.getElementById('cargando');
    cargando.style.display = 'block';

    let response = await iniciarSesion(email, contraseña);

    if (response['success']) {
        window.location.href = './menu_admin.php';
    } else {
        mensajeError.style.display = 'block';
        mensajeError.innerHTML = response['message'];
    }
    cargando.style.display = 'none';
});

async function registrarUsuario() {
    try {
        const response = await fetch('./functions/registrarUsuario.php');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    registrarUsuario();
});