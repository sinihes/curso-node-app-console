const fs = require('fs');
const colors = require('colors');





const crearArchivo = async ( base = 5 , listar , hasta = 10) => {
  try {


    let salida  = '';
    let consola = ''
    for (let i = 0; i < hasta + 1; i++) {
      salida +=  `${base} x ${i} = ${base * i} \n`;
      consola += colors.yellow(base) + 'x'.red +  colors.yellow(i) +  '='.red + colors.yellow(base * i ) + '\n';
    }

    if(listar){
      console.log('==================='.rainbow)
      console.log('Tabla del:'.green, base)
      console.log('==================='.rainbow)
      console.log(consola)
    }
      
    
  

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`
  } catch (err) {
    console.log(err)
  }
}

module.exports = {crearArchivo}