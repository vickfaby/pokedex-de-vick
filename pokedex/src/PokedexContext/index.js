import React, { useRef } from "react";
import axios from "axios";
import "../PokedexCard";
import { PokedexCard } from "../PokedexCard";
import { PokedexGeneralContainer } from "../PokedexGeneralContainer";

const PokedexContext = React.createContext();
//EL PROVIDER PROVEE TODOS LOS DATOS NECESARIOS PARA LOS COMPONENTES.

function PokedexProvider(propiedades) {
  const [pokemones, setPokemones] = React.useState("");
  //pokemons empieza como un vacio ""

  const [searchedValue, setSearchedValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [clickedPokemon, setClickedPokemon] = React.useState("");
  const [loadButton, setLoadButton] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState();
  const [offset, setOffset] = React.useState(0);
  const [lastIdCard, setLastIdCard] = React.useState("");
  //const [cardCount, setCardCount] = React.useState(1);
  //const [cardLimit, setCardLimit] = React.useState(8);
  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    // params: {
    //   offset: "0",
    //   limit: "6",
    // },
  });

  let pokemonsObject = []; // almacenará los objetos pokemons con los datos necesarios.
  let cardCount = 1;
  let cardLimit = 8;

  const ConsultaPokemones = async (offset) => {
    setIsLoading(true);
    setLoadButton(false);
    const { data } = await api("", {
      params: { offset, limit: offset + cardLimit },
    }); // guarda el nuevo valor en la variable pokemones
    const downloadedPokemons = data.results; // guarda los 150 pokemon
    console.log("Estos son los resultados de la consulta pokemon: ");
    console.log(data.results);

    downloadedPokemons.map(
      (pokemon) => ConsultaDatosPokemon(pokemon.name) //ejectuamos esta función por cada pokemon del Array: downloadedPokemons
    );
  };

  const ConsultaDatosPokemon = async (pokemonName) => {
    const { data } = await api("/" + pokemonName); // se esta haciendo en desorden

    const objeto = {
      //Se crea un objeto que almacena los datos del pokemon que nos interesa exportar.
      name: pokemonName,
      id: data.id,
      url: data.sprites.other.dream_world.front_default,
      tipo: data.types[0].type.name,
    };

    pokemonsObject.push(objeto); // pueshea cada objeto en el Array de objetos pokemon

    if (pokemonsObject.length === cardLimit) {
      // al contar los 150 pokemones, entra a ordenarlos y setear el resultado en la variable "pokemones" del contexto
      pokemonsObject.sort((a, b) => a.id - b.id); // Ordena el Array de objetos pokemon
      //Imprime el array de todos los pokemons
      // console.log("Este es el Array de objetos pokemones");
      // console.log(pokemonsObject);
      setPokemones(pokemonsObject); // GUARDA EL ARRAY DE OBJETOS EN EL CONTEXT
      console.log("setLoading is False");
      setIsLoading(false);
    }
  };

  //////////////////////////// LAZY LOADING

  const alInterceptar = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("IS INTERSECTING!!!!");
        ConsultaPokemones(cardCount);
      }
      console.log("Se activó el Observer en el entry");
      console.log(entry);
    });
  };

  const setObserver = () => {
    console.log("Se abrió la función observer");
    if (cardCount === cardLimit) {
      console.log("llego a la ultima targeta!");
      const options = {
        threshold: 0.5,
      };
      const observer = new IntersectionObserver(alInterceptar, options);
      observer.observe(
        document.getElementById("cardsContainer").lastElementChild
      );
      cardLimit = cardLimit + 8; // 8  es que aumenta dea a 8 cards
    } else {
      cardCount++;
      console.log(`Esta es la cuenta ${cardCount}`);
      console.log(`Esta es el limite ${cardLimit}`);
    }
  };
  //////////////////////////////////////////////////////////

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
        setClickedPokemon,
        loadButton,
        setLoadButton,
        isLoading,
        setIsLoading,
        offset,
        setOffset,
        lastIdCard,
        setLastIdCard,
        setObserver,
        cardLimit,
        // cardCount,
        // setCardCount
      }}
    >
      {propiedades.children}
      {/* pasa la propiedad a los componenetes hijos */}
    </PokedexContext.Provider>
  );
}
export { PokedexContext, PokedexProvider };
