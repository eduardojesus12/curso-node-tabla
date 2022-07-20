const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false
            })
            .check((argv, options) => {
                // console.log('yargs', argv)
                if (isNaN(argv.b)) {
                    throw 'La base tiene que se un número'
                }
                // if (typeof(argv.l) == 'boolean') {
                //     throw 'La lista debe ser booleana'
                // }
                return true;
            })
            .argv;
// option('l');
// listar
// boolean
// default: false

console.clear();

// console.log(process.argv)
console.log(argv);

console.log('base: yargs', argv.base)

// const base = 8;
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
