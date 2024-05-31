import React, { useState, useEffect } from 'react';
import './CartList.css';
import { Link } from 'react-router-dom';

const CartList = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
    <header className="header">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/cart" className="header-link">Go to Cart</Link>
      </header>
    <div className="container">
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-details">
              <h2>{item.title}</h2>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <button className="remove-from-cart-button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default CartList;
