import { CardGeneral } from "./card-general"
import { Titulos } from "./titulos"
import './titulos.css'
import './home.css'
import './card-general.css'


export const Home = () => {

    return (
      <>
        <Titulos 
          titulo = 'BUSCÁ UNA PERSONA PARA:'
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