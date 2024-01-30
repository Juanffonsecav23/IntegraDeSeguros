import { Link } from "react-router-dom";
import "./Item.css";



function ItemSeguros ({title , img , category, id, description }){
    
    function DescriptionValid() {
        if (description) {

           return (<ul>
                <li>{description}</li>
            </ul>)
        }
    }
    
    return(
        <Link to={`/seguro/${id}`} style={{textDecoration:"none"}}>
            <div className="itemCard" >
                <div className="itemCardImg">
                    <img src={img} alt="imagen" />
                </div>
                <div className="itemCardBody">
                <h4>{title}</h4>
                <small>{category}</small>
                <DescriptionValid/>
                </div>
            </div>
        </Link>
    )
}

export default ItemSeguros;