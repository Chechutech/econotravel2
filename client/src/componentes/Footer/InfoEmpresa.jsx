import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Grid, Paper } from '@mui/material';
import ImagenChica from '../imagenes/woman-g3c4e3a00a_1920.jpg';
import GifBike from '../imagenes/girlbike.gif';
import {Link} from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#fffafa", 
    height:"100vh", 
    width:"100vw", 
    display:"flex", 
    flexDirection:"column",
    justify:"center",
    alignItem:"center",
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
    fontSize: 24,
    color: "#4B7F55",
    textAlign: "center",
    padding: "2vh"
}));

const Parrafo = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    alignText: "justify",
}));

const StyledCard = styled(Card)(({ theme }) => ({
    height: 500,
    maxWidth: 700,
    padding: "4vh"
}));

function InfoEmpresa() {
    return (
        <StyledBox>
            <TitleTypography>¿Quiénes somos?</TitleTypography>
            <Grid container spacing={1} style={{height:"500", display:"flex", justify:"center", alignItem:"center"}}>
                <Grid item xs={4}>
                    <StyledCard>
                        <TitleTypography>Misión</TitleTypography>
                        <Parrafo> Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña. </Parrafo>
                        <Parrafo> Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.</Parrafo>
                        <CardActions>
                            <Button size="large" color="inherit"><Link to='/Contacto' style={{textDecoration:'none'}}>Contáctanos</Link></Button>
                            <CardMedia component="img" width= "200" image={GifBike} sx={{width: 120}} alt="bike"/>
                        </CardActions>
                    </StyledCard>
                </Grid>

                <Grid item xs={2}>
                    <StyledCard>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="400"
                                image={ImagenChica}
                                alt="chica"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="caption" component="div">
                                    Marina Herrán, fundadora de Econotravel
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </StyledCard>
                </Grid>

            </Grid>
        </StyledBox>
    );
}
export default InfoEmpresa;