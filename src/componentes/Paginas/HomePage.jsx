import { Link } from "react-router-dom"
import Carousel from "../Carousel/Carousel"
import CheckOutForm from "../CheckOutForm/CheckOutForm"
import "./EstilosPaginas/HomePage.css"

function HomePage(onHandleConfrim) {
  return (
      <div>
          <img src="/imgs/manosJuntas.png" alt="" className="imgHp"/>
          <h2 className="titleAlies">Aseguradoras aliadas</h2>
          <Link to="/Aseguradoras">
            <Carousel>
            <div  className="logosEmpresas">
              <img src="/imgs/Mapfre_logo.jpeg" alt="Mapfre" className="logosItems" />
              <img src="/imgs/AxaColpatria_logo.jpeg" alt="" className="logosItems"/>
              <img src="/imgs/Bolivar_logo.png" alt="" className="logosItems"/>
              <img src="/imgs/SegurosSura_logo.jpeg" alt=""className="logosItems" />
            </div>
            <div  className="logosEmpresas">
              <img src="/imgs/HDI_logo.jpeg" alt="" className="logosItems"/>
              <img src="/imgs/Liberty_logo.jpeg" alt="" className="logosItems"/>
              <img src="/imgs/SegurosDelEstado_logo.gif" alt="" className="logosItems"/>
              <img src="/imgs/SegurosMundial_logo.jpeg" alt="" className="logosItems"/>
            </div>
            </Carousel>
          </Link>
          <section className="boxes">
            <div className="boxesItems flipCard">{/* Quienes Somos */}
                <div className="flipCardInner">
                  <div className="flipCardFront"> 
                    <h3>Quienes somos</h3>
                  </div>
                  <div className="flipCardBack Mision">
                    <h3 id="tituloM">Quienes Somos</h3>
                    <img src="https://placehold.co/200x200" alt="" id="imgM" />
                    <p id="textoM">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque dolor, eveniet nihil nisi modi expedita magnam laboriosam blanditiis cumque voluptatum dolores asperiores quas quia quam dolore inventore doloremque nam voluptas!</p>
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
                  <p id="textoM" style={{marginTop:"30px"}} >Ofrecer a empresas y personas asesoría y alternativas en seguros que cubran sus necesidades, generando valor, servicio, confianza y bienestar. </p>
                  <img src="/imgs/Vision.png" alt="" id="imgM"  />
                </div>
              </div>
            </div>
            <div className="boxesItems flipCard">
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <h3>Vision</h3>
                </div>
                <div className="Mision flipCardBack">
                  <h3 id="tituloM">Visión</h3>
                  <p id="textoM">Ser aliados estratégicos de nuestros clientes y Compañías de Seguros creando oportunidades y beneficios que permitan el crecimiento mutuo, enmarcados dentro del respeto y transparencia de los compromisos.</p>
                  <img src="/imgs/Mision.png" alt="" id="imgM"/>
                </div>
              </div>
            </div>
          </section>
          <div className="contactoHP">
            <CheckOutForm onHandleConfrim={onHandleConfrim} className="formHP"/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15907.256290953768!2d-74.0830455!3d4.6272367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd5ddc8baa7%3A0x5c940c8afd6e3c51!2sIntegral%20de%20Seguros!5e0!3m2!1ses-419!2sco!4v1698196700312!5m2!1ses-419!2sco" style={{width:"800px" , height:"550px", marginRight:"30px"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
  )
}

export default HomePage