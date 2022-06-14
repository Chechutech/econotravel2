import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Grid, Paper } from '@mui/material';
import ImagenChica from '../imagenes/woman-g3c4e3a00a_1920.jpg';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: '0.75rem',
    color: "#4B7F55",
}));

function InfoEmpresa() {
    return (
        <Box sx={{ flexGrow: 1, margin: '8rem' }}>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Card sx={{ height: 455, maxWidth: 700 }}>
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">Misión</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña. </Typography>
                        <Typography > Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.</Typography>
                        <CardActions>
                            <Button size="large" color="primary">Contáctanos
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 450 }}>
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
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}
export default InfoEmpresa;