//Desestructuracion o asignacion desestructurante.

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  nacionalidad: "Estadounidense",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//para evitar usar persona.nombre se utiliza la asig destruc.

const { nombre } = persona;

//extrae lo solicitado, del objeto persona

console.log(nombre);

//pueden renombrarse agregando : y el nuevo nombre

const { nombre: nombre2 } = persona;

console.log(nombre2);

const { nombre3, edad, clave } = persona;

console.log(nombre3);
console.log(edad);
console.log(clave);

//se pueden adicionar valores por defecto como argumentos, si el primer objeto ya posia el valor adicionado, se ignorara el valor por defecto y se utilizara el valor extraido del primer objeto

const usContext = ({ clave, nombre, edad, nacionalidad = "Argentina" }) => {
  console.log(nombre, edad, nacionalidad);

  return {
    //objeto padre
    nombreClave: clave,
    anios: edad,
    latlng: {
      //objeto anidado
      lat: 14.545,
      lng: -30.543,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
  // eslint-disable-next-line react-hooks/rules-of-hooks
} = usContext(persona); //extraer objetos anidados tornandolos sus propias const

//otra forma de hacerlo seria:
// const {lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng); //devuelve el objeto separado en const

//basicamente la desestructuracion, es extraer valores de los objetos y con ello crear objetos nuevo que contengan los datos extraidos.
