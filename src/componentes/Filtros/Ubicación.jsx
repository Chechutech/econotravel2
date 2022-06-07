import React from "react";
import catalogo from '../db.json';

function sortPlace() {

  const [experiencia, setExperiencia] = useState ([]);
  
  return (
    <div className="filtro">
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="Ubicacion">Ubicación</option>
        <option value="Transporte">Medio de Transporte</option>
        <option value="Duracion">Duración</option>
      </select>

    {experiencia.map()}
    </div>
  )
}

export default sortPlace;