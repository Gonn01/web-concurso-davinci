export async function comprarCarrito() {
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