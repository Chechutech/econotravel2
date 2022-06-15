import React from "react";
import {Routes, Route} from "react-router-dom";
import {Box, Typography, styled} from '@mui/material'




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

  const Mapa= styled('iFrame')(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        width:"12rem" ,   
    },
    [theme.breakpoints.up('sm')]: {
        width:"40vw" ,
    },
     [theme.breakpoints.up('xl')]: {
       
    },
   
    
  }));

export const Contact = () => {
    return (
        <Box style={{height:'100vh', display:'flex',  width: '100vw',justifyContent:'center', alignItems:'center' }}>
        <BoxContacto className='contact-page'>
        <Box>
                <Mapa  id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Avda.%20Bogatell%2082,%20barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
            </Box>
            <Box className='contact-info' style={{
                 display: 'flex',
                 flexDirection: 'column',
                 flexWrap: 'wrap',
                 justifyContent: 'center',
                 marginLeft: '30px',
            }}>
                <Box className="contact-card"style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                }}>
                    <Typography variant='body'>Teléfono: 93 123 45 67</Typography>
                    <Typography variant='body' >Correo: info@econotravel.com</Typography>
                    <Typography variant='body' >Dirección: Avda. Bogatell 82, 08005 Barcelona</Typography>

                </Box>
               
            </Box>

           
        </BoxContacto>
        </Box>
    )
        ;
}


{/* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" 
src="https://maps.google.com/maps?q=Avda.%20Bogatell%2082,%20barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" 
scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">responsive google maps</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div> */}