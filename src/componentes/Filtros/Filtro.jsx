import * as React from 'react';
import Ubicacion from './Ubicacion';
import Transporte from './Transporte';
import Duracion from './Duracion';
import {Box, Typography} from '@mui/material';
    
    function Filtro() {
    
      return (
      <>
      <Box sx={{ height: '24rem', display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <Typography variant="h4" fontSize="1.8rem" textAlign= "center" color="#4B7F55">
          Experiencias en el área de Barcelona
      </Typography>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', padding: '0.8rem', margin: '0.5rem'}}>
        <Ubicacion/>
        <Transporte/>
        <Duracion/>
      </Box>
      </Box>
      </>)
    }
export default Filtro;