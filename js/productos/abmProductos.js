import { generarListaProductos } from './generarListaProductosEnABM.js';
import { getProductos, eliminarProducto, editarProducto } from './productos_repository.js';

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
