import React, { useState } from "react";
import { AddCategory } from "./componentes/AddCategory";

// type Category = {
//   title: string;
// };
// type Props = {
//   /*props properties*/
// };
// type State = {
//   categories: { [key: string]: Category };
// };

export const GifExpertApp = () => {
  //const categories = ['One punch','Dragon ball','Samurai X'];
  // eslint-disable-next-line
  const [categories, setCategories] = useState([
    "One punch",
    "Dragon ball",
    "Samurai X",
  ]);

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
      <button>Agregar</button>
      <ol>
        {categories.map((category) => {
          // eslint-disable-next-line
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
