import { BotonosRedes } from "../BotonesRedes/BotonesRedes"
import CheckOutForm from "../CheckOutForm/CheckOutForm"
import "../BotonesRedes/BotonesRedes.css"

function Contacto(onHandleConfrim) {
  return (
    <div>
      <h1 className="tituloQS">Contacto</h1>
      <BotonosRedes/>
        <CheckOutForm onHandleConfrim={onHandleConfrim} />
        <div className="mapa">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.217944440894!2d-74.0424024!3d4.732165999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f856f58613fd5%3A0x9b80eefa69c3cbbe!2sCENTRO%20COMERCIAL%20CEDRITOS%20151-P.H.!5e0!3m2!1ses!2sco!4v1770691411995!5m2!1ses!2sco" style={{width:"600px" , height:"450px"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
        </div>
    </div>
  )
}

export default Contacto