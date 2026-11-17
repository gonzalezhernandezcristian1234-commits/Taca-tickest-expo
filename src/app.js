import express from 'express';
import rutasProductos from './routes/productRoutes.js';

const app = express();

// Interpretamos solicitudes en formato JSON
app.use(express.json());

// con esta ruta comprobamos el funcionamiento de la API
app.get('/health', (req, res) => {
    res.status(200).json({
        estado: 'correcto',
        servicio: 'inventory-api'
    });
});

// Registramos las rutas de los productos
app.use('/api/products', rutasProductos);

export default app;

