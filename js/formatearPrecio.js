export function formatearPrecio(precio) {
    // Convertir el precio a número
    const numero = parseFloat(precio);

    // Validar si el precio es un número
    if (isNaN(numero)) {
        return "Precio inválido";
    }

    // Formatear el precio con separadores de miles y decimales
    const opcionesFormato = {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    };

    const formateador = new Intl.NumberFormat("es-AR", opcionesFormato);
    const precioFormateado = formateador.format(numero);

    return precioFormateado;
}
