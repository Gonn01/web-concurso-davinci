export async function hacerAdmin(id) {
    try {
        const response = await fetch('./functions/hacerAdmin.php', {
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

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}