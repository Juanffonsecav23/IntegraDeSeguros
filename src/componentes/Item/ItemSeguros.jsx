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
      <a href="https://api.whatsapp.com/send?phone=3133331128" target="_blank"  rel="noreferrer" style={{textDecoration:"none"}}>
            <div className="itemCardSeguros" >
                  <div className="itemCardHeaderSeguros">
                    <h4>{title}</h4>
                    <small>{category}</small>
                  </div>
                  <div className="itemCardBodySeguros">
                    <img src={img} alt="" className="imgSeguros" />
                    <ul className="itemDescriptionSeguros">
                        <DescriptionValid />
                    </ul>
                  </div>
          </div>
      </a>
    )
}

export default ItemSeguros;

