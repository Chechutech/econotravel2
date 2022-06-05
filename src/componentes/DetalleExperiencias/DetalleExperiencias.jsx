import {Box,Typography, styled} from '@mui/material'
import data from '../db.json'

const StyledTitulo = styled(Typography)(() => ({
    textAlign: 'start',
    fontSize:'2rem',
    color:'#4B7F55',
    paddingTop: '3rem',
    paddingLeft: '3rem',
    fontWeight: 'bold',
  }));


const Experiencia4 = ({i}) => {
    return ( 
        <Box>
            <StyledTitulo variant="h1">{data.experiencias[i].titulo}</StyledTitulo>




        </Box>
     );
}
 
export default Experiencia4;