let header = document.getElementById('header');
let perfilButton = document.getElementById('perfil-ref');
let loginButton = document.getElementById('login-ref');

// Verificar si el usuario está logeado (convertir a booleano)
if (localStorage.getItem('logeado') === "true") {
    perfilButton.style.display = 'block';
} else {
    loginButton.style.display = 'block';
}

// Verificar si existe el botón "Cerrar Sesión"
if (document.getElementById('cerrarSesionButton')) {
    document.getElementById('cerrarSesionButton').addEventListener('click', () => {

        // Actualizar valores en localStorage
        localStorage.setItem('logeado', "false");
        localStorage.setItem('admin', "false");

        // Ocultar el botón de perfil si no está logeado
        if (localStorage.getItem('logeado') !== "true") {
            perfilButton.style.display = 'none';
        }
        window.location.href = 'index.php';
    });
}