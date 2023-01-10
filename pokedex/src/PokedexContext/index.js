import React from "react";
import axios from "axios";
import "../PokedexCard";

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
  const [renderAcount, setRenderAcount] = React.useState(1);
  const [cardtoObserve, setCardtoObserve] = React.useState("default");
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
  const cardLoad = 8;
  let cardLimit = 8;
  //let renderAcount = 0;
  // let offset = 0;

  const ConsultaPokemones = async () => {
    setRenderAcount(renderAcount + 1);
    console.log(`RENDER ACOUNT ES: ${renderAcount}`);
    setIsLoading(true);
    setLoadButton(false);
    const { data } = await api("", {
      params: { offset, limit: cardLoad },
    });
    const downloadedPokemons = data.results; // guarda los 8 pokemon
    console.log("Estos son los resultados de la consulta pokemon: ");
    console.log(data.results);
    downloadedPokemons.map(
      (pokemon) => ConsultaDatosPokemon(pokemon.name) //ejectuamos esta función por cada pokemon del Array: downloadedPokemons
    );
    setOffset(offset + cardLoad);
    cardLimit = cardLoad * renderAcount;
    console.log(`El nuevo cardLimit es ${cardLimit} y el offset ${offset}`);
  };

  const ConsultaDatosPokemon = async (pokemonName) => {
    const { data } = await api("/" + pokemonName); // se esta haciendo en desorden

    const objeto = {
      name: pokemonName,
      id: data.id,
      url: data.sprites.other.dream_world.front_default,
      tipo: data.types[0].type.name,
    };

    pokemonsObject.push(objeto);
    if (pokemonsObject.length === cardLoad) {
      const newPokemons = [...pokemones];
      newPokemons.map((pokemon) => pokemonsObject.push(pokemon));
      console.log(`ESTE ES EL OBJETO DE POKEMONES COMPLETO: `);
      console.log(pokemonsObject);
      console.log(`ESTE ES EL ARRAY POKEMONES SETEADOS PREVIAMENTE:`);
      console.log(pokemones);
    }

    if (pokemonsObject.length === cardLimit) {
      pokemonsObject.sort((a, b) => a.id - b.id);
      setPokemones(pokemonsObject);
      console.log("Terminó la descarga de información de pokemones");
      setIsLoading(false);
    }
  };

  //////////////////////////// LAZY LOADING

  const alInterceptar = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(`SE ACTIVÓ INTERSECTING!!!! en ${entry.target.id}`);
        ConsultaPokemones(cardCount);
      }
    });
  };

  const setObserver = () => {
    if (cardCount === cardLimit) {
      
      const options = {
        threshold: 0.5,
      };


      const lastCard = document.getElementById("cardsContainer").lastElementChild;
      const lastCardId= lastCard.id;
      let tarjetaPrevia = "tarjeta Default!";

      console.log(`CONFIRMACIÓN: la Card observada previamente fue: ${cardtoObserve} Y la nueva lastCard es : ${lastCardId}, tarjeta previa: ${tarjetaPrevia}`);


      if(cardtoObserve !== lastCardId && tarjetaPrevia !== lastCardId){
        const observer = new IntersectionObserver(alInterceptar, options);
        observer.observe(lastCard);
        console.log("Como no se repite, se instala Intercepeter en la ultima tarjeta con id: " + lastCardId);

        setCardtoObserve(lastCardId);
        tarjetaPrevia = lastCardId;
      } else {
        console.log('como son iguales se evitó repertir la instalación del intercepter');
      }

      cardLimit = cardLimit + 8; // 8  es que aumenta dea a 8 cards

    } else {
      cardCount++;
      //console.log(`Observer: cuenta ${cardCount} y limite ${cardLimit}`);
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
