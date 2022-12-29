import React from "react";
import { PokedexContext } from "../PokedexContext";
import "./PokemonSearch.css"

function PokemonSearch () {
     const {setSearchedValue} = React.useContext(PokedexContext);

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchedValue(event.target.value); // envia el valor de modificador
    }
    return(
        
        <input
        placeholder="Escribe tu pokemon..."
        onChange={onSearchValueChange}  
        >
        </input>
    )
}
 export {PokemonSearch}