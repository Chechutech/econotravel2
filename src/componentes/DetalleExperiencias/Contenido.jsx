import { Box } from "@mui/material";
import data from '../experiencias.json'
import ReadMore from "./ReadMore";
import CajitaReserva from './CajitaReserva';




const ImgYDescripcion = ({i}) => {
    return ( 
    <Box sx={{display: 'flex', height:'24rem', alignItems: 'center', flexWrap:'Wrap'}}>
        <img src={data[i].img} alt="" style={{width: '24rem', height: '14rem', marginLeft: '3rem', marginTop: '1rem'}} />
        <ReadMore >
            {data[i].descripcion} 
        </ReadMore>
        <CajitaReserva i={i}/>
    </Box> 
    );
}
 
export default ImgYDescripcion;