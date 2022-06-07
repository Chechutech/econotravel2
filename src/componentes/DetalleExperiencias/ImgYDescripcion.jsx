import { Box } from "@mui/material";
import data from '../experiencias.json'
import ReadMore from "./ReadMore";



const ImgYDescripcion = ({i}) => {
    return ( 
    <Box sx={{display: 'flex'}}>
        <img src={data[i].img} alt="" style={{width: '24rem', height: '14rem', marginLeft: '3rem', marginTop: '1rem'}} />
        <ReadMore >
            {data[i].descripcion} 
        </ReadMore>
    </Box> 
    );
}
 
export default ImgYDescripcion;