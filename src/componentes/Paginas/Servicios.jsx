import "./EstilosPaginas/Servicios.css"
function Servicios() {
  return (
    <div>
        <h1 className="tituloQS">Filosofía</h1>
        <div className="CajaServicios">
          <div className="listaImagenes animate__animated animate__fadeInDown" >
              <div>
                <img src="/imgs/innovar.png" alt="Innovación" style={{borderRadius:"30px", border:"solid gray 2px"}} />
              </div>
              <div>
                <img src="/imgs/negociar.png" alt="Negociación" style={{borderRadius:"30px", border:"solid gray 2px"}}/>
              </div>
              <div>
                <img src="/imgs/trabajar.png" alt="Trabajar" style={{borderRadius:"30px", border:"solid gray 2px"}}/>
              </div>
              <div>
                <img src="/imgs/emprender.png" alt="Emprender" style={{borderRadius:"30px", border:"solid gray 2px"}}/>
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
                <img src="/imgs/generar.png" alt="" style={{borderRadius:"30px", border:"solid gray 2px"}} />
              </div>
              <div>
                <img src="/imgs/resolver.png" alt="" style={{borderRadius:"30px", border:"solid gray 2px"}}/>
              </div>
              <div>
                <img src="/imgs/aprender.png" alt="" style={{borderRadius:"30px", border:"solid gray 2px"}} />
              </div>
              <div>
                <img src="/imgs/liderar.png" alt="" style={{borderRadius:"30px", border:"solid gray 2px"}} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Servicios