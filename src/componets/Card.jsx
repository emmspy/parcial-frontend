import React from "react";

const Card = ({ nombre, descripcion }) => {
  return (
    <div className="contenedor-card">
      <h2>Estas son tus respuestas!</h2>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default Card;
