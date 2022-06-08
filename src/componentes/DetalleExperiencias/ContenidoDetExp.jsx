import { Box, theme, styled } from "@mui/material";
import data from '../experiencias.json'
import ReadMore from "./ReadMore";
import CajitaReserva from './CajitaReserva';


const ResponsiveBox = styled(Box)(({theme}) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
        },
    
    [theme.breakpoints.up('sm')]: {
        justifyContent: 'space-evenly',
        width:'100vw'
      
    }, 
  }));




const ContenidoDetExp = ({i}) => {
    return ( 
    <ResponsiveBox sx={{}}>
        <img src={data[i].img} alt="" style={{height: '42vh', }} />
        <ReadMore >
            {data[i].descripcion} 
        </ReadMore>
        <CajitaReserva i={i}/>
    </ResponsiveBox> 
    );
}
 
export default ContenidoDetExp;