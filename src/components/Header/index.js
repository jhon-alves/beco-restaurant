import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BECO
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link className="nav-links" to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-links" to="/" onClick={closeMobileMenu}>
              Cardápio
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-links" to="/" onClick={closeMobileMenu}>
              Reservas
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-links" to="/" onClick={closeMobileMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
