
let header = document.getElementById('header');
let perfilButton = document.getElementById('perfil-ref');
if (localStorage.getItem('logeado')) {
    perfilButton.style.display = 'block';
}

