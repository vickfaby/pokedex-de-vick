import React from "react";
import { PokedexCard } from "../PokedexCard";
import { PokedexContext } from "../PokedexContext";
import "./PokedexGeneralContainer.css";

function PokedexGeneralContainer () {

    const {pokemones, ConsultaPokemones} = React.useContext(PokedexContext);

    let newPokemon = [...pokemones];
    console.log('Este es el newPokemon');
    console.log(newPokemon);

        return(
            <div className="pokedexContainer"
            onClick={ConsultaPokemones}
            > 
            { newPokemon.map((pokemon) => (
                <PokedexCard
                key={pokemon.name}
                position={newPokemon.indexOf(pokemon)}
                name={pokemon.name}
                >
                </PokedexCard>
            ))}           
            </div>
        );
    


}

export {PokedexGeneralContainer}