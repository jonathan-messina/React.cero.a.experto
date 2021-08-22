// import, export, find y funciones para arreays

import heroes /*{ owners }*/ from "../data/heroes";

//heroes no lleva llaves ya que esta importado por default, pero par ahacer una importacion normal, como con owners, se necesita usar llaves.

// console.log(owners);

// console.log(heroes);
// al escribir heroes ya se reconoce que se solicita eso, por lo que autocompleta el import

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//puede simplificarse la expresion de esta manera, ya que se espera que de true al igualar, y en todos los otros casos, dara false, ademas al ser una funcion flecha que solo devuelve un return, se lo puede obviar junto con las llaves.

// console.log(getHeroeById(2));

//filter devuelve todos los valores que regresen true a la igualdad
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner("DC"));

//multiples importaciones y exportaciones

//autoimportacion:
//si le colocamos al archivo del cual exportar al final del doc 'export default nombrex', si en el archivo donde debe importarse escribimos ese nombrex, nos autocompletara la ruta de importacion
