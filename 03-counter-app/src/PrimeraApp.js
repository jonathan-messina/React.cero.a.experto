import React from "react";
import PropTypes from "prop-types";

//con imr importamos react

//los archivos de componentes se escriben con upper camel case.

//hay dos tipos de componentes, los basados en clases y los basados en funciones.
//los basados en funciones son los mas usados y se llaman functional components.

const PrimeraApp = ({ saludo, subtitulo }) => {
  //usamos la desestructuracion, de el objeto props, que todos los componentes poseen
  //utilizamos el metodo saludo, usando {}
  // props.saludo es igual a {saludo}
  //podemos tambien asignar un valor por defecto, ej: {(saludo='Hola Nekoko')}

  //Otra forma de asignar valores por defecto es poner fuera del corchete de la app,
  //similar a donde ponemos los proptypes una seccion de defaultProps.

  //PrimeraAPP.defaultProps ={
  // saludo: 'Hola soy Nekoki
  //}
  // algo que se suele hacer es ponerlos vacios, para que luego aparezcan listados en components en google devtools, asi se sabe que un valor debe ir ahi

  // const nombre_saludo = 'Nekoki'
  // const saludo = ` Hola ${ nombre_saludo }!`;

  return (
    <>
      <h1> {saludo} </h1>{" "}
      {/*obtenemos de las props, la funcion deseada, props es un objeto */}
      {/*Puede aceptar strings, arrays y numeros, pero no imprimira booleans, los objetos requeriran un comando */}
      {/* Para imprimir un objeto se usa JSON.stringify(saludo), no sale formateado, por lo que requiere mas procesos, podemos verlo en la documentacion de mozilla */}
      <h3> {subtitulo} </h3>
    </>
  );
  //javascript solo puede retornar un objeto a la vez
  //si queremos retorar mas de una cosa, debemos agruparlo en un elemento  y luego ();
  //es decir return (saludo, saludo1, saludo2);

  //Fragment y <> </>
  // es un modulo usado para encapsular como lo haria un div,
  //pero en vez de necesitar renderizar un div,  es como un "div fantasma",
  //por lo que no usamos memoria para renderizar ese contenedor fantasma, ahorrando en computo.

  //una forma de usar fragment, sin importarlo, es usar unas llaves vacias
  //    <>
  //    </>
  //react lee esto y lo interpreta como un fragment
};

//Validaciones de tipo
//importamos PropTypes 'prop-types'
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  //validacion de tipo

  //podemos pedir que cierto elemento lleve si o si un tipo de dato( ej: string,array, number, boolean )
  //con string, decimos que solo acepte un string,
  //validacion de requerimiento

  //con isRequired decimos que si o si debe ingresarse un valor, no puede estar vacio
};
PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;

//comunicacion entre componentes
//props :propiedades de los componentes
