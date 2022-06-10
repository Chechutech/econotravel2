import * as React from 'react';
import useState from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack, Container, Button, Typography } from '@mui/material';
import Catalogo from '../Catalogo/Catalogo';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#FFFAFA",
     padding: theme.spacing(1),
    textAlign: 'center',
    color: "#4B7F55",
  }));
   const StyledContainer = styled(Container)(({ theme }) => ({
     paddingTop: theme.spacing(6),
     paddingBottom: theme.spacing(6),
     maxWidth: "lg",
    backgroundColor:"#FFFAFA",
  }));
    
function FiltroUbicacion() {

    const [filteredList, setFilteredList] = useState(Catalogo);

    const [selectedExp, setSelectedExp] = useState("");

    const filterByExp = (filteredData) => {
        // Avoid filter for empty string
        if (!SelectedExp) {
          return filteredData;
        }
      
        const filteredList = filteredData.filter(
          (exp) => exp.etiquetas[0].ubicacion.split("a pie").indexOf(selectedExp) !== -1
        );

      return (

        <StyledContainer>
             {Catalogo.map((exp, index) => (
          <Grid key={index} container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                  <Card  sx={{ maxWidth: 285}} >
                       <CardMedia
                              component="img"
                              height="381"
                              alt="bici montaña"
                              image={exp.img} />
                   <CardContent>
               <Stack direction="row" spacing={1}>
                   <Item>Chip One1</Item>
                    <Item>Chip One</Item>
                    <Item>Chip One2</Item>
                  </Stack>
                <CardActions style={{justifyContent:"space-between"}} >
                  <Typography style={{fontSize:"0.8rem", color:"#4B7F55", fontWeight:"bold"}} >{exp.etiquetas[0].ubicacion}
                  <Typography style={{fontSize:"0.7rem", color:"#2F2F2F"}} >
                  {exp.precio}
                    </Typography>
                  </Typography>
                <Button style={{fontSize:"0.6rem", color:"#2F2F2F", fontWeight:"bold"}}>Reserva ahora</Button>
                   </CardActions>
                  </CardContent>
                       </Card>
                </Grid>
           </Grid>
            ))}
     </StyledContainer>

      );

}

export default FiltroUbicacion