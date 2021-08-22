const nombre = "Jonathan";
const apellido = "Messina";

// const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${nombre} ${apellido} ${1 + 1}`;

console.log(nombreCompleto);

function getSaludo() {
  //utilizando template string
  return `Hola ${nombre}`;
}

//asignado como argumento a la funcion
// function getSaludo(nombre) {
//   return "Hola " + nombre;
// }

console.log(`Este es un texto de saludo, ${getSaludo()}.`);
