//Funciones en JS
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

console.log(saludar("Goku"));

//para evitar sobreescribir funciones, es recomendable incluirlas dentro de una const

//Funcion de flecha

const saludar2 = (nombre) => {
  return `Hola, ${nombre}.`;
};

console.log(saludar2("Vegeta"));

//permiten obviar el return si lo unico que hace la funcion es tener un unico return.

const saludar3 = (nombre) => `Hola, ${nombre}.`;

console.log(saludar3("Raditz"));

// para retornar objetos obviando el return, se debe usar ({})

const getUser = () => ({
  uid: "ABC123",
  username: "elnekoloko12",
});

console.log(getUser());

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Jonathan");
console.log(usuarioActivo);
