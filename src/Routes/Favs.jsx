import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const localStorageFavoritos = JSON.parse(localStorage.getItem('favs')) || []

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {localStorageFavoritos.map(dentista => (<Card key={dentista.id} dentista={dentista}/>))}
      
      </div>
    </>
  );
};

export default Favs;
