//operador condicional ternario
//forma corta de tomar una decision

//forma normal sin condicional ternario

const activo = true;

// let mensaje = "";

// if (activo) {
//   mensaje = "Activo";
// } else {
//   mensaje = "Inactivo";
// }

// console.log(mensaje);

//forma usando condicional ternario

const mensaje = activo ? "Activo" : "Inactivo";

//se consulta a la funcion la condicion y si es true, se da la primera propiedad, caso contrario la segunda.

//el operador condicional si o si necesita un else, por lo que para una consulta singular, se usa &&
//&& sirve para chequear la condicion, pero no hacer nada en caso de que no se cumpla, solo se ejecuta si la consulta es true.

// const mensaje = activo && "Activo";

console.log(mensaje);
