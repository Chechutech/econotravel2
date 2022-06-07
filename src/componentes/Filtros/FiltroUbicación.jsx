import React from "react";
import catalogo from '../db.json';
import { useState } from "react";
import {Typography} from '@mui/material';

function FiltroUbicacion() {

  return (
    
    <div className="filtro-ubicacion">
        <Typography variant="h1" color="primary">
          Ubicación
          Medio de transporte
          Duración
        </Typography>
    </div>
  );
}

export default FiltroUbicacion;