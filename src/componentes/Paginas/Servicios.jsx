import "./EstilosPaginas/Servicios.css"
function Servicios() {
  return (
    <div>
        <h1 className="tituloQS">Filosofía</h1>
        <div className="CajaServicios">
          <div className="listaImagenes" >
              <div>
                <img src="/imgs/innovar.jpg" alt="Innovación" style={{borderRadius:"30px", border:"solid gray 2px"}} className=" animate__animated animate__fadeInDown"/>
              </div>
              <div>
                <img src="/imgs/negociar.jpg" alt="Negociación" style={{borderRadius:"30px"}} className=" animate__animated animate__fadeInDown"/>
              </div>
              <div>
                <img src="/imgs/trabajar.jpg" alt="Trabajar" style={{borderRadius:"30px"}} className=" animate__animated animate__fadeInDown"/>
              </div>
              <div>
                <img src="/imgs/emprender.jpg" alt="Emprender"style={{borderRadius:"30px"}} className=" animate__animated animate__fadeInDown"/>
            </div>
          </div>
          <ul className="ListaServicios">
            <li className="itemListaServicio animate__animated animate__backInLeft">
              <div className="flexItemList">
              <h3 className="itemListTitle">I</h3><p className="itemListText">nnovar</p>
              </div>
            </li>
            <li className="itemListaServicio animate__animated animate__backInRight">
              <div className="flexItemList">
              <h3 className="itemListTitle">N</h3><p className="itemListText">egociar</p>
              </div>
            </li>
            <li className="itemListaServicio animate__animated animate__backInLeft">
              <div className="flexItemList">
              <h3 className="itemListTitle">T</h3><p className="itemListText">rabajar</p>
              </div>
            </li>
            <li className="itemListaServicio animate__animated animate__backInRight">
              <div className="flexItemList">
              <h3 className="itemListTitle">E</h3><p className="itemListText">mprender</p>
              </div>
            </li>
            <li className="itemListaServicio animate__animated animate__backInLeft">
              <div className="flexItemList">
              <h3 className="itemListTitle">G</h3><p className="itemListText">enerar</p>
            </div>
            </li>
            <li className="itemListaServicio animate__animated animate__backInRight">
              <div className="flexItemList">
              <h3 className="itemListTitle">R</h3><p className="itemListText">esolver</p>
              </div>
            </li>
            <li className="itemListaServicio animate__animated animate__backInLeft">
              <div className="flexItemList">
              <h3 className="itemListTitle">A</h3><p className="itemListText">prender</p>
              </div>
            </li>
            <li className="itemListaServicio animate__animated animate__backInLeft">
              <div className="flexItemList">
              <h3 className="itemListTitle">L</h3><p className="itemListText">iderar</p>
              </div>
            </li>
          </ul>
          <div className="listaImagenes">
              <div>
                <img src="/imgs/innovar.jpg" alt=""  className=" animate__animated animate__fadeInDown"/>
              </div>
              <div>
                <img src="/imgs/negociar.jpg" alt=""  className=" animate__animated animate__fadeInDown"/>
              </div>
              <div>
                <img src="/imgs/trabajar.jpg" alt=""  className=" animate__animated animate__fadeInDown"/>
              </div>
              <div>
                <img src="/imgs/emprender.jpg" alt=""  className=" animate__animated animate__fadeInDown"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Servicios