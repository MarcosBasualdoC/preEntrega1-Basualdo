import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {/* <h1 className='titulo'>El Palacio del Sueño</h1>  */}
    <div className='productoDescripcionBox'>
      <div>
        <img src={product.image} alt={product.name} className='productoDescripcionImg' />
      </div>
      <div className='productoDescripcion'>
        <h2 className='titulo tituloDescripcion'>{product.name}</h2>
        <p>{product.description}</p>
        <Link to="/"> 
          <button>Volver a Inicio</button> 
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ItemDetail;
