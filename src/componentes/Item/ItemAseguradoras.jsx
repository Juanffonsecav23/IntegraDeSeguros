import "./Item.css"

function ItemSeguros ({title , img , description, telefono ,LNacional,celular }){
    return(
        <div className="itemCardAseguradoras">
            <div className="itemCardImgAseguradoras">
                <img src={img} alt="imagen" style={{width: "100%" , height:"100%"}} />
            </div>
            <div className="itemCardBodyAseguradoras">
            <h4 style={{color:"darkblue"}}>{title}</h4>
            <p>Numeral: {description}</p>
            <p>Telefono: {telefono}</p>
            <p>Linea Nacional: {LNacional}</p>
            <p>Celular: {celular}</p>
            </div>
        </div>
    )
}

export default ItemSeguros;