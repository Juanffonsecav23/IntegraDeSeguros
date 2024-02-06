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
    
    return(<Link to={`/seguro/${id}`} style={{textDecoration:"none"}}>

            {/* <div className="itemCard2" >
                  <div className="">
                    <div className="itemCardHeader2">
                      <h4>{title}</h4>
                      <small>{category}</small>
                    </div>
                    <img src={img} alt="" />
                  </div>
                  <div className="itemCardBody2">
                    <ul className="itemDescription2">
                        <DescriptionValid />
                    </ul>
                  </div>
            </div> */}
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
            {/* <div className="itemCard" >
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
            </div> */}
            </Link>

    )
}

export default ItemSeguros;

