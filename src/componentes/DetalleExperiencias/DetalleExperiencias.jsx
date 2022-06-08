import {Box,Typography, styled} from '@mui/material'
import data from '../experiencias.json'
import ContenidoDetExp from './ContenidoDetExp';
import Breadcrums from './Breadcrums';


const StyledTitulo = styled(Typography)(({theme}) => ({
    marginBottom:'4rem',
    fontSize:'1.8rem',
    color:'#4B7F55',
    fontWeight: 'bold',
    marginTop:'3rem'
    
  }));


const DetalleExperiencias = ({i}) => {
    return ( 
        <Box sx={{display:'flex',  flexDirection:'column', alignItems:'center',}}>
            <Breadcrums/>
            <StyledTitulo variant="h1">{data[i].titulo}</StyledTitulo>
            <Box sx={{  }}>
                <ContenidoDetExp i={i}/>
            </Box>
        </Box>
     );
}

 
export default DetalleExperiencias;