
import * as servicioProductos from '../services/productService.js';

// A continuacion consultamos todos los productos
export const obtenerProductos = async (req, res, next) => {
    try {
        const productos = await servicioProductos.getAllProducts();

        res.status(200).json(productos);
    } catch (error) {
        next(error);
    }
};

// consultamos un producto por identificador o por ID
export const obtenerProductoPorId = async (req, res, next) => {
    try {
        const producto = await servicioProductos.getProductById(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        res.status(200).json(producto);
    } catch (error) {
        next(error);
    }
};

// Registramos un producto
export const registrarProducto = async (req, res, next) => {
    try {
        const nuevoProducto = await servicioProductos.createProduct(req.body);

        res.status(201).json(nuevoProducto);
    } catch (error) {
        next(error);
    }
};
