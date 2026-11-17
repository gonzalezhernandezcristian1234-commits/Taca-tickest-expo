
import * as productRepository from '../repositories/productRepository.js';

// Consultamos todos los productos
export const getAllProducts = async () => {
    return await productRepository.findAll();
};

// consultamos un producto por su identificador unico o ID
export const getProductById = async (id) => {
    const productos = await productRepository.findAll();

    return productos.find(producto => producto.id === id);
};

// Registramos un producto
export const createProduct = async (productoDato) => {
    const productos = await productRepository.findAll();

    const nuevoProducto = {
        id: crypto.randomUUID(),
        ...productoDato
    };

    productos.push(nuevoProducto);

    await productRepository.saveAll(productos);

    return nuevoProducto;
};

// Actualizamos un producto
export const updateProduct = async (id, datosActualizados) => {
    const productos = await productRepository.findAll();

    const indice = productos.findIndex(producto => producto.id === id);

    if (indice === -1) {
        return null;
    }

    productos[indice] = {
        ...productos[indice],
        ...datosActualizados,
        id
    };

    await productRepository.saveAll(productos);

    return productos[indice];
};

// Eliminamos un producto
export const deleteProduct = async (id) => {
    const productos = await productRepository.findAll();

    const productosFiltrados = productos.filter(
        producto => producto.id !== id
    );

    if (productos.length === productosFiltrados.length) {
        return false;
    }

    await productRepository.saveAll(productosFiltrados);

    return true;
};
