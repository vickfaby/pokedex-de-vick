import React from "react";
import { PokedexHeader } from "../PokedexHeader";
import { PokedexGeneralContainer } from "../PokedexGeneralContainer";
import { PokedexCard } from "../PokedexCard";
import { Modal } from "../Modal";
import { PokedexContext } from "../PokedexContext";
import { Card } from "../Card";
import { LoadButton } from "../LoadButton";
import { CardSkeleton } from "../CardSkeleton";
import { CardsContainer } from "../CardsContainer";
//Dentro de esta carpeta, se colocaran los componentes que se verán en la interfaz de usuario. Todos estos componentes i ran dentro del componente general <React.Fragment></React.Fragment>.

// A cada uno de los componentes creados, se les creara una carpeta con su correspondientes index.js y su nombre_de_componente.css, fuera de la carpeta App y luego de esto debe importar en el encabezado de este documento.

function AppUI() {
  const { openModal, setOpenModal, loadButton, isLoading, setObserver } =
    React.useContext(PokedexContext);
    const cuenta = ["a","b"]
  return (
    <React.Fragment>
      <PokedexHeader></PokedexHeader>
      <PokedexGeneralContainer>
      {loadButton && ( // si loadButton == true entonces lo crea si no... lo quita
          <LoadButton></LoadButton>
        )}
        {/* {isLoading && <CardSkeleton></CardSkeleton>} */}

        {(!isLoading && !loadButton) && <CardsContainer></CardsContainer>}

        {openModal && (
          <Modal>
            <Card></Card>
          </Modal>
        )}
      </PokedexGeneralContainer>
    </React.Fragment>
  );
}

export { AppUI };
