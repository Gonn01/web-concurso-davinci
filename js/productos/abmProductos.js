import { generarListaProductos } from './generarListaProductosEnABM.js';
import { getProductos, eliminarProducto, editarProducto, agregarProducto, getCategoriasConTipoProducto } from './productos_repository.js';

function asignarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll(".boton-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', async function () {
            let id = boton.getAttribute('data-id');

            // Esperar la respuesta de Swal.fire
            let result = await Swal.fire({
                title: "¿Quieres eliminar al producto?",
                showDenyButton: true,
                confirmButtonText: "Sí",
                denyButtonText: "Cancelar"
            });

            if (result.isConfirmed) {
                let data = await eliminarProducto(id);
                let users = productos;
                let newProducts = users.filter(producto => producto.id !== parseInt(id));
                productos = newProducts;
                generarListaProductos(newProducts);

                if (data['success']) {
                    swal.fire({
                        icon: "success",
                        title: "Producto eliminado",
                        text: "Producto eliminado con éxito",
                    });
                } else {
                    swal.fire({
                        icon: "error",
                        title: data['message'],
                        text: "No se pudo eliminar el producto",
                    });
                }

                asignarEventosEliminar();
                asignarEventosEditar();
            } else if (result.isDenied) {
                Swal.fire("El producto no fue eliminado");
            }
        });
    });
}
function asignarEventosEditar() {
    const botonesEditar = document.querySelectorAll(".boton-editar");
    botonesEditar.forEach(boton => {
        boton.addEventListener('click', async function () {
            let id = boton.getAttribute('data-id');
            let producto = productos.find(producto => producto.id === parseInt(id));
            // Esperar la respuesta de Swal.fire
            let result = await Swal.fire({
                title: 'Editar Producto',
                html: `
                    <form id="form-editar-producto" class="text-start">
                        <div class="mb-3">
                            <label for="producto-sku" class="form-label">SKU</label>
                            <input type="text" id="producto-sku" class="form-control" value="${producto.sku}" required>
                        </div>
                        <div class="mb-3">
                            <label for="producto-nombre" class="form-label">Nombre</label>
                            <input type="text" id="producto-nombre" class="form-control" value="${producto.nombre}" required>
                        </div>
                        <div class="mb-3">
                            <label for="producto-precio" class="form-label">Precio</label>
                            <input type="text" id="producto-precio" class="form-control" value="${producto.precio}" required>
                            
                        </div>
                        <div class="mb-3">
                            <label for="producto-urlImagen" class="form-label">Imagen</label>
                            <input type="text" id="producto-urlImagen" class="form-control" value="${producto.urlImagen}" required>
                        </div>
                    </form>
                `,
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
            });
            if (result.isConfirmed) {
                let sku = document.getElementById('producto-sku').value;
                let nombre = document.getElementById('producto-nombre').value;
                let precio = document.getElementById('producto-precio').value;
                let urlImagen = document.getElementById('producto-urlImagen').value;
                if (sku === '' && nombre === '' && precio === '' && urlImagen === '') {
                    swal.fire({
                        icon: "error",
                        title: "Datos incompletos",
                        text: "Por favor, completa todos los campos",
                    });
                    return;
                }
                let data = await editarProducto(producto.id, sku, nombre, precio, urlImagen);
                let productosPorCategoria = await getProductos();
                let productos = procesarProducosPorCategoria(productosPorCategoria);
                generarListaProductos(productos);

                if (data['success']) {
                    swal.fire({
                        icon: "success",
                        title: "Producto editado",
                        text: "Producto editado con éxito",
                    });
                } else {
                    swal.fire({
                        icon: "error",
                        title: data['message'],
                        text: "No se pudo editar el producto",
                    });
                }

                asignarEventosEliminar();
                asignarEventosEditar();
            } else if (result.isDenied) {
                Swal.fire("El producto no fue editado");
            }
        });
    });
}
function procesarProducosPorCategoria() {
    let productos = [];

    for (let index = 0; index < productosPorCategoria['body'].length; index++) {
        const element = productosPorCategoria['body'][index]['productos'];
        for (let index = 0; index < element.length; index++) {
            const producto = element[index];
            productos.push(producto);
        }

    }
    return productos;
}

