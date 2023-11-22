import './Card-general.css'
import { Link } from 'react-router-dom'

export const CardGeneral = (props) => {
  return (
    <Link to={`/categoria/${props.tituloCard.toLowerCase()}`} className="card__general">
      {props.tituloCard}
    </Link>
  )
}