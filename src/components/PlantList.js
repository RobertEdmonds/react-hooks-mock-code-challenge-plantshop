import React from "react";
import PlantCard from "./PlantCard";

function PlantList({displayPlants}) {
  const showPlants = displayPlants.map(item => {
    return <PlantCard key={item.id} name={item.name} price={item.price} image={item.image}/>
  })

  return (
    <ul className="cards">{showPlants}</ul>
  );
}

export default PlantList;
