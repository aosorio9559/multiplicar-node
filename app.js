const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
const colors = require("colors");

const argv2 = process.argv;

const comando = argv._[0];
// console.log(argv._);

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado ${archivo}`))
      .catch(console.log);
    break;
  default:
    console.log("Comando no reconocido");
    break;
}

// const parametro = argv2[2];
// const base = parametro.split("=")[1];
