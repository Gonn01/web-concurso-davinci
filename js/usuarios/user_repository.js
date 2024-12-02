export async function registrarUsuario(nombre, apellido, email, contraseña) {
    try {
        const response = await fetch('./functions/registrarUsuario.php', {
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                email: email,
                contraseña: contraseña
            }),
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

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

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

export async function iniciarSesion(email, contraseña) {

    try {
        const response = await fetch('./functions/iniciarSesion.php'
            , {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    contraseña: contraseña
                }),
            }
        );

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