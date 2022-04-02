import './navbar.styles.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
      <div className='navbar'>
        <div className="navbar--logo"></div>
        <div className="navbar__wrapper"> 
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Order">Order</Link>
        </div>
      </div>  
    
  );
};

export default Header;