import { type } from "os";
import React, { useState } from "react";
import PropTypes from "prop-types";

type ChildProps = {
  setCategories: (cats: any) => void;
};

export const AddCategory = ({ setCategories }: ChildProps) => {
  const [inputValue, setInputValue] = useState("");
  // e se puede llamar de cualquier forma, es el lugar donde almacenamos transitoriamente la informacion, por razones de claridad usamos una sola letra
  const handleInputChange = (e: { target: { value: any } }) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats: any) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.prototypes = {
  setCategories: PropTypes.func.isRequired,
};
