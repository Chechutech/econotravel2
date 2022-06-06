import {Box,Typography, styled} from '@mui/material'
import data from '../db.json'
import CajitaReserva from './CajitaReserva';
import ImgYDescripcion from './ImgYDescripcion';


const StyledTitulo = styled(Typography)(() => ({
    textAlign: 'start',
    fontSize:'1.8rem',
    color:'#4B7F55',
    marginTop: '8rem',
    marginLeft: '3rem',
    fontWeight: 'bold',
  }));


const DetalleExperiencias = ({i}) => {
    return ( 
        <Box>
            <StyledTitulo variant="h1">{data.experiencias[i].titulo}</StyledTitulo>
            <Box sx={{display:'flex'}}>
                <ImgYDescripcion i={i}/>
                <CajitaReserva i={i}/>
            </Box>
        </Box>
     );
}
 
export default DetalleExperiencias;