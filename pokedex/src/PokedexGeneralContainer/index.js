import React from "react";
import { PokedexCard } from "../PokedexCard";
import "./PokedexGeneralContainer.css";

function PokedexGeneralContainer () {
    const [cosa, setCosa] = React.useState(false);
    const pokemones = [
        {name:'pikachu'},
        {name:'baulbasor'},
        {name:'charmander'},
    ];
    return(
        <div className="pokedexContainer"> 
        {pokemones.map((pokemon) => (
            <PokedexCard
            key={pokemon.name}
            position={pokemones.indexOf(pokemon)}
            name={pokemon.name}
            ></PokedexCard>
        ))}           
        </div>
    );

}

export {PokedexGeneralContainer}