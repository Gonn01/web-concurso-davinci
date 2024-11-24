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

    const cargando = document.getElementById('cargando');
    cargando.style.display = 'block';

    let response = await iniciarSesion(email, contraseña);

    if (response['success']) {
        localStorage.setItem('logeado', true);
        localStorage.setItem('admin', true);
        window.location.href = './menu_admin.php';
    } else {
        const mensajeError = document.getElementById('mensajeError');
        mensajeError.style.display = 'block';
        mensajeError.innerHTML = response['message'];
    }
    cargando.style.display = 'none';
});