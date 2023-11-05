import './App.css'
import './components/Navbar/navbar.css'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'


function App() {
 

  return (
    <>
      <Navbar />
      <ItemListContainer greeting='BUSCÁ UNA PAREJA PARA:'/>
    </>
  )
}

export default App
