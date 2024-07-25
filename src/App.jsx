import Footer from './componentes/Footer/Footer'
import Navbar from './componentes/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './componentes/Paginas/HomePage'
import QuienesSomos from './componentes/Paginas/QuienesSomos'
import Servicios from './componentes/Paginas/Servicios'
import Seguros from './componentes/Paginas/Seguros/Seguros'
import Aseguradoras from './componentes/Paginas/Aseguradoras'
import Contacto from './componentes/Paginas/Contacto'
import WhatsappButton from './componentes/WhatsappButton/WhatsappButton'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainerSeguros'
/* import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer' */
import MessageVerify from './componentes/MessageVerify/MessageVerify'
import { Analytics } from "@vercel/analytics/react"
import Ptd from './componentes/Paginas/Ptd'

function App() {

  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
      <Route path='/Filosofia' element={<Servicios/>}/>
      <Route path='/Seguros' element={<Seguros/>}/>
{/*   <Route path='/Seguro/:id' element={<ItemDetailContainer/>}/>*/}      
      <Route path='/Seguros/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/messageConfirmation/:id' element={<MessageVerify/>}/>
      <Route path='/Aseguradoras' element={<Aseguradoras/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
      <Route path='/ptd' element={<Ptd/>}/>
      <Route path='*' element={<h1>Error 404: Pagina no encontrada</h1>}/>
    </Routes>
    <WhatsappButton/>
    <Footer/>
    <Analytics/>
    </BrowserRouter>

  )
}

export default App
