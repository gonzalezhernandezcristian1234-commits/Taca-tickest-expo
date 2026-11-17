const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;

    res.status(statusCode).json({
        estado: error.status || 'error',
        mensaje: error.message || 'Error interno del servidor'
    });
};

export default errorHandler;
