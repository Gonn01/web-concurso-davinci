export async function getUsuarios() {
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