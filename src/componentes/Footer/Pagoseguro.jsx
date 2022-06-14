import * as React from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Grid, Paper } from '@mui/material';


function PagoSeguro() {
    return (
        <Box sx={{ flexGrow: 1, margin: '8rem' }}>
            <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">Pago Seguro</Typography>
            <Typography variant="body2" color="text.secondary" align="justify" padding="3vh">
            Los medios de pago aceptados serán: </Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Card sx={{ height: 200, maxWidth: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">Tarjeta de Crédito o Débito a través de la plataforma Redsys</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> También puedes pagar tu compra directamente con tu tarjeta de crédito.</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> Este tipo de pago viene asegurado por el BBVA, donde podrás terminar el proceso en sus servidores seguros. </Typography>
                        <Typography > mas mas texto</Typography>
                        <CardActions>
                            <Button size="large" color="primary">QUIERO PAGAR
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ height: 200, maxWidth: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">Pago por transferencia bancaria</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> Puedes hacer un ingreso por el valor del importe total de la compra directamente en nuestra cuenta bancaria. </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> No te olvides de indicar el número de pedido dentro del concepto, la mercancía se envía una vez que conste el ingreso del importe en la cuenta. </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> Hay que tener en cuenta que los plazos de las transferencias varían según el banco y puede tardar entre 2-3 días laborales.</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh">Número de cuenta : ESXX-XXXX-XXXX-XX-XXXXXXXXXX</Typography>
                        <CardActions>
                            <Button size="large" color="primary">QUIERO PAGAR
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ height: 200, maxWidth: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">Pago a través de Paypal</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh">Selecciona PayPal como la forma de pago al completar la compra.</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> Esto te redirigirá a la página web de PayPal para continuar con el pago. </Typography>
                        <Typography > Si ya eres cliente de PayPal, debes iniciar sesión con tus datos de usuario y confirmar el pago. Si aún no eres usuario de PayPal, debes crear una cuenta en PayPal y después confirmar el pago.</Typography>
                        <CardActions>
                            <Button size="large" color="primary">QUIERO PAGAR CON PAYPAL
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}
export default PagoSeguro;