import {NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
return (
<>
        <div>
            <ul id="concatVarHeader">
                <li><a href="https://web.whatsapp.com/" className="itemsVH"><img src="/icons/whatsapp.svg" ></img>313 333 1128</a></li>
                <li className="itemsVH"><img src="/icons/telephone-fill.svg" ></img> (601) 368 4136</li>
                <li><a href="https://goo.gl/maps/n9s3yXVv97opp45b8" className="itemsVH"><img src="/icons/geo-alt-fill.svg" ></img>Cr 31A # 25A - 93</a></li>
                <li><a href="mailto:asesor@integraldeseguros.com.co" className="itemsVH"><img src="/icons/envelope-fill.svg"></img> asesor@integaldeseguros.com.co </a></li>
            </ul>
        </div>
        <div>
        <ul className="menu">
            <li className="itemList tres"><NavLink to="/" className="itemListLink"><img src="/icons/LogoIntegralAzul.svg" style={{width:"70px"}}/></NavLink></li>
            <li className="itemList tres"><NavLink to="/QuienesSomos" className="itemListLink" >Quienes Somos</NavLink></li>
            <li className="itemList tres"><NavLink to="/Servicios" className="itemListLink" >Servicios</NavLink></li>
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
        </>)
}

export default Navbar