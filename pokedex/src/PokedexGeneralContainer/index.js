import React, { useRef } from "react";
import { CardSkeleton } from "../CardSkeleton";
import { PokedexCard } from "../PokedexCard";
import { PokedexContext } from "../PokedexContext";
import "./PokedexGeneralContainer.css";

function PokedexGeneralContainer(propiedades) {
  const { setObserver,cardLimit,cardCount, setCardCount} = React.useContext(PokedexContext);
  let cuentaDeRenders = 0;
  

  return (
    <div className="pokedexContainer" id="pokedexGeneralContainer">
      {propiedades.children}
    </div>
  );
}

export { PokedexGeneralContainer };
