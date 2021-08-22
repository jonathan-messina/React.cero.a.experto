console.log("Hola Mundo");

//Variables y Constantes

const nombre = "Fernando";
const apellido = "Herrera";

let valorDado = 5;
valorDado = 4; //para cambiar el valor a la variable, no se debe repetir el let

console.log(nombre, apellido, valorDado);

if (true) {
  const nombre = "Peter";
  let valorDado = 6; //puede reusarse variables dentro de bloques,
  // ya que solo existiran e interactuaran dentro de ese bloque.
  console.log(valorDado, nombre);
}
