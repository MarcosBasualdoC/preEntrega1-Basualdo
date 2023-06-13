import carrito from "../img/carrito.svg"

const CartWidget = () => {
    return(
        <div className="carrito">
            <img src={carrito} alt="carrito de compras" width={25}/>
            0
        </div>
    )
}

export default CartWidget