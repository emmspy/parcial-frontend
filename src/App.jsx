import { useState } from 'react';
import './App.css'
import Card from './componets/Card'
import Form from './componets/Form';
import Image from './assets/d0ca0ab4f565bb69bc69e7c7f268ac95.jpeg'

function App() {
  const [card, setCard] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <>
      {card ? (
        <Card setCard={setCard} nombre={nombre} descripcion={descripcion} />
      ) : (
        <></>
      )}
      <div className="App">
        <img src={Image} alt="" />
        <h1>¿Cual es tu animal favorito?</h1>
        <Form
          setCard={setCard}
          setNombre={setNombre}
          setDescripcion={setDescripcion}
        />
      </div>
    </>
  );
}

export default App
