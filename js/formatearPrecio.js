export function formatearPrecio(precio) {
    const numero = parseFloat(precio);

    if (isNaN(numero)) {
        return "Precio inválido";
    }

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
