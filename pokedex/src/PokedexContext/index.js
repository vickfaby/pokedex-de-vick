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
    const [urlsPokemon, setUrlPokemones] = React.useState([]);
    const api = axios.create({
        baseURL:'https://pokeapi.co/api/v2/pokemon',
        // params:{
        //     offset: "0",
        //     limit: "150",
        // }
    });
    const ConsultaPokemones = async ()=> {
        const {data} = await api('');
        setPokemones(data.results); // guarda el nuevo valor en la variable pokemones
        const newPokemons = data.results;
        
        console.log('Estos son los resultados de la consulta pokemon: ');
        console.log(data.results);
        const newDatosPokemons = [];
        newPokemons.map((pokemon)=>(
            newDatosPokemons.push(ConsultaDatosPokemon(newPokemons.indexOf(pokemon)+1))
        ))
    };

    const datosCompletos = [];
    const urlList = [];

     const ConsultaDatosPokemon = async (numberOfPokemon) => {
        const {data} = await api('/'+ numberOfPokemon);
        datosCompletos.push(data);
        console.log(`Este es el resultado de la consulta: pokemon/${numberOfPokemon}`);
        console.log(data);    

        if(datosCompletos.length === 20 ){
            datosCompletos.map((dato)=>(
                urlList.push(datosCompletos[datosCompletos.indexOf(dato)].sprites.other.dream_world.front_default)
            ))
            setUrlPokemones(urlList);
            console.log('Este es el Array de Datos: ');
            console.log(datosCompletos);
            console.log('Este es el Array de URL: ');
            console.log(urlList);
            console.log(datosCompletos[0].sprites.other.dream_world.front_default);
        }
    };
    return(
        <PokedexContext.Provider 
        value={{
            setPokemones,
            pokemones,
            ConsultaPokemones,
            urlsPokemon,
            // estos son los valores q se exportan a los componentes
        }} >
            {propiedades.children}
            {/* pasa la propiedad a los componenetes hijos */}
        </PokedexContext.Provider>
    );
}
export {PokedexContext , PokedexProvider}