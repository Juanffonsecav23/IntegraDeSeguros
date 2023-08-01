import {NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
return (
<>
        <div>
            <ul id="concatVarHeader">
                <li><a href="https://web.whatsapp.com/" className="itemsVH"><img src="/icons/whatsapp.svg" ></img>310 000 0000</a></li>
                <li className="itemsVH"><img src="/icons/telephone-fill.svg" ></img> (601) 368 4136</li>
                <li><a href="https://goo.gl/maps/n9s3yXVv97opp45b8" className="itemsVH"><img src="/icons/geo-alt-fill.svg" ></img>Cr 31A # 25A - 93</a></li>
                <li><a href="mailto:" className="itemsVH"><img src="/icons/envelope-fill.svg"></img> contacto@integaldeseguros.com.co </a></li>
            </ul>
        </div>
        <div>
        <ul className="menu">
            <li className="itemList tres"><NavLink to="/" className="itemListLink"><img src="/imgs/logoArreglado.png"/></NavLink></li>
            <li className="itemList tres"><NavLink to="Paginas/QuienesSomos" className="itemListLink" >Quienes Somos</NavLink></li>
            <li className="itemList tres"><NavLink to="Paginas/Servicios" className="itemListLink" >Servicios</NavLink></li>
            <li className="dropdown itemList tres">
            <button className="dropbtn"><NavLink to="Paginas/Seguros" className="itemListLink">Seguros</NavLink></button>
            <div className="dropdown-content">
            <NavLink to="/paginas/Seguros/Seguro1" className="itemListLink tres itemList dropdownItems" >Seguro 1</NavLink>
            <NavLink to="/paginas/Seguros/Seguro2" className="itemListLink tres itemList dropdownItems" >Seguro 2</NavLink>
            <NavLink to="/paginas/Seguros/Seguro3" className="itemListLink tres itemList dropdownItems" >Seguro 3</NavLink>
            </div>
            </li>
            <li className="itemList tres"><NavLink to="/Paginas/Aseguradoras" className="itemListLink" >Aseguradoras</NavLink></li>
            <li className="itemList tres"><NavLink to="/Paginas/Contacto" className="itemListLink" >Contacto</NavLink></li>
        </ul>
        </div>
        </>)
}

export default Navbar