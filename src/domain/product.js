// Campos permitidos para un producto
const camposProducto = ['nombre', 'descripcion', 'precio', 'stock'];

// Validar los datos de un producto
export const validarProducto = (datos, parcial = false) => {
    const errores = [];

    if (!datos || typeof datos !== 'object' || Array.isArray(datos)) {
        return ['Los datos del producto deben ser un objeto'];
    }

    if (parcial && Object.keys(datos).length === 0) {
        errores.push('Debe proporcionar al menos un campo para actualizar');
    }

    for (const campo of Object.keys(datos)) {
        if (!camposProducto.includes(campo)) {
            errores.push(`El campo "${campo}" no está permitido`);
        }
    }

    for (const campo of camposProducto) {
        if (!parcial && !(campo in datos)) {
            errores.push(`El campo "${campo}" es obligatorio`);
            continue;
        }

        if (!(campo in datos)) {
            continue;
        }

        const valor = datos[campo];

        if (campo === 'nombre' || campo === 'descripcion') {
            if (typeof valor !== 'string' || valor.trim() === '') {
                errores.push(`El campo "${campo}" debe ser un texto válido`);
            }
        }

        if (campo === 'precio') {
            if (typeof valor !== 'number' || !Number.isFinite(valor) || valor < 0) {
                errores.push('El precio debe ser un número mayor o igual a cero');
            }
        }

        if (campo === 'stock') {
            if (!Number.isInteger(valor) || valor < 0) {
                errores.push('El stock debe ser un número entero mayor o igual a cero');
            }
        }
    }

    return errores;
};
