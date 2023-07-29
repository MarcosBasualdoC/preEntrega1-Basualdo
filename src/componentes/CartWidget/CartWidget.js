import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import carrito from "../img/carrito.svg";

const CartWidget = () => {
  const { cartItems } = useCart();

  // Calcular el número total de unidades en el carrito
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/carrito" className="carrito">
      <img src={carrito} alt="carrito de compras" width={25} />
      <span>{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
