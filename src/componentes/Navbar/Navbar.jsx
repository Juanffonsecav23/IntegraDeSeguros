import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
return (
<>
        <div>
            <ul id="concatVarHeader">
                <li><a href="https://web.whatsapp.com/" className="itemsVH"><img src="/public/icons/whatsapp.svg" className="imgSvg"></img>310 000 0000</a></li>
                <li className="itemsVH"><img src="/public/icons/telephone-fill.svg" className="imgSvg"></img> (601) 368 4136</li>
                <li><a href="https://goo.gl/maps/n9s3yXVv97opp45b8" className="itemsVH"><img src="/public/icons/geo-alt-fill.svg" className="imgSvg"></img>Cr 31A # 25A - 93</a></li>
                <li><a href="mailto:" className="itemsVH"><img src="/public/icons/envelope-fill.svg" className="imgSvg"></img> contacto@integaldeseguros.com.co </a></li>
            </ul>
        </div>
        <div>
        <ul className="menu">
            <li className="itemList"><NavLink to="/" className="itemListLink" ><img src="/public/imgs/LOGO INTEGRAL.png" alt="Logo"></img></NavLink></li>
            <li className="itemList"><NavLink to="paginas/quienesSomos.html" className="itemListLink" >Quienes Somos</NavLink></li>
            <li className="itemList"><NavLink to="paginas/servicios.html" className="itemListLink" >Servicios</NavLink></li>
            <li className="dropdown itemList">
            <button className="dropbtn itemList">Seguros</button>
            <div className="dropdown-content">
            <a href="paginas/paginasSeguros/seguro1.html" className="itemListLink" >Seguro 1</a>
            <a href="paginas/paginasSeguros/seguro2.html" className="itemListLink" >Seguro 2</a>
            <a href="paginas/paginasSeguros/seguro3.html" className="itemListLink" >Seguro 3</a>
            </div>
            </li>
            <li className="itemList"><a href="paginas/aseguradoras.html" className="itemListLink" >Aseguradoras</a></li>
            <li className="itemList"><a href="paginas/contacto.html" className="itemListLink" >Contacto</a></li>
        </ul>
        </div>
        </>)
}

export default Navbar