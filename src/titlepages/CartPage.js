import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import { incrementItem, decrementItem, removeItem } from "../redux/cartSlice";
import './CartPage.css';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="cart-page">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image"/>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
                  </div>
                  <button className="delete-btn" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-summary">
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button className="checkout-btn" onClick={() => alert("Coming Soon!")}>Checkout</button>
          <a href="/products">
            <button className="continue-btn">Continue Shopping</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default CartPage;
