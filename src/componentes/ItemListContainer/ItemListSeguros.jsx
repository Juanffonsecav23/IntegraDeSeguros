import ItemSeguros from "../Item/ItemSeguros";
import "./styles.css"
import Loader from "../Loader/Loader"
import Flex from "../Flex/Flex";

function ItemListSeguros ({seguros , isLoading, category}){

    function titleFilter() {
        var verificacion ;
        if (category){
          verificacion = `Seguros ${category}` ;
        }else{
          verificacion = 'Seguros';
        }
        return verificacion
      }

    if (isLoading) return <Loader/>;

    else return(
        <Flex title={titleFilter()}>
            {seguros.map((itemInArray)=>(
                <ItemSeguros key={itemInArray.id}{...itemInArray}/>
            ))}
        </Flex>
    );
}

export default ItemListSeguros;