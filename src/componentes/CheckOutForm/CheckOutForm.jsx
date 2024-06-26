/* eslint-disable react/prop-types */
import { useState } from "react"
import "./CheckOutForm.css";
import { useNavigate } from "react-router-dom";
import { formData } from "../../servicios/Firebase";
import Swal from "sweetalert2";

function CheckOutForm() {

    const navigateToMessageConfirmation = useNavigate();

    const showAlert = () => {
        Swal.fire({
            title: 'Solicitud envida con exito',
            icon: 'success',
            iconColor: "blue",
            focusConfirm: true,
            confirmButtonText: 'OK',
            confirmButtonColor: "blue"
        })
        }

    async function onHandleConfrim (userData){
        const order ={
            buyer: userData,
            date: new Date(),
        }
        const id = await formData(order)
        navigateToMessageConfirmation(`/messageConfirmation/${id}`)
    }
    const [userData , setUserData] = useState({
        nombre: "",
        apellido:"",
        phone: "",
        email: "",
        comentario:"",
    })

    function onInputChange (evt){
        const prop = evt.target.name;
        const value = evt.target.value
        const newData = {...userData}
        newData[prop] = value;    
        setUserData(newData)
    }
    function onSubmit(evt) {
        evt.preventDefault();
        onHandleConfrim(userData);
        showAlert();
    }

  return (
    <div className="checkoutform-Container">
        <h3 style={{color:"#032c86"}}>Para mas información dejanos tus datos y te contactaremos</h3>
        <div>
            <label >Nombre(s) :</label>
            <input className="input-Form" value={userData.nombre} name="nombre" type="text" onChange={onInputChange} />
        </div>
        <div>
            <label >Apellido(s):</label>
            <input className="input-Form" value={userData.apellido} name="apellido" type="text" onChange={onInputChange} />
        </div>
        <div>
            <label style={{marginRight:"38px"}}>Email: </label>
            <input className="input-Form" value={userData.email} name="email" type="text"  onChange={onInputChange}/>
        </div>
        <div>
            <label style={{marginRight:"13px"}}>Telefono: </label>
            <input className="input-Form" value={userData.phone} name="phone" type="text" onChange={onInputChange} />
        </div>
        <div>
            <p className="PComent">Comentario: </p>
            <textarea cols={30} rows={10} className="input-Form" value={userData.comentario} name="comentario" onChange={onInputChange}></textarea>
        </div>
        <button onClick={onSubmit} className="botonFormulario">Enviar</button>
    </div> )

  }
export default CheckOutForm