import './App.css'
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

function App() {

  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Paginas/QuienesSomos' element={<QuienesSomos/>}/>
      <Route path='/Paginas/Servicios' element={<Servicios/>}/>
      <Route path='/Paginas/Seguros' element={<Seguros/>}/>
      <Route path='/Paginas/Aseguradoras' element={<Aseguradoras/>}/>
      <Route path='/Paginas/Contacto' element={<Contacto/>}/>
      <Route path='*' element={<h1>Error 404: Pagina no encontrada</h1>}/>
    </Routes>
    <WhatsappButton/>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
