import './Card-general.css'

export const CardGeneral = (props) => {

  return (
    <div className="card__general" onClick={props.onClick}>
      {props.tituloCard}
    </div>
  )
}