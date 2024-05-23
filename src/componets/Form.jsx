import React, { useState } from "react";

const Form = ({ setCard, setNombre, setDescripcion }) => {
  const [nombreForm, setNombreForm] = useState("");
  const handleName = (e) => setNombreForm(e.target.value);

  const [descripcionForm, setDescripcionForm] = useState("");
  const handleDescripcion = (e) => setDescripcionForm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombreForm.length > 2 && descripcionForm.length > 5) {
      setCard(true);
      setDescripcion(descripcionForm);
      setNombre(nombreForm);
    } else {
      alert("Por favor chequea que la información sea correcta");
      setCard(false);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          className="form-input"
          type="text"
          value={nombreForm}
          onChange={handleName}
        />
        <label>Cuentanos por qué</label>
        <textarea
          className="form-input"
          value={descripcionForm}
          onChange={handleDescripcion}></textarea>
        <button className="boton-enviar" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
