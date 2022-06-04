import React from 'react'
import {List, ListItem, styled, Link } from '@mui/material';



const StyledListItem = styled(ListItem)(({ theme }) => ({
    backgroundColor: '#FFFAFA',
    width:'8rem',
    height: '5rem',
    textAlign: 'center',
  }));
  
  
  const StyledLink = styled(Link)(({ theme }) => ({
    '&:hover': {
      color: '#DE541E',
    },
    textDecoration: 'none',
    fontWeight: 'bold',
    color:"black"
  
  }));
  
  
  const FooterNavMenu = () => {
    return (
      <>
        <List sx={{ display:'flex', justifyContent:'space-evenly',paddingBottom: '1rem',paddingTop: '1rem', width: '100vw' }}>
          <StyledListItem >
              <StyledLink  variant="body1" >¿Cómo funciona?</StyledLink>
          </StyledListItem>
  
          <StyledListItem>
              <StyledLink  variant="body1" >¿Quienes somos?</StyledLink>
          </StyledListItem>
  
          <StyledListItem>
              <StyledLink  variant="body1" >Medios de pago</StyledLink>
          </StyledListItem>
        </List>
      </>
    )
  }

  export default FooterNavMenu;