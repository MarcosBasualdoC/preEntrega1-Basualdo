import React from 'react';
import { useCart } from '../Cart/CartContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleEmptyCart = () => {
    clearCart();
  };

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  return (
    <div className='carritoDeComprasBox'>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className='carritoDeComprasDiv'>
          {cartItems.map((item) => (
            <ul key={item.id} className='carritoDeCompras'>
              <p>{item.name}</p>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.quantity}</p>
              <button className='botonX' onClick={() => handleRemoveFromCart(item.id)}>X</button>
            </ul>
          ))}
          <p className='carritoTotal'>Total: ${totalPrice}</p>
        </div>
      )}
      <button onClick={handleEmptyCart}>Vaciar Carrito</button>
      {cartItems.length > 0 && <button className='carritoCheckout' onClick={handleCheckoutClick}>Checkout</button>}
      <Link to='/'>
        <button>Volver a Inicio</button>
      </Link>
    </div>
  );
};

export default Carrito;
