import * as servicioProductos from '../services/productService.js';
import { validarProducto } from '../domain/product.js';
import AppError from '../errors/AppError.js';

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
        const errores = validarProducto(req.body);

        if (errores.length > 0) {
            return next(new AppError(errores.join(', '), 400));
        }
        const nuevoProducto = await servicioProductos.createProduct(req.body);

        res.status(201).json(nuevoProducto);
    } catch (error) {
        next(error);
    }
};


// Actualizamos un producto
export const actualizarProducto = async (req, res, next) => {
    try {
        const errores = validarProducto(req.body, true);

        if (errores.length > 0) {
            return next(new AppError(errores.join(', '), 400));
        }
        const productoActualizado = await servicioProductos.updateProduct(
            req.params.id,
            req.body
        );

        if (!productoActualizado) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        res.status(200).json(productoActualizado);
    } catch (error) {
        next(error);
    }
};

// Eliminamos un producto
export const eliminarProducto = async (req, res, next) => {
    try {
        const eliminado = await servicioProductos.deleteProduct(req.params.id);

        if (!eliminado) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Producto eliminado correctamente'
        });
    } catch (error) {
        next(error);
    }
};



