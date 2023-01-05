import React from "react";
import { PokedexContext } from "../PokedexContext";
import "./LoadButton.css"
function LoadButton() {
    const {ConsultaPokemones,offset} = React.useContext(PokedexContext);
return(
    <div className="loadButton" onClick={()=>ConsultaPokemones(offset)} id="boton" >
        <span>CLICK TO LOAD POKEMONS...</span>
    </div>
)
}

export {LoadButton}