import "./EstilosPaginas/Servicios.css"
function Servicios() {
  return (
    <div>
        <h1 className="tituloQS">Filosofía</h1>
        <div className="CajaServicios">
          <div className="listaImagenes animate__animated animate__fadeInDown" >
              <div>
                <img src="/imgs/innovar.png" alt="Innovación"  className="imgFilosofia"  />
              </div>
              <div>
                <img src="/imgs/negociar.png" alt="Negociación" className="imgFilosofia" />
              </div>
              <div>
                <img src="/imgs/trabajar.png" alt="Trabajar" className="imgFilosofia" />
              </div>
              <div>
                <img src="/imgs/emprender.png" alt="Emprender" className="imgFilosofia" />
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
          <div className="listaImagenes animate__animated animate__fadeInDown">
              <div>
                <img src="/imgs/generar.png" alt="Generar"className="imgFilosofia" />
              </div>
              <div>
                <img src="/imgs/resolver.png" alt="Resolver" className="imgFilosofia"/>
              </div>
              <div>
                <img src="/imgs/aprender.png" alt="Aprender" className="imgFilosofia" />
              </div>
              <div>
                <img src="/imgs/liderar.png" alt="Liderar"className="imgFilosofia"  />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Servicios