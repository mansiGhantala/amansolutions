import { NavLink } from "react-router-dom"
import { useState } from "react";
import './Navbar.css'
import { useAuth } from '../store/auth';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { isLoggedIn } = useAuth();

  return (<>
    <header>
      <div className="container">
        <div className="header-top">

          <div className="logo-brand">
            <a href="/">Aman Solutions</a>
          </div>
          {/* Hamburger Icon */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>

        <nav className="nav_active">
          <ul className={menuOpen ? 'active' : ''}>
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/service" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
            {isLoggedIn ? (
              <li><NavLink to="/logout" onClick={() => setMenuOpen(false)}>Logout</NavLink></li>
            ) : (<>
              <li><NavLink to="/register" onClick={() => setMenuOpen(false)}>Register</NavLink></li>
              <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
            </>)}
          </ul>
        </nav>
      </div>
    </header>
  </>
  );
};

export default Navbar;
