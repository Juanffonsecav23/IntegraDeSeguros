import "./EstilosPaginas/QuienesSomos.css"
function QuienesSomos() {
  return (
    <div>
        <h1 className="tituloQS">Quienes Somos</h1>
        <h2 className="sloganQS">Slogan Empresarial</h2>
        <div className="boxQS">
          <img src="https://placehold.co/200x200" alt="" className="imgBoxes" />
          <img src="https://placehold.co/200x200" alt="" className="imgBoxes" />
          <img src="https://placehold.co/200x200" alt="" className="imgBoxes" />
        </div>
        <div className="textoQS">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate velit maxime quasi ab blanditiis architecto labore explicabo, dolor quia voluptatibus saepe nulla itaque sapiente similique earum suscipit optio minima doloribus.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate velit maxime quasi ab blanditiis architecto labore explicabo, dolor quia voluptatibus saepe nulla itaque sapiente similique earum suscipit optio minima doloribus.</p>
        </div>
        <div className="boxesQS" >
          <div className="boxesItems flipCard" style={{marginLeft:"50px", marginRight:"25px"}}>
            <div className="  flipCardInner">
              <div className="flipCardFront">
                <h3>Misión</h3>
              </div>
              <div className=" Mision flipCardBack">
                <h3 id="tituloM">Misión</h3>
                <p id="textoM">Ofrecer a empresas y personas asesoría y alternativas en seguros que cubran sus necesidades, generando valor, servicio, confianza y bienestar. </p>
                <img src="https://placehold.co/200x200" alt="" id="imgM"/>
              </div>
            </div>
          </div>
          <div className="boxesItems flipCard" style={{marginRight:"50px" , marginLeft:"25px"}}>
            <div className=" flipCardInner">
              <div className="flipCardFront">
                <h3>Visión</h3>
              </div>
              <div className="Mision flipCardBack">
                <h3 id="tituloM">Visión</h3>
                <p id="textoM">Ser aliados estratégicos de nuestros clientes y Compañías de Seguros creando oportunidades y beneficios que permitan el crecimiento mutuo, enmarcados dentro del respeto y transparencia de los compromisos</p>
                <img src="https://placehold.co/200x200" alt="" id="imgM"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default QuienesSomos