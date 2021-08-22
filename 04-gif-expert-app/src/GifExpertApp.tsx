import React, { useState } from "react";

export const GifExpertApp = () => {
  //const categories = ['One punch','Dragon ball','Samurai X'];
  const [categories, setCategories] = useState([
    "One punch",
    "Dragon ball",
    "Samurai X",
  ]);

  const handleAdd = () => {
    //al añadir algo a un estado, debemos traer la info del estado anterior, ya que sino lo
    //lo sobreescribiremos, ..categories, trae todo dentro de categories.
    //cada nuevo estado sobreescribe al anterior
    setCategories([...categories, "HunterXHunter"]);
    //otra forma de hacerlo seria con un callback
    // setCategories(cats =>[...cats, 'HunterXHunter']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category, index) => {
          return <li key="category">{category}</li>;
        })}
      </ol>
    </>
  );
};
