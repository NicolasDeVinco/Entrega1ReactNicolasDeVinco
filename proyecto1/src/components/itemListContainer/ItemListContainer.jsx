import { CardGeneral } from "./Card-general"
import { Titulos } from "./Titulos"
import './Titulos.css'
import './ItemListContainer.css'
import './Card-general.css'


export const ItemListContainer = (props) => {

    const { greeting } = props 

    return (
      <>
        <Titulos 
          titulo = { greeting }
        />

      <div className="container__general--home">
        <CardGeneral 
        tituloCard= 'Jugar al fútbol'
        />
        <CardGeneral 
         tituloCard= 'Salir a bailar'
        />
   
      </div>

      </>
    )
}