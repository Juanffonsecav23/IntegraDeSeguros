import seguros from "../../data/seguros";
import ItemListSeguros from "./ItemListSeguros";
import "./styles.css"
import { useEffect, useState } from "react";

function getData() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(seguros)
        }, 2000);
    });
}

function ItemListContainer() {
    let [isLoading , setIsLoading] = useState (true);
    let [seguros , setSeguros] = useState([]);

    useEffect(()=> {
        getData().then((respuesta) =>
            setSeguros(respuesta))
            .finally(()=> {
                setIsLoading(false)
            })
    });
    return <ItemListSeguros isLoading={isLoading} seguros={seguros}/>;
}

export default ItemListContainer