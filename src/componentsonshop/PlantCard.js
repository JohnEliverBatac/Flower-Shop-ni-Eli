import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import './PlantCard.css';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
    setAdded(true);
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image"/>
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart} 
        disabled={added} 
        className={added ? "added-btn" : ""}
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default PlantCard;
