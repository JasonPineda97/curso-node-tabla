const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${5 * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${5 * i}\n`;
        }

        if (listar) {
            console.log('==============================='.green);
            console.log('          Tabla del:'.green, colors.blue(base));
            console.log('==============================='.green);
            console.log(consola);
        }

        if (listar == false) {
            console.log('Así que elegiste el camino de lee sin')
        }

        /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`Archivo tabla-${base}.txt creado`)
        }) */

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla.${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}