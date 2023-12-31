import "./Item.css"

function ItemSeguros ({title , img , description, telefono ,LNacional }){
    return(
        <div className="itemCard">
            <div className="itemCardImg">
                <img src={img} alt="imagen" style={{width: "100%" , height:"100%"}} />
            </div>
            <div className="itemCardBody">
            <h4 style={{color:"darkblue"}}>{title}</h4>
            <p>Numeral: {description}</p>
            <p>Telefono: {telefono}</p>
            <p>Linea Nacional: {LNacional}</p>
            </div>
        </div>
    )
}

export default ItemSeguros;