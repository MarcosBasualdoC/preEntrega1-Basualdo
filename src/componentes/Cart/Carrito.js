import React from 'react';
import { useCart } from '../Cart/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { cartItems, removeFromCart, clearCart } = useCart(); // Agregamos la función emptyCart para vaciar el carrito
  const totalPrice = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleEmptyCart = () => {
    clearCart();
  };

  const handleCheckoutClick = () => {
    // Implementa tu lógica para el proceso de checkout aquí
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <p>Total: ${totalPrice}</p>
          <button onClick={handleEmptyCart}>Vaciar Carrito</button> {/* Agregamos el botón de vaciar carrito */}
          {cartItems.length > 0 && <button onClick={handleCheckoutClick}>Checkout</button>}
        </div>
      )}
      <Link to='/'>
        <button>Volver a Inicio</button>
      </Link>
    </div>
  );
};

export default Carrito;
