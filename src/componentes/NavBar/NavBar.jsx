import * as React from 'react';
import { Box, AppBar,Toolbar, InputBase, Stack, styled, alpha, } from '@mui/material';
import logo4 from '../imagenes/logo4.png';
import SearchIcon from '@mui/icons-material/Search';
import gorila4 from '../imagenes/gorila4.png';
import cesta from '../imagenes/cesta.png';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '1.4rem',
    marginRight: '1.4rem',
  },
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '35vw',
  },
}));

const StyledImgGor = styled('img')(({ theme }) => ({
  paddingBottom: '0.7rem',
  paddingTop: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    height:'2.2rem',  
  },
  [theme.breakpoints.up('sm')]: {
    height:'4rem',  
  },

}));
const StyledImgCesta = styled('img')(({ theme }) => ({
  paddingBottom: '0.7rem',
  paddingTop: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    height:'1.8rem',  
  },
  [theme.breakpoints.up('sm')]: {
    height:'3rem',  
  },

}));



const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'#4b7f55',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#4b7f55',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fffafa',
}));

function NavBar() {

    return (
      <Box sx={{ flexGrow: 1 }} >
        <StyledAppBar position="fixed" elevation={0} >
          <Toolbar  sx={{ display: 'flex', justifyContent: 
  'space-around' }}>
            <Box  sx={{ display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <img style={{height:'4rem', paddingBottom: '0.7rem', paddingTop: '0.5rem' }} src={logo4} alt='logo' />
            </Box>
  
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems:'center' }}>
                <StyledImgGor alt="gorila" src={gorila4} />
                <StyledImgCesta alt="cesta" src={cesta}  />
              </Stack>
            
         </Toolbar>
        </StyledAppBar>
      </Box>
    );
  }
  export default NavBar