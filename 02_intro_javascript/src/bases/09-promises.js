import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//   //   console.log(heroe);
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     reject("No se pudo encontrar el heroe");
//   }, 2000);
// });

//las promesas admiten tres metodos, then, catch y finally.
//then se ejecuta si la promesa tuvo exito
// promesa
//   .then((heroe) => {
//     console.log("Heroe", heroe);
//   })
//   .catch((err) => console.warn(err));
//catch se ejecuta si la promesa no tuvo exito

//finally se ejecuta luego de que la promesa fue resulta, es decir luego de que se ejecute o then o catch

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    //   console.log(heroe);
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el Heroe. ");
      }
    }, 2000);
  });
};

//then dara el resultado del resolve, y catch dara reject en caso de un error.
getHeroeByIdAsync(250).then(console.log).catch(console.log);
