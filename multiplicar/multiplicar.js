// requireds
const fs = require('fs');

let listarTabla = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`El valor '${base}' no es un número.`);
    }

    if (!Number(limite)) {
        throw new Error(`El limite '${limite}' no es un número.`);
    }

    let contenido = "";

    for (let i = 1; i <= limite; i++) {
        contenido += `${base} * ${i} = ${base * i}\n`;
    }

    return contenido;
}

let crearArchivo = async(base, limite = 10) => {

    if (!Number(base)) {
        throw new Error(`El valor '${base}' no es número.`);
    }

    if (!Number(limite)) {
        throw new Error(`El limite '${limite}' no es un número.`);
    }

    let contenido = "";

    for (let i = 1; i <= limite; i++) {
        contenido += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => {
        if (err)
            throw new Error(err);
    });

    return `tabla-${base}-al-${limite}.txt`;
}

module.exports = {
    crearArchivo,
    listarTabla
}