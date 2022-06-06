import { Box, Typography } from "@mui/material";
import data from '../db.json';
import DesplegableCantidad from './DesplegableCantidad'


const CajitaReserva = ({i}) => {
    return ( 
        <Box sx={{ border: 2, fontWeight: 'bold' }} style={{borderColor:'#4b7f55', width: '16rem', marginLeft:'2rem', color:'#4b7f55' }}>
            <Typography  sx={{ fontWeight: 'bold', fontSize:'1.4rem', marginLeft:'1rem', marginTop:'1rem' }} variant="body1" >{data.experiencias[i].precio}</Typography>
            <Box sx={{display:'flex'}}>
                <Typography sx={{  fontSize:'1.2rem', marginLeft:'1rem', marginTop:'1rem' }} variant="body1" >Cantidad:</Typography>
                <DesplegableCantidad/>
            </Box>
        </Box>
     );
}
 
export default CajitaReserva;