import React from "react";
import { PokedexContext } from "../PokedexContext";
import "./PokedexCard.css"

function PokedexCard(propiedades) {

    return(
        <div 
        className="pokedexCard"
        >
            <span>{propiedades.position}</span>
            <img 
            className="pokedexCardImage"
            alt="un pokemón"></img>
            <span>{propiedades.name}</span>
        </div>
    );
}
export {PokedexCard}