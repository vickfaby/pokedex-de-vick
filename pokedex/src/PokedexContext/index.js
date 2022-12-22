import React from "react";
import axios from "axios";

const PokedexContext = React.createContext();
//EL PROVIDER PROVEE TODOS LOS DATOS NECESARIOS PARA LOS COMPONENTES.

function PokedexProvider(propiedades){
    const pokemonesFijos = [
        {name:'pikachu'},
        {name:'baulbasor'},
        {name:'charmander'},
        {name:'raichu'},
        {name:'methapod'},
        {name:'gengar'},
        {name:'toquepi'},
        {name:'zapdots'},
        {name:'qubone'},
    ];

    const [pokemones, setPokemones] = React.useState(pokemonesFijos);
        //pokemons empieza como un vacio ""

    const api = axios.create({
        baseURL:'https://pokeapi.co/api/v2/',
        params:{
            offset: "0",
            limit: "150",
        }
    });
    const ConsultaPokemones = async ()=> {
        const {data} = await api('pokemon');
        setPokemones(data.results); // guarda el nuevo valor en la variable pokemones
        console.log('Estos son los resultados de la consulta pokemon: ');
        console.log(data.results);
    };
    return(
        <PokedexContext.Provider 
        value={{
            setPokemones,
            pokemones,
            ConsultaPokemones,
            api,
            // estos son los valores q se exportan a los componentes
        }} >
            {propiedades.children}
            {/* pasa la propiedad a los componenetes hijos */}
        </PokedexContext.Provider>
    );
}
export {PokedexContext , PokedexProvider}