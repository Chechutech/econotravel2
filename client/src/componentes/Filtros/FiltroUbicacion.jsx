import * as React from 'react';
import {useState, useEffect} from 'react';
import Catalogo from '../Catalogo/Catalogo';
import Experiencias from '../experiencias.json';
import { styled } from '@mui/material/styles';
import { Box, Menu, MenuItem, Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack, Container, Button, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
   padding: theme.spacing(1),
  textAlign: 'center',
  color: "#4B7F55",
}));
 const StyledContainer = styled(Container)(({ theme }) => ({
   paddingTop: theme.spacing(30),
   paddingBottom: theme.spacing(6),
   maxWidth: "lg",
   backgroundColor: "#FFFAFA",
   display: "flex",
   flexWrap: "wrap",
   justifyContent:"space-around",
  
 }));

    
function FiltroUbicacion (Catalogo) {

    const [filteredList, setFilteredList] = useState(Experiencias);

    const [selectedExp, setSelectedExp] = useState("");

    const filterByExp = (filteredData) => {
        // Avoid filter for empty string
        if (!selectedExp) {
          return filteredData;
        }
      
        const filteredExp = filteredData.filter(
          (exp) => exp.etiquetas[0].ubicacion.split(" ").indexOf(selectedExp) !== -1);

      return filteredExp;
  };

  const handleExpChange = (event) => {
    setSelectedExp(event.target.value);
  };

  useEffect(() => {
    const filteredData = filterByExp(Experiencias);
    setFilteredList(filteredData);
  }, [selectedExp]);

  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>

          <Button style = {{fontSize:"0.8rem", textTransform:"capitalize",color:"#2f2f2f", fontWeight:"bold"}} id="basic-button" value ={selectedExp} onChange={handleExpChange} onClick={handleClick}>Ubicación</Button>
              <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} 
              MenuListProps={{ 'aria-labelledby': 'basic-button',}}>
                    <MenuItem style= {{fontSize:"0.8rem", color:"#2f2f2f", fontWeight:"bold"}} onClick={handleClose}>Ciudad</MenuItem>
                    <MenuItem style= {{fontSize:"0.8rem", color:"#2f2f2f", fontWeight:"bold"}} onClick={handleClose}>Montaña</MenuItem>
                    <MenuItem style= {{fontSize:"0.8rem", color:"#2f2f2f", fontWeight:"bold"}} onClick={handleClose}>Playa</MenuItem>
              </Menu>
      </Box>
      <Box className='exp-list'>
      <Grid container spacing={10}>
      {filteredList.map((exp, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
         <Card  sx={{ maxWidth: 330}} style={{height:"35rem"}} >
          <CardMedia component="img" height="381" alt="bici montaña" image={exp.img} />
            <CardContent>
            <Typography variant="body1" style={{fontWeight:"bold", color:"#4B7F55" }}>{exp.titulo}</Typography>  
      <Stack direction="row" spacing={1}>
           <Item>Chip One</Item>
           <Item>Chip One</Item>
           <Item>Chip One</Item>
         </Stack>
       <CardActions style={{justifyContent:"space-between"}} >
         <Typography style={{fontSize:"0.8rem", color:"#4B7F55", fontWeight:"bold"}} >{exp.etiquetas[0].ubicacion}
         <Typography style={{fontSize:"0.7rem", color:"#2F2F2F"}} >
         {exp.precio}€ Por persona
           </Typography>
         </Typography>
       <Button style={{fontSize:"0.6rem", color:"#2F2F2F", fontWeight:"bold"}}>Reserva ahora</Button>
          </CardActions>
         </CardContent>
              </Card>
        </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}
export default FiltroUbicacion