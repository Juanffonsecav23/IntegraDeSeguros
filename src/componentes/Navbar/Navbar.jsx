import { Icon } from '@iconify/react';
import {NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
return (
    <div>
        <div>
            <ul id="concatVarHeader">
                <li><a href="https://web.whatsapp.com/" className="itemsVH"><img src="/icons/whatsapp.svg" ></img>313 333 1128</a></li>
                <li className="itemsVH"><img src="/icons/telephone-fill.svg" ></img> (601) 368 4136</li>
                <li><a href="https://goo.gl/maps/n9s3yXVv97opp45b8" className="itemsVH"><img src="/icons/geo-alt-fill.svg" ></img>Cr 31A # 25A - 93</a></li>
                <li><a href="mailto:asesor@integraldeseguros.com.co" className="itemsVH"><img src="/icons/envelope-fill.svg"></img> asesor@integaldeseguros.com.co </a></li>
            </ul>
        </div>
        <nav className="header navbar-expand-xl">
            <div className='continer-fluid'>
                <div className="container-fluid-adpt navbarR" style={{height:"40px"}}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><Icon icon="mingcute:menu-fill" color='blue' style={{marginTop:"10px"}}/></span>
                        </button>
                </div>
                <div className='collapse navbar-collapse' id="navbarTogglerDemo01">
                    <ul className="menu navbar-nav mx-auto mb-2 mb-lg-0 nav-justified">
                        <li className="itemList tres"><NavLink to="/" className="itemListLink"><img src="/icons/LogoIntegralAzul.svg" style={{width:"70px"}}/></NavLink></li>
                        <li className="itemList tres"><NavLink to="/QuienesSomos" className="itemListLink" >Quienes Somos</NavLink></li>
                        <li className="itemList tres"><NavLink to="/Filosofia" className="itemListLink" >Filosofía</NavLink></li>
                        <li className="dropdown itemList tres">
                        <button className="dropbtn"><NavLink to="/Seguros" className="itemListLink">Seguros ▼ </NavLink></button>
                        <div className="dropdown-content">
                        <NavLink to="/Seguros/Generales" className="itemListLink tres itemList dropdownItems" >Generales</NavLink>
                        <NavLink to="/Seguros/Vida" className="itemListLink tres itemList dropdownItems" >Vida</NavLink>
                        </div>
                        </li>
                        <li className="itemList tres"><NavLink to="/Aseguradoras" className="itemListLink" >Aseguradoras</NavLink></li>
                        <li className="itemList tres"><NavLink to="/Contacto" className="itemListLink" >Contacto</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar