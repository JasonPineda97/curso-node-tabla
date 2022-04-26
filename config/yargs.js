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
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Este es el número hasta donde quieres la tabla'
            })
            .check( (argv, options) => {
                if( isNaN( argv.b )){
                    throw 'La base debe ser un número'
                }
                if( isNaN( argv.h )){
                    throw 'El límite debe ser un número'
                }
                return true;
            })
            .argv;

module.exports = argv;