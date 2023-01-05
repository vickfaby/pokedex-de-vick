import React from "react";
import { PokedexCard } from "../PokedexCard";
import { PokedexContext } from "../PokedexContext";
import "./CardsContainer.css";
function CardsContainer(propiedades) {
  const {
    searchedPokemons,
    isLoading,
    lastIdCard,
    setLastIdCard,
    setObserver,
    myRef,
    cardLimit,
    cardCount,
    setCardCount,
  } = React.useContext(PokedexContext);

  let newPokemon = [];
  newPokemon = [...searchedPokemons]; // Recibe el valor de pokemones desde el provider

  return (
    <div
      className="cardsContainer"
      id="cardsContainer"
      onLoad={setObserver}
    >
      {propiedades.children}
      {newPokemon.map((pokemon) => (
        <PokedexCard
          key={pokemon.name}
          position={pokemon.id}
          name={pokemon.name}
          url={pokemon.url}
        ></PokedexCard>
      ))}
    </div>
  );
}

export { CardsContainer };
