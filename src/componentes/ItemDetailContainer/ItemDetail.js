import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1); // Estado para almacenar la cantidad deseada
  const { addToCart } = useCart();

  const handleButtonClick = () => {
    if (!addedToCart) {
      const itemToAdd = {
        id: product.id,
        name: product.name,
        precio: product.precio,
        quantity: quantity, // Agregamos la cantidad al item del carrito
      };
      addToCart(itemToAdd); // Agregamos el item al carrito utilizando la función del contexto
    }
    setAddedToCart(!addedToCart); // Cambiar el estado para alternar entre "Agregar al carrito" y "Finalizar compra"
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className='productoDescripcionBox'>
        <div>
          <img src={product.image} alt={product.name} className='productoDescripcionImg' />
        </div>
        <div className='productoDescripcion'>
          <h2 className='titulo tituloDescripcion'>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.precio}</p>
          {/* Select para la cantidad */}
          <label>
            Cantidad:
            <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
              <option value={1}>1 unidad</option>
              <option value={2}>2 unidades</option>
              <option value={3}>3 unidades</option>
            </select>
          </label>
          {addedToCart ? (
            <Link to='/carrito'>
              <button>Finalizar compra</button>
            </Link>
          ) : (
            <button onClick={handleButtonClick}>Agregar al carrito</button>
          )}
          <Link to='/'>
            <button>Volver a Inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
