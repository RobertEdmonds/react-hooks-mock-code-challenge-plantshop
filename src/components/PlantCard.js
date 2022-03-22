import React,{useState} from "react";

function PlantCard({name, price, image}) {
  const [isStock, setIsStock] = useState(true)

  function handleStockChange(){
    setIsStock(!isStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStock ? (
        <button className="primary" onClick={handleStockChange}>In Stock</button>
      ) : (
        <button onClick={handleStockChange}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
