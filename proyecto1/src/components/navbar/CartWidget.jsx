import { useState } from "react"

export const CartWidget = ({ handleCarrito, cartCount }) => {

   const handleClick = () => {
      handleCarrito()
    }

    return (
       <div className="cart__widget--container">
            <div className="carrito__button">
               <img className='icono__usuarios' src="../src/images/capitan-del-equipo.png" alt="personas iconos" />
            </div>
            <div className="counter__container">
               <p className="counter" onClick={handleClick}>{cartCount}</p>
            </div>
       </div>  
    )
 }