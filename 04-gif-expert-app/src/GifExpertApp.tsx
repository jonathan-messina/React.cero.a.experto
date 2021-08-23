import React, { useState } from "react";
import { AddCategory } from "./componentes/AddCategory";
import GifGrid from "./componentes/GifGrid";
import "animate.css";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   //al añadir algo a un estado, debemos traer la info del estado anterior, ya que sino lo
  //   //lo sobreescribiremos, ..categories, trae todo dentro de categories.
  //   //cada nuevo estado sobreescribe al anterior
  //   setCategories([...categories, "HunterXHunter"]);
  //   //otra forma de hacerlo seria con un callback
  //   // setCategories(cats =>[...cats, 'HunterXHunter']);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          // eslint-disable-next-line
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
