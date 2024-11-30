export async function editarUsuario(id, nombre, apellido, email) {
    try {
        const response = await fetch('./functions/editarUsuario.php', {
            method: 'POST',
            body: JSON.stringify({
                idUsuario: id,
                nombre: nombre,
                apellido: apellido,
                email: email,
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