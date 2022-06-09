import { styled, Box, Typography, Button} from "@mui/material";
import data from '../experiencias.json';
import test from '../imagenes/logo4.png'


const HeroBox = styled(Box)(({theme}) => ({
backgroundImage:  `url(${data[2].img})`,
display: 'flex',
justifyContent: 'center',
height:'100vh',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
position: 'relative',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    fontSize:'1.4rem',
    position:'absolute',
    // background: 'linear-gradient(to bottom,  #DE541E, #4b7f55)',
    top: '90%',
    
    backgroundColor: '#DE541E',
    '&:hover': {
      backgroundColor: '#D4EAC8',
      color:'black',
        },
    '&:focus': {
        backgroundColor: '#4B7F55',
        },
    width: '98vw',
    height: '2rem',
    textTransform: 'none'
  }));


const Hero = () => {
    return (  
    <>
    <HeroBox> 
    <StyledButton>¡Descubre nuestras experiencias!</StyledButton>
    </HeroBox>
    
    </> );
}
 
export default Hero;