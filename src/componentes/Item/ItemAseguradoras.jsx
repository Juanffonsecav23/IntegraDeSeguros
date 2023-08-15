import "./Item.css"

function ItemSeguros ({title , img , description }){
    return(
        <div className="itemCard">
            <div className="itemCardImg">
                <img src={img} alt="imagen" style={{width: "100%" , height:"100%"}} />
            </div>
            <div className="itemCardBody">
            <h4>{title}</h4>
            <small>{description}</small>
            </div>
        </div>
    )
}

export default ItemSeguros;