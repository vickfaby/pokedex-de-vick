import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./CardSkeleton.css"

const CardSkeleton = () => {
  return (
    <div className="SkeletonContainer">
      <div className="pokedexCard">
        <Skeleton width={30}></Skeleton>
        <Skeleton circle={true} height={40} width={40}></Skeleton>
        <Skeleton width={80}></Skeleton>
      </div>
      <div className="pokedexCard">
        <Skeleton width={30}></Skeleton>
        <Skeleton circle={true} height={40} width={40}></Skeleton>
        <Skeleton width={80}></Skeleton>
      </div>
      <div className="pokedexCard">
        <Skeleton width={30}></Skeleton>
        <Skeleton circle={true} height={40} width={40}></Skeleton>
        <Skeleton width={80}></Skeleton>
      </div>
      <div className="pokedexCard">
        <Skeleton width={30}></Skeleton>
        <Skeleton circle={true} height={40} width={40}></Skeleton>
        <Skeleton width={80}></Skeleton>
      </div>
      <div className="pokedexCard">
        <Skeleton width={30}></Skeleton>
        <Skeleton circle={true} height={40} width={40}></Skeleton>
        <Skeleton width={80}></Skeleton>
      </div>
      <div className="pokedexCard">
        <Skeleton width={30}></Skeleton>
        <Skeleton circle={true} height={40} width={40}></Skeleton>
        <Skeleton width={80}></Skeleton>
      </div>
      <div className="pokedexCard">
        <Skeleton width={30}></Skeleton>
        <Skeleton circle={true} height={40} width={40}></Skeleton>
        <Skeleton width={80}></Skeleton>
      </div>
    </div>
  );
};

export { CardSkeleton };
