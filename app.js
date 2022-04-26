const { crearArchivo } = require('./helpers/multiplicar')
const argv  = require('./config/yargs')

require('colors');
//const base = 3;

console.clear();

/* const [ , , arg3 = 'base=5'] = process.argv;
const[ , base = 5] = arg3.split('='); */

console.log(argv);

console.log('base: yargs', argv.base);
crearArchivo( argv.base, argv.l, argv.hasta)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));
