import ItemSeguros from "../Item/ItemSeguros";
import "./styles.css"
import Loader from "../Loader/Loader"

function ItemListSeguros ({seguros , isLoading}){

    if (isLoading) return <Loader/>

    else return(
        <div className="Flex">
            {seguros.map((itemInArray)=>(
                <ItemSeguros key={itemInArray.id}{...itemInArray}/>
            ))}
        </div>
    );
}

export default ItemListSeguros;