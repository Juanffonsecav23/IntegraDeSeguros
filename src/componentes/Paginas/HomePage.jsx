import Carousel from "../Carousel/Carousel"
import "./EstilosPaginas/HomePage.css"

function HomePage() {
  return (
      <div>
          <img src="https://placehold.co/1425x600" alt="" />
          <h2 className="titleAlies">Aseguradoras aliadas</h2>
          <Carousel>
          <div  className="logosEmpresas">
            <img src="https://placehold.co/200x201" alt="" />
            <img src="https://placehold.co/200x201" alt="" />
            <img src="https://placehold.co/200x201" alt="" />
            <img src="https://placehold.co/200x201" alt="" />
            <img src="https://placehold.co/200x201" alt="" />
          </div>
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
                  <p id="textoM">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eveniet pariatur quaerat autem corrupti perspiciatis facere voluptatibus obcaecati, sed consectetur at inventore totam harum, molestiae fugiat ut voluptas hic? Impedit.</p>
                  <img src="https://placehold.co/200x200" alt="" id="imgM" />
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
                  <p id="textoM">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam distinctio amet sapiente soluta consequuntur. Quam similique voluptas magnam officiis tenetur, incidunt minima dolorem odio accusantium asperiores excepturi culpa labore illo.</p>
                  <img src="https://placehold.co/200x200" alt="" id="imgM"/>
                </div>
              </div>
            </div>
          </section>
      </div>
  )
}

export default HomePage