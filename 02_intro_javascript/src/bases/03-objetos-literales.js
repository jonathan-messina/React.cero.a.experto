//objetos literales o diccionarios

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 53332351,
    lat: 14.246464,
    lng: 34.924646,
  },
};

//se crea un nuevo objeto, con una propiedad llamada
//persona que apunta al valor del objeto persona
console.log({
  persona,
});

//copiar objeto dentro de un objeto
console.table({ persona });

//al "clonar" un objeto, no se copia la informacion en si, sino la referencia al espacio en memoria del objeto, es decir, un link o acceso directo.

// const persona2 = persona;

//esta forma no debe hacerse, solo se crea un link, por lo que al modificar persona2, tambien se modificara persona

//la forma correcta de hacerlo es:

const persona2 = { ...persona };

//al usar "spread" es decir "...", se copia todo el contenido del primer objeto a un nuevo espacio en memoria, ahorrandonos copiar y pegar el contenido del objeto.

console.log(persona2);
