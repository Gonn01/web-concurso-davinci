export async function eliminarUsuario(id) {
    try {
        const response = await fetch('./functions/eliminarUsuario.php', {
            method: 'POST',
            body: JSON.stringify({ idUsuario: id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}