//los custom hooks son basicamente funciones modulares, es decir funciones en archivos separados
//permiten abstraer logica del archivo principal

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: any) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  //getGifs es una promesa, por lo que necesita un then que diga que hara con lo traido en la peticion
  //si una funcion posee un primer argumento que es mandado como 1er arg a la func que le sigue, pueden borrarse los
  //arg, dejando solo la funcion : .then(setImages);
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setstate({ data: imgs, loading: false });
    });
  }, [category]);
  //useEffect marca que solo se ejecutara el codigo dentro, si se actualiza lo que esta en sus dependencias, o solo una vez si la dependencia esta vacia

  return state;
};
