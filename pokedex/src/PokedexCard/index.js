import React from "react";
import { PokedexContext } from "../PokedexContext";
import "./PokedexCard.css"

function PokedexCard(propiedades) {
  const {setOpenModal,openModal,clickedPokemon, setClickedPokemon} = React.useContext(PokedexContext);
  const onClick = ()=>{
    setOpenModal(true);
    setClickedPokemon(propiedades.name);
  }
    return(
        <div 
        className="pokedexCard"
        onClick={onClick}
        >
            <span
            >{`#${propiedades.position}`}</span>
            <img 
            className="pokedexCardImage"
            alt="un pokemón"
            src={propiedades.url}
            ></img>
            <span>{(propiedades.name).toLocaleUpperCase()}</span>
        </div>
    );
}
export {PokedexCard}