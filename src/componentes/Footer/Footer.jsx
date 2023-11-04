import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <img src="/icons/LogoIntegralBlanco.svg" alt="" style={{ width:"100px",marginLeft:"30px"}} />
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/profile.php?id=100087745636618">
            <img style={{color:'white'}} src="/icons/facebook.svg" alt="Logo de facebook" />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://instagram.com/casaaloha152?igshid=MzRlODBiNWFlZA==">
            <img src="/icons/instagram.svg" alt="Logo de instagram" />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
            <img src="/icons/whatsapp.svg" alt="Logo de Whatsapp" />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
            <img src="/icons/google.svg" alt="Logo de Google" />
          </a></li>
      </ul>
        <ul className="menu">
          <li className="menu__item"><Link className="menu__link" to="/">Inicio</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/QuienesSomos">Quienes Somos</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/Servicios">Servicios</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/Seguros">Seguros</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/Aseguradoras">Aseguradoras</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/contacto">Contacto</Link></li>
        </ul>
        <ul className='menuFooter'>
          <li className="menu__item"><a href="https://web.whatsapp.com/" className="itemsVH menu__item"><img src="/icons/whatsapp.svg" ></img>313 333 1128</a></li>
          <li className="itemsVH menu__item"><img src="/icons/telephone-fill.svg" ></img> (601) 368 4136</li>
          <li className="menu__item"><a href="https://goo.gl/maps/n9s3yXVv97opp45b8" className="itemsVH menu__item"><img src="/icons/geo-alt-fill.svg" ></img>Cr 31A # 25A - 93</a></li>
          <li className="menu__item"><a href="mailto:" className="itemsVH menu__item"><img src="/icons/envelope-fill.svg"></img> contacto@integaldeseguros.com.co </a></li>
        </ul>
      <p>&copy;2023 Juan Felipe Fonseca Vargas</p>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default Footer