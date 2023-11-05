import { Categorias } from "./Categorias"
import { CartWidget } from "./CartWidget"
import { Logo } from "./Logo"
import './Logo.css'
import './Categorias.css'
import './CartWidget.css'


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
            <CartWidget />
          </div>
        </div>
    )
}