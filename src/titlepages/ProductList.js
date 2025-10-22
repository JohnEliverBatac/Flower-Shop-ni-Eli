import React from "react";
import Header from "../components/Header";
import PlantCard from "../components/PlantCard";
import './ProductList.css';

// Import plant images (place your images in src/assets/images/)
import plant1Img from "../assets/images/plant1.jpg";
import plant2Img from "../assets/images/plant2.jpg";
import plant3Img from "../assets/images/plant3.jpg";
import plant4Img from "../assets/images/plant4.jpg";
import plant5Img from "../assets/images/plant5.jpg";
import plant6Img from "../assets/images/plant6.jpg";

// Sample Cyrene-themed plant data
const plants = [
  { id: 1, name: "Cyrene’s Violet Fern", price: 15.99, category: "Ferns", image: plant1Img },
  { id: 2, name: "Star Rail Aloe", price: 12.99, category: "Succulents", image: plant2Img },
  { id: 3, name: "Celestial Orchid", price: 18.99, category: "Flowers", image: plant3Img },
  { id: 4, name: "Mystic Fern", price: 14.99, category: "Ferns", image: plant4Img },
  { id: 5, name: "Galactic Succulent", price: 10.99, category: "Succulents", image: plant5Img },
  { id: 6, name: "Luminous Orchid", price: 19.99, category: "Flowers", image: plant6Img },
];

function ProductList() {
  // Get unique categories
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <>
      <Header />
      <div className="product-list-page">
        {categories.map((cat) => (
          <div key={cat} className="category-section">
            <h2>{cat}</h2>
            <div className="plant-grid">
              {plants
                .filter(p => p.category === cat)
                .map(p => (
                  <PlantCard key={p.id} plant={p} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
