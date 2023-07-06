import CartWidget from '../CartWidget/CartWidget'
import Logo from '../img/palacio.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="barra">
      <Link to="/">
        <img src={Logo} alt="logo de palacio" width={55} className="logo" />
      </Link>
      <div>
        <Link to="/" className='botones'>Inicio</Link>
        <Link to="/category/colchones" className='botones'>Colchones</Link>
        <Link to="/category/sommiers" className='botones'>Sommiers</Link>
        <Link to="/category/sabanas" className='botones'>Sabanas</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
