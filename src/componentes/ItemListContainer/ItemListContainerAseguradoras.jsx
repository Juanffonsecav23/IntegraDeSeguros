import aseguradoras from "../../data/aseguradoras";
import ItemListAseguradoras from "./ItemListAseguradoras";
import "./styles.css"
import { useEffect, useState } from "react";

function getData() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(aseguradoras)
        }, 2000);
    });
}

function ItemListContainerAseguradoras() {
    let [isLoading , setIsLoading] = useState (true);
    let [aseguradoras , setAseguradora] = useState([]);

    useEffect(()=> {
        getData().then((respuesta) =>
        setAseguradora(respuesta))
            .finally(()=> {
                setIsLoading(false)
            })
    });
    return <ItemListAseguradoras isLoading={isLoading} aseguradoras={aseguradoras}/>;
}

export default ItemListContainerAseguradoras;