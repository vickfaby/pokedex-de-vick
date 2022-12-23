import React from "react";
import { PokedexCard } from "../PokedexCard";
import { PokedexContext } from "../PokedexContext";
import "./PokedexGeneralContainer.css";

function PokedexGeneralContainer () {

    const {pokemones, ConsultaPokemones,
        urlsPokemon} = React.useContext(PokedexContext);

    let newPokemon = [...pokemones]; // Recibe el valor de pokemones desde el provider
    let newDatos = [...urlsPokemon];
        return(
            <div className="pokedexContainer"
            onClick={ConsultaPokemones}
            > 
            { newPokemon.map((pokemon) => (
                <PokedexCard
                key={pokemon.name}
                position={newPokemon.indexOf(pokemon)+1}
                name={pokemon.name}
                url={newDatos[newPokemon.indexOf(pokemon)]} 
                >
                </PokedexCard>
            ))}           
            </div>
        );
    


}

export {PokedexGeneralContainer}