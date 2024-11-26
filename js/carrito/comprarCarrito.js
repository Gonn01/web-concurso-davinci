import { carritoKey } from './constantes.js';

async function comprarCarrito() {
    let itemsCarrito = localStorage.getItem(carritoKey);
    let lista = JSON.parse(itemsCarrito);
    let body = lista.map(element => {
        return { id: element['idCategoria'], cantidad: element['cantidad'] };
    });
    try {
        const response = await fetch('./functions/comprarCarrito.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        localStorage.removeItem(carritoKey);

        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
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
                text: "Compra realizada con éxito",
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
