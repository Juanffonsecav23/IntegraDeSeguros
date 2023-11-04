import { Link, useParams } from "react-router-dom";
import "../../servicios/Firebase"
import "./MessageVerify.css"

function MessageVerify() {
    const{id} = useParams();
  return (
    <div className="order-Verify-Box">
        <div className="success-checkmark">
        <div className="check-icon">
        <span className="icon-line line-tip"></span>
        <span className="icon-line line-long"></span>
        <div className="icon-circle"></div>
        <div className="icon-fix"></div>
        </div>
        </div>
        <p>Este es el comprobante de tu solicitud:{id}</p>
        <h2 style={{marginTop:"30px"}}>Gracias por contactarte con nosotros</h2>
        <h4>Pronto nos pondremos en contacto contigo</h4>
        <button className="homePB"><Link to={"/"} style={{color:"white", textDecoration:"none"}}>Ir al inicio</Link></button>
    </div>
  )
}

export default MessageVerify