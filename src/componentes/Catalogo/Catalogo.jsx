import React from 'react'
import { styled } from '@mui/material/styles';
import catalogo from '../experiencias.json';
import { Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack, Container, Button, Typography } from '@mui/material';



const Catalogo = ({i}) => {
    console.log(catalogo);
  return (
      
        <StyledContainer>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
                <Card  sx={{ maxWidth: 285}} >
              
              <CardMedia
              height="381">
              <img />
            </CardMedia>
                 <CardContent>        
             <Stack direction="row" spacing={1}>
                 <Item>Chip One</Item>
                  <Item>Chip One</Item>
                  <Item>Chip One</Item>
                </Stack> 
              <CardActions style={{justifyContent:"space-between"}} > 
                  <Typography style={{ fontSize: "0.8rem", color: "#4b7f55", fontWeight: "bold" }} >dddd
                <Typography style={{fontSize:"0.7rem", color:"#2f2f2f"}} >
                {catalogo && catalogo[0].precio}
                  </Typography>
                </Typography> 
              <Button style={{fontSize:"0.6rem", color:"#2f2f2f", fontWeight:"bold"}}>Reserva ahora</Button>     
                 </CardActions>           
                </CardContent>
                     </Card>   
              </Grid>
         
         
        { /* <Grid item xs={12} sm={6} md={4}>
           <Card  sx={{ maxWidth: 285 }} >
            <CardMedia
                       component="img"
                       height="381"
                       alt="barco"
                       image={catalogo && catalogo[1].img} />
            <CardContent>        
           <Stack direction="row" spacing={1}>
            <Item>Chip One</Item>
             <Item>Chip One</Item>
             <Item>Chip One</Item>
           </Stack> 
           <CardActions style={{justifyContent:"space-between"}} > 
           <Typography style={{fontSize:"0.8rem", color:"#4b7f55", fontWeight:"bold"}} >
              {catalogo && catalogo[1].etiquetas[0].ubicacion}
           <Typography style={{fontSize:"0.7rem", color:"#2f2f2f"}}>
              {catalogo && catalogo[1].precio}
             </Typography>
          </Typography> 
          <Button style={{fontSize:"0.6rem", color:"#2f2f2f", fontWeight:"bold"}} >Reserva ahora</Button>     
            </CardActions>           
           </CardContent>
                </Card>   
       </Grid>
      
        <Grid item xs={12} sm={6} md={4}>
             <Card  sx={{ maxWidth: 285 }} >
                <CardMedia
                    component="img"
                    height="381"
                    alt="casa batllo"
                    image={catalogo && catalogo[2].img} />
                <CardContent>        
                    <Stack direction="row" spacing={1}>
                         <Item>Chip One</Item>
                         <Item>Chip One</Item>
                         <Item>Chip One</Item>
                    </Stack> 
                 <CardActions style={{justifyContent:"space-between"}}> 
                 <Typography style={{fontSize:"0.8rem", color:"#4b7f55", fontWeight:"bold"}} >
                    {catalogo && catalogo[2].etiquetas[0].ubicación}
                 <Typography style={{fontSize:"0.7rem", color:"#2f2f2f"}} >
                    {catalogo && catalogo[2].precio}
                   </Typography>
                </Typography> 
                 <Button style={{fontSize:"0.6rem", color:"#2f2f2f", fontWeight:"bold"}} >Reserva ahora</Button>     
                  </CardActions>           
                 </CardContent>
                      </Card>   
              </Grid>      
            
            <Grid item xs={12} sm={6} md={4}>
            <Card  sx={{ maxWidth: 285 }} >
              <CardMedia
              component="img"
              height="381"
              alt="frutas"
              image={catalogo && catalogo[3].img} />
              <CardContent>        
              <Stack direction="row" spacing={1}>
                   <Item>Chip One</Item>
                   <Item>Chip One</Item>
                   <Item>Chip One</Item>
              </Stack> 
 
             <CardActions style={{justifyContent:"space-between"}}> 
             <Typography style={{fontSize:"0.8rem", color:"#4b7f55", fontWeight:"bold"}}>
              {catalogo && catalogo[3].etiquetas[0].ubicacion}
             <Typography style={{fontSize:"0.7rem", color:"#2f2f2f"}}>
              {catalogo && catalogo[3].precio}
             </Typography>
              </Typography> 
          
             <Button style={{fontSize:"0.6rem", color:"#2f2f2f", fontWeight:"bold"}}>Reserva ahora</Button>     
             </CardActions>           
             </CardContent>
                 </Card>   
             </Grid>      

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fffafa",
     padding: theme.spacing(1),
    textAlign: 'center',
    color: "#4b7f55",
  }));
  
   const StyledContainer = styled(Container)(({ theme }) => ({
     paddingTop: theme.spacing(6),
     paddingBottom: theme.spacing(6),
     maxWidth: "lg",
    backgroundColor:"#fffafa",
  }));
  
  
  function Catalogo() {
      return (
          <StyledContainer>
             {catalogo.map((exp, index) => (
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
                   <Item>Chip One</Item>
                    <Item>Chip One</Item>
                    <Item>Chip One</Item>
                  </Stack> 
                <CardActions style={{justifyContent:"space-between"}} > 
                  <Typography style={{fontSize:"0.8rem", color:"#4b7f55", fontWeight:"bold"}} >{exp.etiquetas[0].ubicacion}
                  <Typography style={{fontSize:"0.7rem", color:"#2f2f2f"}} >
                  {exp.precio}
                    </Typography>
                  </Typography> 
                <Button style={{fontSize:"0.6rem", color:"#2f2f2f", fontWeight:"bold"}}>Reserva ahora</Button>     
                   </CardActions>           
                  </CardContent>
                       </Card>   
                </Grid>
                                          
           </Grid>
            ))}
     </StyledContainer>
        
      )
  } */}
  export default Catalogo
