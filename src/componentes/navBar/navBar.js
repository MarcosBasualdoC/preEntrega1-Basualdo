import CartWidget from '../CartWidget/CartWidget'
import Logo from '../img/mipclogo.svg'

const NavBar = () => {
    return (
        <nav className='barra'>
            <img src={Logo} alt='logo de mipc' width={55} className='logo'/>
            <div>
                <button>MotherBoards</button>
                <button>Procesadores</button>
                <button>Fuentes</button>
                <button>Memorias</button>
                <button>Discos</button>
                <button>Coolers</button>
                <button>Gabinetes</button>
            </div>
            <CartWidget/>
        </nav>
    )
}


export default NavBar