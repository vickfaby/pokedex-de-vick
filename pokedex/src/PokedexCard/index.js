import React from "react";
import "./PokedexCard.css"

function PokedexCard(propiedades) {
    return(
        <div className="pokedexCard">
            <span>{propiedades.position}</span>
            <img src="https://www.primecomics.com.co/images/feature_variant/3/pikachu.jpg" alt="un pokemón"></img>
            <span>{propiedades.name}</span>
        </div>
    );
}

export {PokedexCard}