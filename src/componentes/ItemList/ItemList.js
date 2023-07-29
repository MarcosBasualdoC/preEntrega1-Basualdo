import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className='inicio'>
      <h1 className='titulo'>El Palacio del Sueño</h1> 
      <div className="productosBox"> 
        {products.map((product) => (
          <div key={product.id} className="producto">
            <img className="productoImagen" src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.precio}</p>
            <Link to={`/productos/${product.id}`}>
              <button className='masInfo'>Más información</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
