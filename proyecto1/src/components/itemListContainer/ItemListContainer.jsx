import { CardGeneral } from "./Card-general"
import { Titulos } from "./Titulos"
import './ItemListContainer.css'
import { useState } from "react"
import { User } from "./Card-user"
import { Detalles } from "./Detalles"



export const ItemListContainer = (props ) => {
  const { greeting, handleCarrito  } = props

  const [showUsers, setShowUsers] = useState(false)
  const [showCards, setShowCards] = useState(true)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const mostrarJugadores = (categoria) => {
      setSelectedCategory(categoria)
      setShowUsers(true)
      setShowCards(false)
      setShowDetails(false)
  }

  const mostrarDetalles = (usuario) => {
      setShowDetails(true)
      setShowUsers(false)
      setSelectedUser(usuario)
  }

  const sectionTitle = showUsers ? "Elegí a tu compañero/a" : showDetails ? "DETALLES" : greeting

  return (
      <>
          <Titulos 
               sectionTitle={sectionTitle}
          />  
          <div className={showUsers || showDetails ? "container__general--usuarios" : "container__general--home"}>
              {showCards ? (
                  <>
                      <CardGeneral onClick={() => mostrarJugadores("futbol")} tituloCard='Jugar al fútbol' />
                      <CardGeneral onClick={() => mostrarJugadores("bailar")} tituloCard='Salir a bailar' />
                  </>
              ) : null}
              {showUsers ? <User mostrarDetalles={mostrarDetalles} categoria={selectedCategory} /> : null}
              {showDetails && selectedUser ? <Detalles usuario={selectedUser} handleCarrito={handleCarrito} /> : null}
          </div>
      </>
  )
}