import "./Item.css"

function ItemSeguros ({title , img , description, telefono ,LNacional }){
    return(
        <div className="itemCardAseguradoras">
            <div className="itemCardImgAseguradoras">
                <img src={img} alt="imagen" style={{width: "100%" , height:"100%"}} />
            </div>
            <div className="itemCardBodyAseguradoras">
            <h4>{title}</h4>
            <div className="callcenterBox">
            <a className="linkTel" href={`tel:${description}`}>Numeral: {description}</a>
            <a className="linkTel" href={`tel:${telefono}`}>Telefono: {telefono}</a>
            <a className="linkTel" href={`tel:${LNacional}`}>Linea Nacional: {LNacional}</a></div>
            </div>
        </div>
    )
}

export default ItemSeguros;