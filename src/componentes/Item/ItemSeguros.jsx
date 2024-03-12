import { Link } from "react-router-dom";
import "./Item.css";


function ItemSeguros ({title, img, category, id, description }) {
    
    function DescriptionValid() {
        if (Array.isArray(description)) {
            return description.map((element, index) => (
                <li key={index}>{element}</li>
            ));
        }else{
            return <li>Para mas informacion contactanos</li>
        }
        
    }
    
    return(
      <a href="https://api.whatsapp.com/send?phone=3054751147&text=¡%20Hola%20Integral%20de%20Seguros%20quisíera%20más%20información%20de%20..." target="_blank"  rel="noreferrer" style={{textDecoration:"none"}}>
            <div className="itemCardSeguros" >
                  <div className="itemCardHeaderSeguros">
                    <h4>{title}</h4>
                    <small>{category}</small>
                  </div>
                  <div className="itemCardBodySeguros">
                    <img src={img} alt={title} className="imgSeguros" />
                    <ul className="itemDescriptionSeguros">
                        <DescriptionValid />
                    </ul>
                  </div>
          </div>
      </a>
    )
}

export default ItemSeguros;

