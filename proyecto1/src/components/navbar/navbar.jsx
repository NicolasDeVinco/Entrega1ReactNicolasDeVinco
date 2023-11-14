import { CartWidget } from "./CartWidget"
import './CartWidget.css'
import { NavLink } from "react-router-dom"


export const Navbar = ({ cartCount }) => {
    return (
        <div className="nav__container">
          <div className="logo__container">
            <NavLink className="logo__title" to='/'>¡ EQUIPAZO !</NavLink>
          </div>

          <div className="categorias__container">
            <NavLink className="categorias__container" to='/'>Inicio</NavLink>
            <NavLink className="categorias__container" to='/categoria/quehacemos'>¿Qué hacemos?</NavLink>
            <NavLink className="categorias__container" to='/categoria/postulate'>Postulate</NavLink>
          </div>      
          <div className="carrito__container">
            <CartWidget cartCount={cartCount} />
          </div>
        </div>
    )
}