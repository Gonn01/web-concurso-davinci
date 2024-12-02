import { carritoKey } from '../constantes.js';

if (document.getElementById('comprarBtn')) {
    let a = document.getElementById('comprarBtn');

    if (localStorage.getItem(carritoKey) === null) {
        a.style.display = 'none';
    }
}

document.getElementById('comprarBtn').addEventListener('click', async (event) => {
    event.preventDefault();

    const cargando = document.getElementById('cargando');
    cargando.style.display = 'block';
    try {
        let response = await comprarCarrito();
        if (response['success']) {
            document.getElementById('total-text').style.display = 'none';
            document.getElementById('comprarBtn').style.display = 'none';
            swal.fire({
                icon: "success",
                title: "Compra realizada",
                text: response['message'],
            });
        } else {
            swal.fire({
                icon: "error",
                title: response['message'],
                text: "No se pudo realizar la compra",
            });
        }
    } catch (error) {
        swal.fire({
            icon: "error",
            title: error,
            text: "Something went wrong!",
        });
    }
    cargando.style.display = 'none';
});
