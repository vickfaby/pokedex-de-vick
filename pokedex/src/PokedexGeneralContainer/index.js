import React from "react";
import { PokedexCard } from "../PokedexCard";
import { PokedexContext } from "../PokedexContext";
import "./PokedexGeneralContainer.css";

function PokedexGeneralContainer (propiedades) {

    const {searchedPokemons} = React.useContext(PokedexContext);

    let newPokemon = [...searchedPokemons]; // Recibe el valor de pokemones desde el provider
    
        return(
            <div className="pokedexContainer"
            >
            {propiedades.children} 
            { newPokemon.map((pokemon) => (
                <PokedexCard
                key={pokemon.name}
                position={pokemon.id} 
                name={pokemon.name}
                url={pokemon.url} 
                >
                </PokedexCard>
            ))}           
            </div>
        );
    


}

export {PokedexGeneralContainer}