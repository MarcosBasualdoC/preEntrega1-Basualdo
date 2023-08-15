import React, { useState } from 'react';
import { createCheckout } from './checkout';
import { useCart } from '../Cart/CartContext';

const CheckoutForm = () => {
    const { cartItems, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: ''
    });

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const checkoutData = {
                ...formData,
                cart: cartItems,
                totalPrice: getTotalPrice(),
                purchaseDate: new Date().toISOString()
            };

            const checkoutId = await createCheckout(checkoutData);
            console.log(checkoutId);

            ///limpiar carrito
            clearCart();

            ///// restablecer formulario
            setFormData({
                name: '',
                phoneNumber: '',
                email: ''
            });

            ///actualizar interfaz y mostrar ID
            setFormData({
                ...formData,
                orderCreated: true,
                orderId: checkoutId
            });
        } catch (error) {
            console.error('Error al crear el checkout:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormValid = formData.name && formData.phoneNumber && formData.email;

    return (
        <div>
            <h2>Checkout</h2>
            {formData.orderCreated ? (
                <h2>El ID de su orden es: {formData.orderId}</h2>
            ) : (
                <form className='formCheckout' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Número de Teléfono</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" inputMode="numeric" pattern="[0-9]*" value={formData.phoneNumber} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <button type="submit" disabled={!isFormValid}>Realizar Checkout</button>
                </form>
            )}
        </div>
    );
};

export default CheckoutForm;
