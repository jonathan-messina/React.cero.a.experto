// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from "../data/heroes";
//si no tiene {} se hace una importacion por defecto, por lo tanto en el archivo de exportacion debe hacerse
// console.log( owners );

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );
