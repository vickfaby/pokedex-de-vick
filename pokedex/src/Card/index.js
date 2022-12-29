import React from "react";
import { PokedexContext } from "../PokedexContext";
import "./Card.css";

function Card() {
  const { setOpenModal, clickedPokemon, searchedPokemons } =
    React.useContext(PokedexContext);

  const clickeado = clickedPokemon;
  const pokemonesFiltrados = [...searchedPokemons];

  const dato = pokemonesFiltrados.filter((pokemon) => {
    return pokemon.name === clickeado;
  });
  console.log("este es el objeto clickado");
  console.log(dato);

  return (
    <div className="Card">
      <img src={dato[0].url}></img>

      <div>
        <span>Name: </span>
        <span>{dato[0].name}</span>
      </div>

      <div>
      <span>Numero: </span>
      <span>{dato[0].id}</span>
      </div>

      <div>
      <span>Tipo:  </span>
      <span>{dato[0].tipo}</span>
      </div>

      <button className="buttonCard" onClick={() => setOpenModal(false)}>Close</button>
    </div>
  );
}
export { Card };
