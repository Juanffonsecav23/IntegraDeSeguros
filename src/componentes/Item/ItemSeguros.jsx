import { Link } from "react-router-dom";
import "./Item.css";

function ItemSeguros ({title, img, category, id, description }) {
    
    function DescriptionValid() {
        if (Array.isArray(description)) {
            return description.map((element, index) => (
                <li key={index}>{element}</li>
            ));
        }
        return null;
    }
    
    return(
        <Link to={`/seguro/${id}`} style={{textDecoration:"none"}}>
            <div className="itemCard" >
                <div className="itemCardBody">
                    <div className="itemCardImg">
                        <img src={img} alt="imagen" />
                    </div>
                    <h4>{title}</h4>
                    <small>{category}</small>
                    <ul>
                        <DescriptionValid />
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default ItemSeguros;

