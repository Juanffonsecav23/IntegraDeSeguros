import { Link } from "react-router-dom";
import "./Item.css";

function ItemSeguros ({title , img , category, id }){
    return(
        <Link to={`/seguro/${id}`} style={{textDecoration:"none"}}>
            <div className="itemCard" >
                <div className="itemCardImg">
                    <img src={img} alt="imagen" />
                </div>
                <div className="itemCardBody">
                <h4>{title}</h4>
                <small>{category}</small>
                </div>
            </div>
        </Link>
    )
}

export default ItemSeguros;