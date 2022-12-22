import React from "react";
import {PokedexHeader} from "../PokedexHeader"
import {PokedexGeneralContainer} from "../PokedexGeneralContainer";
import {PokedexCard} from "../PokedexCard";
import { PokedexContext } from "../PokedexContext";
//Dentro de esta carpeta, se colocaran los componentes que se verán en la interfaz de usuario. Todos estos componentes i ran dentro del componente general <React.Fragment></React.Fragment>.

// A cada uno de los componentes creados, se les creara una carpeta con su correspondientes index.js y su nombre_de_componente.css, fuera de la carpeta App y luego de esto debe importar en el encabezado de este documento.

function AppUI(){
const { setPokemones, pokemones, ConsultaPokemones} = React.useContext(PokedexContext);
//ConsultaPokemones();
return(
    <React.Fragment>
        <PokedexHeader>
        </PokedexHeader>
        <PokedexGeneralContainer>
            <PokedexCard>
            </PokedexCard>
        </PokedexGeneralContainer>
    </React.Fragment>
);
}

export{AppUI}