let productosPorCategoria = await getProductos();
let productos = procesarProducosPorCategoria(productosPorCategoria)
generarListaProductos(productos);
asignarEventosEliminar();
asignarEventosEditar();
let categorias = await getCategoriasConTipoProducto();
// Prepara los tipos de producto y sus categorías
let tiposDeProducto = categorias['body'].map(tipo => ({
    id: tipo.idTipoDeProducto,
    nombre: tipo.nombreTipoDeProducto,
    categorias: tipo.categorias
}));

document.getElementById('boton-agregar-producto').addEventListener('click', async function () {
    let result = await Swal.fire({
        title: 'Agregar Producto',
        html: `
            <form id="form-agregar-producto" class="text-start">
                <div class="mb-3">
                    <label for="producto-sku" class="form-label">SKU</label>
                    <input type="text" id="producto-sku" class="form-control" value="SKU-" required>
                </div>
                <div class="mb-3">
                    <label for="producto-nombre" class="form-label">Nombre</label>
                    <input type="text" id="producto-nombre" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="producto-precio" class="form-label">Precio</label>
                    <input type="text" id="producto-precio" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="producto-urlImagen" class="form-label">Imagen</label>
                    <input type="text" id="producto-urlImagen" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="tipo-producto" class="form-label">Tipo de producto</label>
                    <input class="form-control" list="datalist-tipos-producto" id="tipo-producto" placeholder="Selecciona un tipo de producto">
                    <datalist id="datalist-tipos-producto">
                        ${tiposDeProducto.map(tipo => `<option value="${tipo.nombre}" data-id="${tipo.id}"></option>`).join('')}
                    </datalist>
                </div>
                <div class="mb-3">
                    <label for="categoria-producto" class="form-label">Categoría del producto</label>
                    <input class="form-control" list="datalist-categorias-producto" id="categoria-producto" placeholder="Selecciona una categoría" disabled>
                    <datalist id="datalist-categorias-producto"></datalist>
                </div>
            </form>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            let tipoProductoSeleccionado = document.getElementById('tipo-producto').value;
            let categoriaSeleccionada = document.getElementById('categoria-producto').value;
            if (!tipoProductoSeleccionado || !categoriaSeleccionada) {
                Swal.showValidationMessage('Por favor selecciona un tipo de producto y una categoría');
                return false;
            }
            return true;
        }
    });

    if (result.isConfirmed) {
        // Obtén los datos del formulario
        let sku = document.getElementById('producto-sku').value;
        let nombre = document.getElementById('producto-nombre').value;
        let precio = document.getElementById('producto-precio').value;
        let urlImagen = document.getElementById('producto-urlImagen').value;
        let tipoProductoSeleccionado = document.getElementById('tipo-producto').value;
        let categoriaSeleccionada = document.getElementById('categoria-producto').value;

        if (sku === '' || nombre === '' || precio === '' || urlImagen === '' || !tipoProductoSeleccionado || !categoriaSeleccionada) {
            swal.fire({
                icon: "error",
                title: "Datos incompletos",
                text: "Por favor, completa todos los campos",
            });
            return;
        }

        // Aquí deberías enviar la información a la API para agregar el producto
        let data = await agregarProducto(sku, nombre, precio, urlImagen, categoriaSeleccionada, tipoProductoSeleccionado);
        if (data.success) {
            swal.fire({
                icon: "success",
                title: "Producto agregado",
                text: "Producto agregado con éxito",
            });
        } else {
            swal.fire({
                icon: "error",
                title: data.message,
                text: "No se pudo agregar el producto",
            });
        }
    }
});

// Event listener para actualizar el datalist de categorías según el tipo de producto seleccionado
document.addEventListener('input', function (event) {
    if (event.target.id === 'tipo-producto') {
        let tipoSeleccionado = event.target.value;
        let tipoEncontrado = tiposDeProducto.find(tipo => tipo.nombre === tipoSeleccionado);

        let datalistCategorias = document.getElementById('datalist-categorias-producto');
        let inputCategorias = document.getElementById('categoria-producto');

        if (tipoEncontrado) {
            // Habilitar y rellenar el datalist de categorías
            datalistCategorias.innerHTML = tipoEncontrado.categorias.map(categoria => `
                <option value="${categoria.nombreCategoria}" data-id="${categoria.idCategoria}"></option>
            `).join('');
            inputCategorias.disabled = false;
        } else {
            // Deshabilitar si no se encuentra el tipo de producto
            datalistCategorias.innerHTML = '';
            inputCategorias.disabled = true;
        }
    }
});
