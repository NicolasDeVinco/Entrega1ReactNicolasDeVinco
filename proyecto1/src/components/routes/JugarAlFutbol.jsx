import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const JugarAlFutbol = () => {
  const [usuarios, setUsuarios] = useState([])
  const [filtro, setFiltro] = useState(null)


  useEffect(() => {
      fetch('./src/components/ItemListContainer/usuarios.json')
          .then((response) => response.json())
          .then((data) => setUsuarios(data))
          .catch((error) => console.error(error))
  }, [])

  const filtrarUsuarios = (tipoFiltro) => {
      setFiltro(tipoFiltro)
  }

  const usuariosFiltrados = filtro
      ? usuarios.filter((usuario) => usuario.genero === filtro && usuario.categoria === categoria)
      : usuarios.filter((usuario) => usuario.categoria === "futbol")

  return (
    <div className="usuarios__container--general">
      <div className="usuarios__container">
        {usuariosFiltrados.map((usuario) => (
          <div key={usuario.id} className="card__user--container">
            <h1 className="card__user--title">{usuario.nombre}</h1>
            <img src={usuario.imagen} alt={usuario.nombre} className="card__user--img" />
            <p>Precio: ${usuario.precio}</p>
            <p>Disponibilidad: {usuario.stock}</p>
            <Link to={`/jugaralfutbol/${usuario.id}`} >
              <button className="vermas__button">Ver mas</button>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default JugarAlFutbol