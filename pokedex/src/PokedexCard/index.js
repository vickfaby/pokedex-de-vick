import React, { Suspense } from "react";
import { PokedexContext } from "../PokedexContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./PokedexCard.css";
import { CardSkeleton } from "../CardSkeleton";

function PokedexCard(propiedades) {
  const {
    setOpenModal,
    setClickedPokemon,
    isLoading,
    ConsultaPokemones,
    lastIdCard,
    setLastIdCard,
    setObserver,
  } = React.useContext(PokedexContext);

  const onClick = () => {
    setOpenModal(true);
    setClickedPokemon(propiedades.name);
  };


  return (
    <div
      className="pokedexCard"
      onClick={onClick}
      id={`pokemon_${propiedades.position}`}
    >
      <span>{`#${propiedades.position}`}</span>
      <img
        className="pokedexCardImage"
        alt="un pokemón"
        src={propiedades.url}
      ></img>
      <span>{propiedades.name.toLocaleUpperCase()}</span>
    </div>
  );
}
export { PokedexCard };
