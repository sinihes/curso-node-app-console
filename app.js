const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./configs/yargs')

console.clear();




crearArchivo( argv.base , argv.listar , argv.hasta)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err)) 