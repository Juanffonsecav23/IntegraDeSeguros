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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15907.256290953768!2d-74.0830455!3d4.6272367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd5ddc8baa7%3A0x5c940c8afd6e3c51!2sIntegral%20de%20Seguros!5e0!3m2!1ses-419!2sco!4v1698196700312!5m2!1ses-419!2sco"  style={{width:"600px" , height:"450px"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Contacto