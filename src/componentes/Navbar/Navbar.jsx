import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el cambio de estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para ocultar el menú cuando se selecciona una opción
  const hideMenu = () => {
    setIsMenuOpen(false);
  };

  // Efecto para guardar el estado del menú en el almacenamiento local
  useEffect(() => {
    const menuState = localStorage.getItem('menuState');
    if (menuState === 'open') {
      setIsMenuOpen(true);
    }
  }, []);

  // Función para guardar el estado del menú en el almacenamiento local al cerrar o abrir
  useEffect(() => {
    localStorage.setItem('menuState', isMenuOpen ? 'open' : 'closed');
  }, [isMenuOpen]);

  return (
    <div>
      <div>
        <ul id="concatVarHeader">
          <li><a href="https://api.whatsapp.com/send?phone=3054751147&text=¡%20Hola%20Integral%20de%20Seguros%20quisíera%20más%20información%20de%20..." className="itemsVH"><img src="/icons/whatsapp.svg" ></img>305 475 1147</a></li>
          <li className="itemsVH"><img src="/icons/telephone-fill.svg" ></img> (601) 703 5614</li>
          <li><a href="https://goo.gl/maps/n9s3yXVv97opp45b8" className="itemsVH"><img src="/icons/geo-alt-fill.svg" ></img>Cl 150 #16 - 56</a></li>
          <li><a href="mailto:asesor@integraldeseguros.com.co" className="itemsVH"><img src="/icons/envelope-fill.svg"></img> asesor@integraldeseguros.com.co </a></li>
        </ul>
      </div>
      <nav className="header navbar-expand-xl">
        <div className='continer-fluid'>
          <div className="container-fluid-adpt navbarR" style={{ height: "40px" }}>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"><Icon icon="mingcute:menu-fill" color='#032c86' style={{ marginTop: "10px" }} /></span>
            </button>
          </div>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarTogglerDemo01">
            <ul className="menu navbar-nav mx-auto mb-2 mb-lg-0 nav-justified">
              <li className="itemList tres"><NavLink to="/" className="itemListLink" onClick={hideMenu}><img src="/icons/LogoIntegralAzulOscuro.svg" style={{ width: "70px" }} /></NavLink></li>
              <li className="itemList tres"><NavLink to="/QuienesSomos" className="itemListLink" onClick={hideMenu}>Quienes Somos</NavLink></li>
              <li className="itemList tres"><NavLink to="/Filosofia" className="itemListLink" onClick={hideMenu}>Filosofía</NavLink></li>
              <li className="dropdown itemList tres" onClick={hideMenu}>
                <button className="dropbtn"><NavLink to="/Seguros" className="itemListLink">Seguros ▼ </NavLink></button>
                <div className="dropdown-content">
                  <NavLink to="/Seguros/Generales" className="itemListLink tres itemList dropdownItems" onClick={hideMenu}>Generales</NavLink>
                  <NavLink to="/Seguros/Vida" className="itemListLink tres itemList dropdownItems" onClick={hideMenu}>Vida</NavLink>
                </div>
              </li>
              <li className="itemList tres"><NavLink to="/Aseguradoras" className="itemListLink" onClick={hideMenu}>Aseguradoras</NavLink></li>
              <li className="itemList tres"><NavLink to="/Contacto" className="itemListLink" onClick={hideMenu}>Contacto</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
