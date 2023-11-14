import './Filtros.css'
import { useState } from 'react';

export const Filtros = ({ Filtrar }) => {
    const [filtroActivo, setFiltroActivo] = useState(null);
  
    const handleFiltroClick = (filtro) => {
      Filtrar(filtro);
      setFiltroActivo(filtro);
    };
  
    return (
      <div className="filtros__container">
        <div
          className={`filtro__hombre ${filtroActivo === 'hombre' ? 'activo' : ''}`}
          onClick={() => handleFiltroClick('hombre')}
        >
          Hombre
        </div>
        <div
          className={`filtro__mujer ${filtroActivo === 'mujer' ? 'activo' : ''}`}
          onClick={() => handleFiltroClick('mujer')}
        >
          Mujer
        </div>
      </div>
    );
  };