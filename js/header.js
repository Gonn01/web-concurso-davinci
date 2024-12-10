let header = document.getElementById('header');
let perfilButton = document.getElementById('perfil-ref');
let loginButton = document.getElementById('login-ref');

if (localStorage.getItem('logeado') === "true") {
    perfilButton.style.display = 'block';
} else {
    loginButton.style.display = 'block';
}

if (document.getElementById('cerrarSesionButton')) {
    document.getElementById('cerrarSesionButton').addEventListener('click', () => {

        localStorage.setItem('logeado', "false");
        localStorage.setItem('admin', "false");

        if (localStorage.getItem('logeado') !== "true") {
            perfilButton.style.display = 'none';
        }
        window.location.href = 'index.php';
    });
}