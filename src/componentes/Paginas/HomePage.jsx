import Carousel from "../Carousel/Carousel"
import "./EstilosPaginas/HomePage.css"

function HomePage() {
  return (
      <div>
          <img src="/imgs/people-stacking-hands-together-park.jpg" alt="" className="imgHp"/>
          <h2 className="titleAlies">Aseguradoras aliadas</h2>
          <Carousel>
          <div  className="logosEmpresas">
            <img src="/public/imgs/Mapfre_logo.png" alt="" style={{width: "260px",height:"200px"}} />
            <img src="https://placehold.co/200x200" alt="" />
            <img src="https://placehold.co/200x201" alt="" />
            <img src="https://placehold.co/200x201" alt="" />
{/*             <img src="https://placehold.co/200x201" alt="" />
 */}          </div>
          <div  className="logosEmpresas">
            <img src="https://placehold.co/200x200" alt="" />
            <img src="https://placehold.co/200x200" alt="" />
            <img src="https://placehold.co/200x200" alt="" />
            <img src="https://placehold.co/200x200" alt="" />
            <img src="https://placehold.co/200x200" alt="" />
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
                  <p id="textoM">Ofrecer a empresas y personas asesoría y alternativas en seguros que cubran sus necesidades, generando valor, servicio, confianza y bienestar. </p>
                  <img src="/public/imgs/vision.jpg" alt="" id="imgM" />
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
                  <img src="https://placehold.co/200x200" alt="" id="imgM"/>
                </div>
              </div>
            </div>
          </section>
      </div>
  )
}

export default HomePage