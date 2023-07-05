import CartWidget from '../CartWidget/CartWidget'
import Logo from '../img/mipclogo.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="barra">
        <img src={Logo} alt="logo de mipc" width={55} className="logo" />
        <div>
          <Link to="/" className='botones'>Inicio</Link>
          <Link to="/colchones" className='botones'>Colchones</Link>
          <Link to="/sommiers" className='botones'>Sommiers</Link>
          <Link to="/sabanas" className='botones'>Sabanas</Link>
        </div>
        <CartWidget />
      </nav>
    );
  };


export default NavBar