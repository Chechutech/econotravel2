import React from "react";
import {Routes, Route} from "react-router-dom";
import {Box, Typography,Grid, styled, Paper, FormControlLabel,Checkbox, Button, TextField} from '@mui/material'




const BoxContacto= styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection:'column',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems:'center',
    backgroundColor: '#DE541E',
    color:'#FFFAFA',
    width: '60vw',
    height: '60vh',
    borderRadius: '10px',
    boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)',
    marginTop: '5rem',
   
    
  }));
  const StyledPaper= styled(Paper)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        height:'36vh',
        backgroundColor: '#FFFAFA',
        width: '58vw',
        display: "flex",
        flexDirection: 'column',
        padding: '2rem',
        borderRadius: '1rem',
        justifyContent: 'space-between'
        },
        
        [theme.breakpoints.up('sm')]: {
            height:'42vh',
            backgroundColor: '#FFFAFA',
            width: '30vw',
            display: "flex",
            flexDirection: 'column',
            padding: '2rem',
            borderRadius: '1rem',
            justifyContent: 'space-between'
         },
         [theme.breakpoints.up('xl')]: {
            height:'36vh',
            backgroundColor: '#FFFAFA',
            width: '28vw',
            display: "flex",
            flexDirection: 'column',
            padding: '2rem',
            borderRadius: '1rem',
            justifyContent: 'space-between'
         }

}));

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#DE541E',
    '&:hover': {
      backgroundColor: '#D4EAC8',
      color:'black',

    },
    '&:focus': {
        backgroundColor: '#4B7F55',

      },
    textTransform: 'none',
    height: '2.4rem'
  }));

  const StyledTextField = styled(TextField)({
        height: '0.4rem',
  
    });

export const Login = () => {
    return (
        <Box style={{height:'100vh', display:'flex',  width: '100vw',justifyContent:'center', alignItems:'center' }}>
        <BoxContacto >
        <Grid> 
           <StyledPaper elevation= {0} >
           <Box>
                    <StyledTextField 
           id="standard-basic" label="Username" variant="standard"
           size="small" fullWidth />
                </Box>
                <Box>
                    <StyledTextField 
           id="standard-basic" label="Password" variant="standard"
           size="small" fullWidth />
                </Box>

               
                <ColorButton variant="contained">Login</ColorButton>
                <Typography variant="body1" color="initial"> Haz click aquí si todavia no te has registrado</Typography>
           </StyledPaper>
        </Grid>
        </BoxContacto>
        </Box>
    )
        ;
}
