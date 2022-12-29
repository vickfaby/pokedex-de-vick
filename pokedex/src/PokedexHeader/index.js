import React from "react";
import "./PokedexHeader.css";
import "../PokemonSearch";
import { PokemonSearch } from "../PokemonSearch";
import { PokedexContext } from "../PokedexContext";

function PokedexHeader(){
  const {ConsultaPokemones} = React.useContext(PokedexContext);
return(

    <header  >
        <div className="perfil" >
                <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/ash-ketchum-pikachu.jpg?itok=24Rzcpzk" alt="ash"></img>
            <span className="pokedexHeaderTrainerName">Entrenador</span>
        </div>
    <PokemonSearch>
        
    </PokemonSearch>
        <button onClick={ConsultaPokemones}>DEX</button>
    </header>
);
}
export {PokedexHeader}