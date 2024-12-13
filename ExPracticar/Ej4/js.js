const productos = [
    { nombre: 'Producto 1', precio: 100, categoria: 'A' },
    { nombre: 'Producto 2', precio: 200, categoria: 'B' },
    { nombre: 'Producto 3', precio: 150, categoria: 'A' },
    { nombre: 'Producto 4', precio: 300, categoria: 'C' },
    { nombre: 'Producto 5', precio: 250, categoria: 'B' }
];

const filtrarPorCategoria = (productos, categoria) => {
    return productos.filter(producto => producto.categoria === categoria);
};

const ordenarPorPrecio = (productos) => {
    return productos.sort((a, b) => a.precio - b.precio);
};

const generarCatalogo = (productos) => {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = ''; // Limpiar el catálogo existente

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';
        productoDiv.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <p>Categoría: ${producto.categoria}</p>
        `;
        catalogo.appendChild(productoDiv);
    });
};

// Ejemplo de uso
const productosFiltrados = filtrarPorCategoria(productos, 'A');
const productosOrdenados = ordenarPorPrecio(productosFiltrados);
generarCatalogo(productosOrdenados);
