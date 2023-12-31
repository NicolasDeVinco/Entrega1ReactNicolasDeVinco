import './App.css'
import './components/Navbar/navbar.css'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { PaginaEnProgreso } from './components/ItemListContainer/Pagina-progreso'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import { Detalles } from './components/ItemListContainer/Detalles'
import SalirABailar from './components/routes/SalirABailar'
import JugarAlFutbol from './components/routes/JugarAlFutbol'



function App() {

  const [cartCount, setCartCount] = useState(0)

  const handleCarrito = () => {
    setCartCount((prevCount) => prevCount + 1)
  }

  return (
    <Router>
      <Navbar cartCount={cartCount}/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='BUSCÁ GENTE PARA:' handleCarrito={handleCarrito} /> }/>
        <Route path='/jugaralfutbol' element={<JugarAlFutbol /> }/>
        <Route path='/jugaralfutbol/:id' element={<Detalles /> }/>
        <Route path='/salirabailar' element={<SalirABailar /> }/>
        <Route path='/salirabailar/:id' element={<Detalles /> }/>
        <Route path="/categoria/:category" element={<ItemListContainer handleCarrito={handleCarrito} />} />
        <Route path='/categoria/quehacemos' element={<PaginaEnProgreso /> }/>
        <Route path='/categoria/postulate' element={<PaginaEnProgreso /> }/>
      </Routes>
    </Router>
  )
}

export default App
