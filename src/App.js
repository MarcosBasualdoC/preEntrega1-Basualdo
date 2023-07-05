import './App.css';
import React from 'react';
import NavBar from './componentes/navBar/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './componentes/ItemDetailContainer/ItemDetail';
import ColchonesPage from './Pages/ColchonesPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:id" element={<ItemDetail />} />
          <Route exact path="/colchones" component={ColchonesPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
