import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
    return (
      <div>
        <h1>Lista de productos</h1>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} width={200}/>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/productos/${product.id}`}>
            <button>Más información</button>
          </Link>
          </div>
        ))}
      </div>
    );
  };
  

export default ItemList;
