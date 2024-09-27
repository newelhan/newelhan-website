import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar-custom">
        <div className="logo-container">
          <div className="logo">ne.welhan</div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home & About</Link>
            </li>
            <li>
              <Link to="/portfolio">My Works</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
