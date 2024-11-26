async function registrarUsuario(nombre, apellido, email, contraseña) {
    try {
        const response = await fetch('./functions/registrarUsuario.php', {
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                email: email,
                contraseña: contraseña
            }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
document.getElementById('formulario-registro').addEventListener('submit', async (event) => {
    event.preventDefault();

    let nombre = document.getElementById('nombre-registro').value;
    let apellido = document.getElementById('apellido-registro').value;
    let email = document.getElementById('email-registro').value;
    let contraseña = document.getElementById('contraseña-registro').value;

    let cargando = document.getElementById('cargando-registro');
    cargando.style.display = 'block';

    let response = await registrarUsuario(nombre, apellido, email, contraseña);

    if (response['success']) {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",

        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = './index.html';
            }
        });
    } else {
        let mensajeError = document.getElementById('mensaje-error-registro');
        mensajeError.style.display = 'block';
        mensajeError.innerHTML = response['message'];
    }
    cargando.style.display = 'none';
});