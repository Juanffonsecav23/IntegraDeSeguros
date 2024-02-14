import "./BotonesRedes.css";
import { Icon } from '@iconify/react';

export function BotonosRedes() {
    return(
      <div style={{marginBottom:"3rem",}}>
        <div className="ContactTitle">
          <h3>Encuentranos en nuestras redes sociales</h3>
        </div>
            <div className="buttonsContacto">
            <a href="https://www.instagram.com/integral_de_seguros?igsh=MWp4aTM2ZWhzdTN3dA==" className="Instagram animate__animated animate__slideInLeft">
              <Icon icon="mdi:instagram" width={50} /><p style={{marginTop:"15px"}}>Instagram</p>
            </a>
            <a href="https://www.facebook.com/IntegraldeSegurosLTDA" className="Facebook animate__animated animate__slideInRight">
              <Icon icon="ic:baseline-facebook" width={50} /><p style={{marginTop:"15px"}}>Facebook</p>
            </a>
            </div>
      </div>
        )
  }