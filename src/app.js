
import express from 'express';
import rutasProductos from './routes/productRoutes.js';
import errorHandler from './middlewares/ErrorHandler.js';

const app = express();

// Interpretar solicitudes en formato JSON
app.use(express.json());

// Ruta para comprobar el funcionamiento de la API
app.get('/health', (req, res) => {
    res.status(200).json({
        estado: 'correcto',
        servicio: 'inventory-api'
    });
});

// Registrar las rutas de productos
app.use('/api/products', rutasProductos);

// Middleware global para manejar errores
app.use(errorHandler);

export default app;
