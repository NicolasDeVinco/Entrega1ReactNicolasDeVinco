import "./Card-user.css"
import { useState, useEffect } from "react"
import { Filtros } from "./Filtros"



export const User = ({ mostrarDetalles, categoria }) => {
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
      : usuarios.filter((usuario) => usuario.categoria === categoria)

  return (
      <div className="usuarios__container--general">
          <div className="filtros__container--general">
              <Filtros Filtrar={filtrarUsuarios} />
          </div>
          <div className="usuarios__container">
              {usuariosFiltrados.map((usuario) => (
                  <div key={usuario.id} className="card__user--container">
                      <h1 className="card__user--title">{usuario.nombre}</h1>
                      <img src={usuario.imagen} alt={usuario.nombre} className="card__user--img" />
                      <p>Precio: ${usuario.precio}</p>
                      <p>Disponibilidad: {usuario.stock}</p>
                      <button className="vermas__button" onClick={() => mostrarDetalles(usuario)}>Ver mas</button>
                  </div>
              ))}
          </div>
      </div>
  )
}