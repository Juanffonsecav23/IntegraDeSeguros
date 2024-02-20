import "./EstilosPaginas/QuienesSomos.css"
function QuienesSomos() {
  return (
    <div>
        <h1 className="tituloQS">Quienes Somos</h1>
        <div className="boxQS">
          <img src="/imgs/TeamWork-bro.svg" alt="" className="imgBoxes animate__animated animate__backInLeft" />
          <img src="/imgs/Consulting-bro.svg" alt="" className="imgBoxes animate__animated animate__backInUp" />
          <img src="/imgs/Personal finance-cuate.svg" alt="" className="imgBoxes animate__animated animate__backInRight" />
        </div>
        <h2 className="sloganQS">Servir para Construir</h2>
        <div className="textoQS">
          <p>Integral Asesores de Seguros, establecida en 1995, es una empresa que ha ganado reconocimiento por su compromiso, integridad y fiabilidad. A lo largo de los años, se ha fortalecido en el ámbito de la asesoría, venta, suscripción y gestión de seguros en una variedad de categorías disponibles en el mercado.</p>
          <p>Trabajamos con las más importantes y reconocidas compañías aseguradoras del país, contamos con personal competente, implementación en infraestructura física y tecnológica, procesos oportunos y eficientes, una amplia experiencia en el manejo de programas de seguros a nivel público y privado que evidencian nuestro respaldo y compromiso permanente con el mejoramiento continuo y la satisfacción de los clientes.</p>
        </div>
        <div className="boxesQS" >
          <div className="boxesItems flipCard">
            <div className="  flipCardInner">
              <div className="flipCardFront">
                <h3>Misión</h3>
              </div>
              <div className=" Mision flipCardBack">
                <h3 id="tituloM">Misión</h3>
                <p id="textoM">Ofrecer a empresas y personas asesoría y alternativas en seguros que cubran sus necesidades, generando valor, servicio, confianza y bienestar. </p>
                <img src="/imgs/Partnership-bro.svg" alt="" id="imgM" />
              </div>
            </div>
          </div>
          <div className="boxesItems flipCard" >
            <div className=" flipCardInner">
              <div className="flipCardFront">
                <h3>Visión</h3>
              </div>
              <div className="Mision flipCardBack">
                <h3 id="tituloM">Visión</h3>
                <p id="textoM" style={{marginTop:"45px"}}>Ser aliados estratégicos de nuestros clientes y Compañías de Seguros creando oportunidades y beneficios que permitan el crecimiento mutuo, enmarcados dentro del respeto y transparencia de los compromisos</p>
                <img src="/imgs/Mision.png" alt="" id="imgM"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default QuienesSomos