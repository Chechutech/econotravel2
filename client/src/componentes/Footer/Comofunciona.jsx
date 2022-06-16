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
import { styled, Card, Box } from '@mui/material';

const StyledDot = styled(TimelineDot)(({ theme }) => ({
    color: "#DE541E"
}));

const GreenTypography = styled(Typography)(({ theme }) => ({
    color: "#4B7F55",
    textAlign: "center",
    padding: "5vh"
}));

const SubTypography = styled(Typography)(({ theme }) => ({
    color: "#2F2F2F",
}));



export default function ComoFunciona() {
    return (
        <Box style={{maxWidth:1000, justify:"center", marginLeft:"10vh" }}>
        <Card sx={{ height: 500, maxWidth: 1200, display:"flex", flexDirection:"column", justifyContent:"center",boxShadow: 1 }}>
            <GreenTypography gutterBottom variant="h5" component="div">¿Cómo reservar?</GreenTypography>
            <Timeline position="alternate" >
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
                        Paso 1
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <StyledDot variant="outlined">
                            <PersonIcon />
                        </StyledDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography variant="h6" component="span">Regístrate</SubTypography>
                        <Typography variant="body2" color="text.secondary" align="justify">Si ya tienes una cuenta, Inicia Sesión</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary"> Paso 2 </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <StyledDot variant="outlined">
                            <CardTravelIcon />
                        </StyledDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography variant="h6" component="span">Encuentra tu experiencia</SubTypography>
                        <Typography variant="body2" color="text.secondary">Revisa nuestro catálogo</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                        Paso 3
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <StyledDot variant="outlined">
                            <LaptopMacIcon />
                        </StyledDot >
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography variant="h6" component="span">
                            Confirma tus datos
                        </SubTypography>
                        <Typography variant="body2" color="text.secondary" align="justify">Selecciona la fecha y el número de personas</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                        Paso 4
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                        <StyledDot variant="outlined">
                            <PaymentIcon />
                        </StyledDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography variant="h6" component="span">
                            Elige tu método de pago
                        </SubTypography>
                        <Typography variant="body2" color="text.secondary">Transferencia bancaria, Paypal o tarjeta de crédito</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary"> Paso 5 </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <StyledDot variant="outlined">
                            <CheckCircleIcon />
                        </StyledDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography variant="h6" component="span">Reserva confirmada</SubTypography>
                        <Typography variant="body2" color="text.secondary" align="justify"> Tras recibir el pago se confirma la reserva.</Typography>
                        <Typography variant="body2" color="text.secondary" align="justify"> Revisa tu e-mail!</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Card>
        </Box>
    );
}
