import { generarListaProductos } from './generarListaProductos.js';
async function getProductos() {

    try {
        const response = await fetch('./functions/getUsuarios.php');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

if (document.getElementById("list-categoria-container-peliculas")) {
    let productos = await getProductos();

    generarListaProductos(productos['body'], "#list-categoria-container-peliculas");
}