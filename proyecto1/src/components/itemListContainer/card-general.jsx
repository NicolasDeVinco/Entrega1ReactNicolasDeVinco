import { Link } from 'react-router-dom'
import './Card-general.css'


export const CardGeneral = (props) => {
  const { mostrarJugadores, tituloCard, linkCard } = props

  return (
    
      <Link to={`/${linkCard}`} >
        <div className='card__general' onClick={mostrarJugadores}>
          {tituloCard}
        </div>
      </Link>
  )
}

