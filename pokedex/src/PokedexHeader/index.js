import React from "react";
import "./PokedexHeader.css";

function PokedexHeader(){
return(

    <header>
        <div className="perfil">
                <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/ash-ketchum-pikachu.jpg?itok=24Rzcpzk" alt="ash"></img>
            <span className="pokedexHeaderTrainerName">Entrenador</span>
        </div>
        <input></input>
        <button>Dex</button>
    </header>
);
}
export {PokedexHeader}