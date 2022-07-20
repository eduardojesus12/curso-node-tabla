const { crearArchivo } = require('./helpers/multiplicar')
// 5 x 1
// 5 x 2
// 5 x 3
// 5 x 4
// 5 x 5
// 5 x 6
// 5 x 7
// 5 x 8
// 5 x 9
// 5 x 10

const base = 8;
console.clear();
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
// console.log('============================')
// console.log(`Tabla del: ${base}`)
// console.log('============================')

// let salida = ''

// for (let i = 1; i <= 10; i++) {
//     salida +=`${base} X ${i} = ${base * i}\n`;
// }

// console.log(salida)
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creada`)
// });
// fs.writeFileSync(`tabla-${base}.txt`, salida);
// console.log(`tabla-${base}.txt creada`)