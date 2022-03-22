import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [isPlant, setIsPlant] = useState([])
  const [isSearch, setIsSearch] = useState('')

  useEffect(() =>{
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(item => setIsPlant(item))
  },[])

  function handleAddPlant(newPlant){
    setIsPlant([...isPlant, newPlant])
  }

  function handleSearch(item){
    setIsSearch(item.toUpperCase())
  }

  const itemsToDisplay = isPlant.filter(item =>{

     return item.name.toUpperCase().startsWith(isSearch)
  })
  console.log(isSearch)
  console.log(isPlant)
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search handleSearch={handleSearch}/>
      <PlantList displayPlants={itemsToDisplay}/>
    </main>
  );
}

export default PlantPage;
