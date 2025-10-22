import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Header.css';

function Header() {
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <h2 className="logo">Cyrene's Plant Haven</h2>
      <nav>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">
          Cart 🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
