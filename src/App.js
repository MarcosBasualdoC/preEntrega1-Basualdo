import './App.css';
import React from 'react';
import NavBar from './componentes/navBar/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Carrito from './componentes/Cart/Carrito';
import { CartProvider } from './componentes/Cart/CartContext';



const App = () => {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route
              path="/productos/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
};


export default App;
