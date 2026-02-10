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
        <li className="social-icon__item"><a className="social-icon__link" href="https://api.whatsapp.com/send?phone=3054751147&text=¡%20Hola%20Integral%20de%20Seguros%20quisíera%20más%20información%20de%20...">
            <img src="/icons/whatsapp.svg" alt="Logo de Whatsapp" />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.google.com/search?q=integral+de+seguros&rlz=1C1CHBF_esCO1082CO1085&oq=integral+de+seg&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIGCAYQRRg9MgYIBxBFGD2oAgCwAgA&sourceid=chrome&ie=UTF-8">
            <img src="/icons/google.svg" alt="Logo de Google" />
          </a></li>
      </ul>
        <ul className="menuFooter">
          <li className="menu__item"><Link className="menu__link" to="/">Inicio</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/QuienesSomos">Quienes Somos</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/Filosofía">Filosofía</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/Seguros">Seguros</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/Aseguradoras">Aseguradoras</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/contacto">Contacto</Link></li>
        </ul>
        <ul className='menuFooter'>
          <li className="menu__item"><a href="https://api.whatsapp.com/send?phone=3054751147&text=¡%20Hola%20Integral%20de%20Seguros%20quisíera%20más%20información%20de%20..." className="itemsVH menu__item"><img src="/icons/whatsapp.svg" ></img>305 475 1147</a></li>
          <li className="itemsVH menu__item"><img src="/icons/telephone-fill.svg" ></img> (601) 703 5614</li>
          <li className="menu__item"><a href="https://maps.app.goo.gl/2YAaf7YPb1BNyM5CA" className="itemsVH menu__item"><img src="/icons/geo-alt-fill.svg" ></img>Cl 150 #16 - 56</a></li>
          <li className="menu__item"><a href="mailto:" className="itemsVH menu__item"><img src="/icons/envelope-fill.svg"></img> asesor@integraldeseguros.com.co </a></li>
        </ul>
      <p>&copy;2024 - Derechos reservados a Integral Asesores de Seguros</p>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default Footer