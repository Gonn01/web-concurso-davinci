

export async function getProductos() {

    try {
        const response = await fetch('./functions/getProductos.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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
export async function editarProducto(id, sku, nombre, precio, urlImagen) {
    try {
        const response = await fetch('./functions/editarProducto.php', {
            method: 'POST',
            body: JSON.stringify({
                idProducto: id,
                sku: sku,
                nombre: nombre,
                precio: precio,
                urlImagen: urlImagen
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

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

export async function eliminarProducto(id) {
    try {
        const response = await fetch('./functions/eliminarProducto.php', {
            method: 'POST',
            body: JSON.stringify({ idProducto: id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

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
export async function agregarProducto(sku, nombre, precio, urlImagen, categoriaSeleccionada, tipoProductoSeleccionado) {
    try {
        const response = await fetch('./functions/agregarProducto.php', {
            method: 'POST',
            body: JSON.stringify({
                sku: sku,
                nombre: nombre,
                precio: precio,
                urlImagen: urlImagen,
                categoriaSeleccionada: categoriaSeleccionada,
                tipoDeProductoSeleccionado: tipoProductoSeleccionado
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

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
export async function getCategoriasConTipoProducto() {
    try {
        const response = await fetch('./functions/getCategoriasConTipoProducto.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

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