import React from 'react'
import {List, ListItem, styled, Link } from '@mui/material';



const StyledListItem = styled(ListItem)(({ theme }) => ({
  height: '3rem',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    backgroundColor: '#FFFAFA',
    width:'6rem',
    },

[theme.breakpoints.up('sm')]: {
  backgroundColor: '#FFFAFA',
  width:'10rem',
}, 
  }));
  
  
  const StyledLink = styled(Link)(({ theme }) => ({
    '&:hover': {
      color: '#DE541E',
    },
    textDecoration: 'none',
    fontWeight: 'bold',
    color:"black",
    fontSize: '0.9rem',
  }));
  
  
  const FooterNavMenu = () => {
    return (
      <>
        <List sx={{ display:'flex', justifyContent:'space-evenly',paddingBottom: '0.6rem',paddingTop: '0.6rem', width: '100vw'}}>
          <StyledListItem sx={{  marginRight:'1rem'}}>
            <StyledLink  variant="body1" >¿Cómo funciona?</StyledLink>
          </StyledListItem>
  
          <StyledListItem  sx={{  marginRight:'1rem'}}>
              <StyledLink  variant="body1" >¿Quienes somos?</StyledLink>
          </StyledListItem>
  
          <StyledListItem >
              <StyledLink  variant="body1" >Medios de pago</StyledLink>
          </StyledListItem>
          
        </List>
      </>
    )
  }

  export default FooterNavMenu;