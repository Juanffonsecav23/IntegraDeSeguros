import "./Item.css"

function CardDescrption(category) {
    return(
        <div className="itemCardDetail">
            <small>{category}</small>
        </div>
    )
}

function ItemSeguros ({title , img , category }){
    return(
        <div className="itemCard">
            <div className="itemCardImg">
                <img src={img} alt="imagen" />
            </div>
            <div className="itemCardBody">
            <h4>{title}</h4>
            <small>{category}</small>
            </div>
        </div>
    )
}

export default ItemSeguros;