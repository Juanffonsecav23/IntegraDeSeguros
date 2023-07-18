import './App.css'
import Footer from './componentes/Footer/Footer'
import Navbar from './componentes/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<h1>HomePage</h1>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
