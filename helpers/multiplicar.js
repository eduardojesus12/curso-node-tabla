const fs = require('fs');
const colors = require('colors');

// Mi solución
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            consola +=`${colors.yellow(base)} X ${colors.magenta(i)} = ${colors.brightGreen(base * i)}\n`;
            salida +=`${base} X ${i} = ${base * i}\n`;
        }

        if(listar) {
            console.log('============================'.blue)
            console.log('Tabla del:'.gray, colors.green(base))
            console.log('============================'.blue)
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`;
    } catch (err) {
        throw err;
    }

}

// const crearArchivo = async(base = 5) => {

//     return new Promise((resolve, reject) => {

//         console.log('============================')
//         console.log('Tabla del:',base)
//         console.log('============================')
    
//         let salida = ''
    
//         for (let i = 1; i <= 10; i++) {
//             salida +=`${base} X ${i} = ${base * i}\n`;
//         }
//         console.log(salida)
        
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla-${base}.txt creada`);
//     })


// }

module.exports = {
    crearArchivo
}
