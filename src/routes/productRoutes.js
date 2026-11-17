
import { Router } from 'express';

import { obtenerProductos, obtenerProductoPorId, registrarProducto, actualizarProducto, eliminarProducto } from '../controllers/productController.js';

const router = Router();

// Consultamos todos los productos
router.get('/', obtenerProductos);

// Consultamos un producto por su identificador unico o ID
router.get('/:id', obtenerProductoPorId);

// Registramos un producto
router.post('/', registrarProducto);

// Actualizamos un producto
router.put('/:id', actualizarProducto);

// Eliminamos un producto
router.delete('/:id', eliminarProducto);

export default router;
