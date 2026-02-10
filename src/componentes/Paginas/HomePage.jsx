import { Link } from "react-router-dom"
import Carousel from "../Carousel/Carousel"
import CheckOutForm from "../CheckOutForm/CheckOutForm"
import "./EstilosPaginas/HomePage.css"


function HomePage(onHandleConfrim) {
  return (
      <div>
          <img src="/imgs/portadaIntegral.png" alt="Imagen de portada" className="imgHp animate__animated animate__zoomIn"/>
          <h2 className="titleAlies">Aseguradoras aliadas</h2>
            <Carousel>
            <div  className="logosEmpresas">
              <Link to='/Aseguradoras'><img src="/imgs/Mapfre_logo.jpeg" alt="Mapfre" className="logosItems" /></Link>
              <Link to='/Aseguradoras'><img src="/imgs/Bolivar_logo.png" alt="Bolivar" className="logosItems"/></Link>
              <Link to='/Aseguradoras'><img src="/imgs/SegurosSura_logo.jpeg" alt="Sura"className="logosItems" /></Link>
              <Link to='/Aseguradoras'><img src="/imgs/SegurosDelEstado_logo.gif" alt="Seguros del estado" className="logosItems"/></Link>
            </div>
            <div  className="logosEmpresas">
              <Link to='/Aseguradoras'><img src="/imgs/HDI_logo.jpeg" alt="HDI" className="logosItems"/></Link>
              <Link to='/Aseguradoras'><img src="/imgs/SBS_Logo.png" alt="SBS" className="logosItems"  /></Link>
              <Link to='/Aseguradoras'><img src="/imgs/AxaColpatria_logo.jpeg" alt="Axa Colpatria" className="logosItems"/></Link>
              <Link to='/Aseguradoras'><img src="/imgs/SegurosMundial_logo.jpeg" alt="Mundial" className="logosItems" /></Link>
            </div>
            </Carousel>
          <section className="boxes">
            <div className="boxesItems flipCard">{/* Quienes Somos */}
                <div className="flipCardInner">
                  <div className="flipCardFront"> 
                    <h3>Quienes somos</h3>
                  </div>
                  <div className="flipCardBack Mision">
                    <h3 id="tituloM">Quienes Somos</h3>
                    <img src="/imgs/TeamWork-bro.svg" alt="Trabajo en equipo" id="imgM" />
                    <p id="textoM" >Integral Asesores de Seguros, establecida en 1995, es una empresa que ha ganado reconocimiento por su compromiso, integridad y fiabilidad. A lo largo de los años, se ha fortalecido en el ámbito de la asesoría, venta, suscripción y gestión de seguros en una variedad de categorías disponibles en el mercado.
                    </p>
                  </div>
                </div>
            </div>
            <div className="boxesItems flipCard">{/* Mision */}
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <h3>Misión</h3>
                </div>
                <div className="Mision flipCardBack">
                  <h3 id="tituloM">Misión</h3>
                  <p id="textoM" >Ofrecer a empresas y personas asesoría y alternativas en seguros que cubran sus necesidades, generando valor, servicio, confianza y bienestar. </p>
                  <img src="/imgs/Partnership-bro.svg" alt="Confianza" id="imgM"  />
                </div>
              </div>
            </div>
            <div className="boxesItems flipCard">{/* Vision */}
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <h3>Vision</h3>
                </div>
                <div className="Mision flipCardBack">
                  <h3 id="tituloM">Visión</h3>
                  <p id="textoM">Ser aliados estratégicos de nuestros clientes y Compañías de Seguros creando oportunidades y beneficios que permitan el crecimiento mutuo, enmarcados dentro del respeto y transparencia de los compromisos.</p>
                  <img src="/imgs/Mision.png" alt="Crecimiento" id="imgM"/>
                </div>
              </div>
            </div>
          </section>
          <div className="Ptd">
            <p>Politicas de tratamiento de datos </p><Link to='/ptd/' style={{color:"aquamarine"}}>aqui</Link>
          </div>
          <div className="contactoHP">
            <CheckOutForm onHandleConfrim={onHandleConfrim} className="formHP"/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.217944440894!2d-74.0424024!3d4.732165999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f856f58613fd5%3A0x9b80eefa69c3cbbe!2sCENTRO%20COMERCIAL%20CEDRITOS%20151-P.H.!5e0!3m2!1ses!2sco!4v1770691411995!5m2!1ses!2sco"  className="mapaHP"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
  )
}

export default HomePage