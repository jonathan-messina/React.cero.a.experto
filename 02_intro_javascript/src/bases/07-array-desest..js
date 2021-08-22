// Desestructuacion de Arrays

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;
// cada valor representa un indice del array, para saltear indices se utilizan las comas.
console.log(p3);

//para cambiar referencias de manera global se puede usar F2 al modificar un nombre.

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
//el valor letras representa a la posicion 0 del array, el valor numeros represanta a la posicion 1 del array.

console.log(letras, numeros);

const usState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = usState("Goku");
console.log(nombre);
setNombre();
