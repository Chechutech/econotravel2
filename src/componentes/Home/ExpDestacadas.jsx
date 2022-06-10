import data from '../experiencias.json'
import {Grid,Container, Box, Paper, styled,Card, CardMedia,CardContent, Stack, Item,Button, Typography, CardActions} from '@mui/material'

const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: "#FFFAFA",
     padding: theme.spacing(1),
    textAlign: 'center',
    color: "#4B7F55",
  }));

const ExpDestacadas = () => {
    const array= data.slice(0,3)
    console.log(array)
    return (  
    <>
    <Container sx={{display:'flex'}}> 
    
          <Grid  container spacing={4} >
          {array.map((exp, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card  sx={{ maxWidth: 285}} >
                       <CardMedia
                              component="img"
                              height="381"
                              alt="bici montaña"
                              image={exp.img} />
                   <CardContent>
               <Stack direction="row" spacing={1}>
                   <Item2>Chip One1</Item2>
                    <Item2>Chip One</Item2>
                    <Item2>Chip One2</Item2>
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
                ))}
           </Grid>
           </Container>
    </> );
}
 
export default ExpDestacadas;