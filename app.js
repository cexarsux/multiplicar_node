const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(contenidoTabla => {
            console.log("===============================================".green);
            console.log(`TABLA DE ${argv.base} A ${argv.limite}`);
            console.log("===============================================".green);
            console.log(contenidoTabla);
        }).catch(err => {
            console.log(err);
        });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado ${ archivo.red }`);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log("Comando no reconocido.");
        break;
}

// console.log("Limite", argv.limite);