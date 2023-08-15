import ItemAseguradoras from "../Item/ItemAseguradoras";
import "./styles.css"
import Loader from "../Loader/Loader"

function ItemListAseguradoras ({aseguradoras , isLoading}){

    if (isLoading) return <Loader/>

    else return(
        <div className="Flex">
            {aseguradoras.map((itemInArray)=>(
                <ItemAseguradoras key={itemInArray.id}{...itemInArray}/>
            ))}
        </div>
    );
}

export default ItemListAseguradoras;