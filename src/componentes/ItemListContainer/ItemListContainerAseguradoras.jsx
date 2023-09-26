import { getAseguradorasData } from "../../servicios/Firebase";
import ItemListAseguradoras from "./ItemListAseguradoras";
import "./styles.css"
import { useEffect, useState } from "react";



function ItemListContainerAseguradoras() {
    let [isLoading , setIsLoading] = useState (true);
    let [aseguradoras , setAseguradora] = useState([]);

    useEffect(()=> {
        getAseguradorasData().then((respuesta) =>
        setAseguradora(respuesta))
            .finally(()=> {
                setIsLoading(false)
            })
    });
    return <ItemListAseguradoras isLoading={isLoading} aseguradoras={aseguradoras}/>;
}

export default ItemListContainerAseguradoras;