
import * as productRepository from '../repositories/productRepository.js';

// A continuacion consultamos todos los productos
export const getAllProducts = async () => {
    return await productRepository.findAll();
};

// Consultamos un producto por su identificador unico o por su ID
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
