import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getSeguroData } from '../../servicios/Firebase';



function ItemDetailContainer() {

    const [seguro , setSeguro] = useState(null);
    const {error , setError} = useState(null);

    const id = useParams().id;

    useEffect(()=>{
        getSeguroData(id)
        .then((respuesta) => {
            setSeguro(respuesta)
        }).catch(error =>{
          setError(error.message)
        })
    },[id]);

    if (error) {
      return(
        <div>
          <h1>Error</h1>
          <p>{error}</p>
        </div>
      )
    }

    if (seguro) {
        
      return (
        <div>
            <h1>{seguro.title}</h1>
            <img src={seguro.img} alt="" />
            <p>{seguro.description}</p>
        </div>
      )
    }
    else {
      return (<Loader/>)
    }
}

export default ItemDetailContainer