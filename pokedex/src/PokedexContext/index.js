import React from "react";
import axios from "axios";

const PokedexContext = React.createContext();
//EL PROVIDER PROVEE TODOS LOS DATOS NECESARIOS PARA LOS COMPONENTES.

function PokedexProvider(propiedades) {
  const [pokemones, setPokemones] = React.useState("");
  //pokemons empieza como un vacio ""

  const [searchedValue, setSearchedValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [clickedPokemon, setClickedPokemon] = React.useState("");

  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    params: {
      offset: "0",
      limit: "150",
    },
  });

  let pokemonsObject = []; // almacenará los objetos pokemons con los datos necesarios.

  const ConsultaPokemones = async () => {
    const { data } = await api(""); // guarda el nuevo valor en la variable pokemones
    const downloadedPokemons = data.results; // guarda los 150 pokemon

    console.log("Estos son los resultados de la consulta pokemon: ");
    console.log(data.results);

    downloadedPokemons.map(
      (pokemon) => ConsultaDatosPokemon(pokemon.name) //ejectuamos esta función por cada pokemon del Array: downloadedPokemons
    );
  };

  const ConsultaDatosPokemon = async (pokemonName) => {
    const { data } = await api("/" + pokemonName); // se esta haciendo en desorden

    console.log(
      `Este es el resultado de la consulta para el pokemon: ${pokemonName}`
    );
    console.log(data);

    const objeto = {
      //Se crea un objeto que almacena los datos del pokemon que nos interesa exportar.
      name: pokemonName,
      id: data.id,
      url: data.sprites.other.dream_world.front_default,
      tipo: data.types[0].type.name,
    };

    pokemonsObject.push(objeto); // pueshea cada objeto en el Array de objetos pokemon

    if (pokemonsObject.length === 150) {
      // al contar los 150 pokemones, entra a ordenarlos y setear el resultado en la variable "pokemones" del contexto
      pokemonsObject.sort((a, b) => a.id - b.id); // Ordena el Array de objetos pokemon
      console.log("Este es el Array de objetos pokemones");
      console.log(pokemonsObject);
      setPokemones(pokemonsObject); // GUARDA EL ARRAY DE OBJETOS EN EL CONTEXT
    }
  };

  let searchedPokemons = [];

  if (!searchedValue.length >= 1) {
    // si algo se escribe en el buscador, se modificara la variable de contexto "pokemones" para filtrar los resultados.
    searchedPokemons = pokemones; // Si no se ha escrito nada... el valor de searchedPokemones sera igual a todos los pokemones
  } else {
    searchedPokemons = pokemones.filter((pokemon) => {
      const pokemonName = pokemon.name.toLocaleLowerCase();
      const searchedText = searchedValue.toLocaleLowerCase();

      return pokemonName.includes(searchedText);
    });
  }

  return (
    <PokedexContext.Provider
      value={{
        pokemones,
        ConsultaPokemones,
        searchedValue,
        setSearchedValue,
        searchedPokemons,
        openModal, 
        setOpenModal,
        clickedPokemon,
        setClickedPokemon
      }}
    >
      {propiedades.children}
      {/* pasa la propiedad a los componenetes hijos */}
    </PokedexContext.Provider>
  );
}
export { PokedexContext, PokedexProvider };
