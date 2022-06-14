import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Grid, Paper } from '@mui/material';


export default function PagoSeguro() {
    return (
        <Box sx={{ flexGrow: 1, margin: '8rem' }}>
            <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">Pago Seguro</Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Card sx={{ height: 200, maxWidth: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">tarjeta credito</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> texto </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> mas texto </Typography>
                        <Typography > mas mas texto</Typography>
                        <CardActions>
                            <Button size="large" color="primary">paga
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ height: 200, maxWidth: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">transfe</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> texto </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> mas texto </Typography>
                        <Typography > mas mas texto</Typography>
                        <CardActions>
                            <Button size="large" color="primary">paga
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ height: 200, maxWidth: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">paypal</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> texto </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> mas texto </Typography>
                        <Typography > mas mas texto</Typography>
                        <CardActions>
                            <Button size="large" color="primary">a pagar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}