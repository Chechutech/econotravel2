import * as React from 'react';
import Ubicacion from './Ubicacion';
import Transporte from './Transporte';
import Duracion from './Duracion';
import {Box} from '@mui/material';
    
    function Filtro() {
    
      return (
      <>
      <h1>Experiencias en el área de Barcelona</h1>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Ubicacion/>
        <Transporte/>
        <Duracion/>
      </Box>

      </>)
    }
export default Filtro;