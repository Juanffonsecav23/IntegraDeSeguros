import { useParams } from "react-router-dom";
import { getSegurosData, segurosDataFiltrado } from "../../servicios/Firebase";
import ItemListSeguros from "./ItemListSeguros";
import "./styles.css"
import { useEffect, useState } from "react";

function ItemListContainer() {
    let [isLoading , setIsLoading] = useState (true);
    let [seguros , setSeguros] = useState([]);
    const {categoryId} = useParams();
    
    const fetchData = categoryId === undefined ? getSegurosData : segurosDataFiltrado;

    useEffect(()=> {
        fetchData(categoryId)
        .then((respuesta) => setSeguros(respuesta))
        .finally(()=> {setIsLoading(false)})
    }, [categoryId]);

    return <ItemListSeguros isLoading={isLoading} seguros={seguros}/>;
}

export default ItemListContainer