import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import "../index.css";

type ChildProps = {
  category: any;
};
//react al detectar un cambio en el estado de un comp, reejecuta el codigo del comp,
//para evitar que la peticion http, se repita en cada cambio de estado, usamos useEffect, si dejamos el array
//que recibe como dependencia vacio, solo se ejecutara una vez, es decir, cuando es renderizado por primera vez
const GifGrid = ({ category }: ChildProps) => {
  const { data: images, loading } = useFetchGifs(category);
  //con : renombramos el parametro

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <p className="animate__animated animate__flash">Loading...</p>
      ) : null}
      {/* otra forma de hacer esto seria {loading && <p>Loading...</p>}
      && significa que evalua la 1era condicion, y si no es verdadera, no ejecuta nada,
      como queremos que no se ejecute nada si no es true, es perfecto para el caso */}
      <div className="card-grid">
        {images.map(
          (img: {
            id: any;
            title: any;
            images: { downsized_medium: { url: any } };
          }) => (
            <GifGridItem key={img.id} {...img} />
            //copiamos toda la info de img a las props para trabajarlas de manera mas limpia
          )
        )}
      </div>
    </>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
