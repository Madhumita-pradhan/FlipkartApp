import React  ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [cart,setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    const fetchData = async() =>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setCart(data);
    }
    fetchData();
},[]);

const addToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = [...cart, item];
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  setCartItems(updatedCart);
};

const isInCart = (item) => {
  return cartItems.some(cartItem => cartItem.id === item.id);
};

  return (
    <>
    <header className="header">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/cart" className="header-link">Go to Cart</Link>
      </header>
    <div>
      <h1>Welcome to the Shopping Cart</h1>
    </div>
    <div className="container">
    {cart.map((item) => (
      <div key={item.id} className="card">
        <img src={item.image} alt={item.title} className="product-image" />
        <div className="product-details">
          <h2>{item.title}</h2>
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Description:</strong> {item.description}</p>
          {isInCart(item) ? (
                <Link to="/cart">
                  <button className="go-to-cart-button">Go to Cart</button>
                </Link>
              ) : (
                <button className="add-to-cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
              )}
        </div>
      </div>
    ))}
  </div>
  </>
  );
};

export default Home;