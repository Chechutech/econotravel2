import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Grid, Paper } from '@mui/material';
import ImagenChica from '../imagenes/imagen_chica.JPG';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  margin: '0,75rem',
  color: "#4B7F55",
}));

export default function InfoEmpresa() {
  return (
    <Box sx={{ flexGrow: 1, margin: '5rem' }}>
        <Grid container spacing={1}>
            <Grid item xs={8}>
                <Card sx={{ height: 400, maxWidth: 700 }}>
                    <Typography gutterBottom variant="h5" component="div" padding="3vh" align="center">Misión</Typography>
                    <Typography variant="body1" color="text.secondary" align="justify" padding="5vh"> Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. 
                
                    Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña. 
                    
                    Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.
                    </Typography>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image= {ImagenChica}
                            alt="chica"
                            />
                        <CardContent>
                            <Typography gutterBottom variant="caption" component="div">
                            Marina Herrán, fundadora de Econotravel
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card sx={{maxWidth: 700 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" padding="3vh" align="center">Contacto</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Teléfono: 93 123 45 67
                            Correo: info@econotravel.com
                            Dirección: Carrer dels Viatgers, 28, 08001 Barcelona 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

        </Grid>
    </Box>
  );
}
