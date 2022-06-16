import * as React from 'react';
import { styled, Box, Button, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Grid, Paper } from '@mui/material';
import Tarjetacc from '../imagenes/visa_mc.jpg';
import TransferIcon from '../imagenes/transfer_icon.jpg';
import Paypal from '../imagenes/paypalp.png';

const StyledBox = styled(Box)(({ theme }) => ({
    height:"600px", 
    width:"100vw", 
    display:"flex", 
    backgroundColor: "#888822", 
    flexDirection:"column",
    justify:"center",
    alignItem:"center",
    boxShadow:1,
}));

function PagoSeguro() {
    return (
        <StyledBox>
            <Card sx={{ height: 500, maxWidth: 1200 }}>
            <Typography gutterBottom variant="h4" component="div" padding="5vh" align="center">Pago Seguro</Typography>
            <Typography variant="body2" color="text.secondary" align="justify" padding="3vh">
            Los medios de pago aceptados serán: </Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Card sx={{ height: 400, width: 350 }}>
                    <CardMedia
                                component="img"
                                height="100"
                                width="50"
                                image={Tarjetacc}
                                alt="tarjeta credito"
                        />
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">Tarjeta de Crédito o Débito </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> También puedes pagar tu compra directamente con tu tarjeta de crédito a través de la plataforma Redsys.</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="2vh"> Este tipo de pago viene asegurado por el BBVA, donde podrás terminar el proceso en sus servidores seguros. </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                <Card sx={{ height: 400, width: 350 }}>
                    <CardMedia
                                component="img"
                                height="100"
                                width="50"
                                image={TransferIcon}
                                alt="transferencia bancaria"
                        />
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">Transferencia bancaria</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="2vh"> Puedes hacer un ingreso por el valor del importe total de la compra directamente en nuestra cuenta bancaria. </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="2vh"> Hay que tener en cuenta que los plazos de las transferencias varían según el banco y puede tardar entre 2-3 días laborales.</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="2vh">Número de cuenta : ESXX-XXXX-XXXX-XX-XXXXXXXXXX</Typography>

                    </Card>
                </Grid>

                <Grid item xs={4}>
                <Card sx={{ height: 400, width: 350 }}>
                    <CardMedia
                                component="img"
                                height="100"
                                width="50"
                                image={Paypal}
                                alt="Paypal logo"
                        />
                        <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center">Pago a través de Paypal</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="3vh"> Selecciona PayPal como la forma de pago al completar la compra.</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="2vh"> Esto te redirigirá a la página web de PayPal para continuar con el pago. </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify" padding="2vh"> Si ya eres cliente de PayPal, debes iniciar sesión con tus datos de usuario y confirmar el pago. Si aún no eres usuario de PayPal, debes crear una cuenta en PayPal y después confirmar el pago.</Typography>

                    </Card>
                </Grid>

            </Grid>
            </Card>
        </StyledBox>
    );
}
export default PagoSeguro;