import { useEffect, useState } from 'react'
import './Detalles.css'
import { useParams } from 'react-router-dom'
import usuarios from './usuarios.json'



export const Detalles = ( ) => {
  const { id } = useParams();
  const [filtro, setFiltro] = useState(null)

  const filtrarUsuarios = (tipoFiltro) => {
      setFiltro(tipoFiltro)
  }

  const usuario = usuarios.filter((usuario) => usuario.id === Number(id) )

    if (!usuario) {
        return null
      }

    const [showAtributo, setShowAtributo] = useState (false)

    const mostrarAtributo = () => {
        if (usuario.posicion || usuario.pie === null)
        setShowAtributo(true)
    }

        return (
            <div className='detalles__container--general'>
                <div className='detalles__container'>
                    <h2 className='detalles__title'>Detalle</h2>
                    <div className='detalles__info--container'>
                        <div className='detalles__data--container'>
                            <div className='detalles__data'>
                                <p className='detalles__nombre'>Nombre:</p>
                                <p className='detalles__nombre--respuesta'>{usuario.nombre}</p>
                            </div>
                            {mostrarAtributo ? (
                                <div className='detalles__data'>
                                    {usuario.posicion && usuario.posicion ?  (
                                    <>
                                        <p className='detalles__posicion'>Posición:</p>
                                        <p className='detalles__posicion--respuesta'>{usuario.posicion}</p>
                                        <p className='detalles__pie'>Pie:</p>
                                        <p className='detalles__pie--respuesta'>{usuario.pie}</p>
                                    </>
                                    ) : null}
                                </div>
                            ) : null}

                            {mostrarAtributo ? (
                                <div className='detalles__data'>
                                    {usuario.ritmo && usuario.bebida ?  (
                                    <>
                                        <p className='detalles__ritmo'>Ritmo:</p>
                                        <p className='detalles__ritmo--respuesta'>{usuario.ritmo}</p>
                                        <p className='detalles__bebida'>Bebida:</p>
                                        <p className='detalles__bebida--respuesta'>{usuario.bebida}</p> 
                                    </>
                                    ) : null}
                                </div>
                            ) : null}
                        
                            <div className='detalles__data'>
                                <p className='detalles__precio'>Precio:</p>
                                <p className='detalles__precio--respuesta'>{usuario.precio}</p>
                            </div>
                            <div className='detalles__data'>
                                <p className='detalles__stock'>Stock:</p>
                                <p className='detalles__stock--respuesta'>{usuario.stock}</p>
                            </div>
                        </div>
                        <div className='detalles__img--container'>
                            <img className="detalles__img" src={usuario.imagen} alt="Foto de usuario"/>
                        </div>
                    </div>
                    <button className='agregar__button'>Agregar a mi equipo</button>
                </div>
            </div>
        )
    }
