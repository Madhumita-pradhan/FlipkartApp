// src/App.js
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import CartList from './CartList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
