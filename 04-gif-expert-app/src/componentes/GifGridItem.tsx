import React from "react";
import "../index.css";

export const GifGridItem = ({ id, title, url }: any) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
