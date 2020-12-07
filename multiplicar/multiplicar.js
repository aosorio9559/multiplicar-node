const fs = require("fs");
// const colors = require("colors");

function crearArchivo(base, limite) {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ${base} no es un número`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}-al-${limite}.txt`.red);
    });
  });
}

function listarTabla(base, limite) {
  console.log("====================".bgWhite.green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
}

module.exports = {
  crearArchivo,
  listarTabla
};
