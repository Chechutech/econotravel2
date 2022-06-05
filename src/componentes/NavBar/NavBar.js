import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar,Toolbar, InputBase, Avatar, Stack } from 
'@mui/material';
import logo3 from '../imagenes/logo3.png';
import SearchIcon from '@mui/icons-material/Search';
import gorila4 from '../imagenes/gorila4.png';
import cesta from '../imagenes/cesta.png';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
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
  color: 'inherit',
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
  height:'15vh',
}));

const LogoBoxStyled = styled(Box)(({ theme }) => ({
  paddingTop: '5vh',

   
}));
function NavBar() {
    return (
      <Box sx={{ flexGrow: 1 }} >
        <StyledAppBar position="static" elevation={0} >
          <Toolbar variant="dense" sx={{ display: 'flex', justifyContent:'space-around' }}>
            <LogoBoxStyled>
            <img src={logo3} alt='logo' />
            </LogoBoxStyled>
  
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Stack direction="row" spacing={3}>
              <Avatar
                alt="gorila" src={gorila4} sx={{ width: 70, height: 70 }} />
              <Avatar
              alt="cesta" src={cesta} sx={{ width: 70, height: 70 }}/>
              </Stack>
            
         </Toolbar>
        </StyledAppBar>
      </Box>
    );
  }
  export default NavBar