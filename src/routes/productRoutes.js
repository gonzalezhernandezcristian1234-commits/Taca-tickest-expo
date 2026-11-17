import { Router } from "express";

import { obtenerProductoPorId, obtenerProductos, registrarProducto } from "../controllers/productController";

const router = Router();

// consultamos todos los productos
router.get('/', obtenerProductos);

// Consultamos un producto por su identificador unico o ID
router.get('/:id', obtenerProductoPorId);

// Registramos un producto 
router.post('/', registrarProducto);

export default router;
