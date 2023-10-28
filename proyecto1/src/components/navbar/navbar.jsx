import { Categorias } from "./categorias"
import { Carrito } from "./carrito"
import { Logo } from "./logo"
import './logo.css'
import './categorias.css'
import './carrito.css'


export const Navbar = () => {
    return (
        <div className="nav__container">
          <div className="logo__container">
            <Logo 
              titleLogo= '¡ EQUIPAZO !'
            />
          </div>

          <div className="categorias__container">
            <Categorias 
              categoria='Inicio'
              />
            <Categorias 
              categoria='¿Qué hacemos?'
            />
            <Categorias 
              categoria='Postulate'
            />
          </div>
          <div className="carrito__container">
            <Carrito />
          </div>
        </div>
    )
}