import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled, Card } from '@mui/material';

const styledDot = styled(TimelineDot)(({ theme }) => ({
    color: "#4b7f55"
}));



export default function ComoFunciona() {
    return (
        <Card sx={{ height: 500, maxWidth: 1200, boxShadow: 1 }}>
            <Typography gutterBottom variant="h5" component="div" padding="5vh" align="center" color="#4B7F55">¿Cómo reservar?</Typography>
            <Timeline position="alternate" >
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
                        Paso 1
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" variant="outlined">
                            <PersonIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">Regístrate</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify">Si ya tienes una cuenta, Inicia Sesión</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary"> Paso 2 </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="secondary" variant="outlined">
                            <CardTravelIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">Encuentra tu experiencia</Typography>
                        <Typography variant="body2" color="text.secondary">Revisa nuestro catálogo</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                        Paso 3
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="secondary" variant="outlined">
                            <LaptopMacIcon />
                        </TimelineDot >
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Confirma tus datos
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="justify">Selecciona la fecha y el número de personas</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                        Paso 4
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                        <TimelineDot color="secondary">
                            <PaymentIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Elige tu método de pago
                        </Typography>
                        <Typography variant="body2" color="text.secondary">Transferencia bancaria, Paypal o tarjeta de crédito</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary"> Paso 5 </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <CheckCircleIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">Reserva confirmada</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify"> Tras recibir el pago se confirma la reserva.</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify"> Revisa tu e-mail!</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Card>
    );
}
