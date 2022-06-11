import { styled, Box, Typography, Button} from "@mui/material";
import data from '../experiencias.json';
import test from '../imagenes/logo4.png'
import ImageHero from "../imagenes/HeroImage.png";



const HeroBox = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent:'space-around'
}));

const BoxImg = styled('img')(({ theme }) => ({
 
  [theme.breakpoints.down('sm')]: {
    display: 'none', 
  },
 
}));



const Typ1 = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:'1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:'1.2rem',
  },
 
}));
const Typ2 = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:'2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:'3.6rem',
  },
 
}));
const Typ3 = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:'',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:'0.9rem',
  },
 
}));
const Typ4 = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:'',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:'',
  },
 
}));

const StyledImg = styled('img')(({ theme }) => ({
 
  [theme.breakpoints.down('sm')]: {
    display: 'none' 
  },
 
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    fontSize:'1.4rem',
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
    width: '16rem',
    height: '2rem',
    textTransform: 'none'
  }));


const Hero = () => {
    return (  
    <>
    
    <HeroBox style={{width:'100%', marginTop:'4.6rem', height:'100vh'}}> 
        <Box style={{display:'flex',flexDirection:'column',justifyContent:'center', textAlign:'center', marginLeft:'4rem', marginBottom:'5.2rem'}}>
          <Typ1 variant='h1' style={{color:'#DE541E', fontWeight:'bold', marginBottom:'1.4rem'}}>LOS MEJORES DESTINOS DE TODO EL MUNDO</Typ1>
            <Box sx={{display:'flex', justifyContent:'center'}}>
              <Typ2  variant='h2' style={{
                fontSize:'',color:'black', fontWeight:'bold'}}>Viaja, </Typ2> 
              <Typ2  variant='h2' style={{color:'black', textShadow:'#DE541E 0.1rem 0.1rem 0.2rem',fontWeight:'bold'}}className="title-decore">disfruta</Typ2>
            </Box>
          <Typ2  variant='h2' style={{color:'black', fontWeight:'bold'}}>   y vive nuevas </Typ2>
          <Typ2  variant='h2' style={{color:'black', fontWeight:'bold', marginBottom:'1.4rem'}}> experiencias</Typ2>
          <Typ3  style={{color:'#4b7f55'}}> Escápate con tu pareja, tus amig@s o con la familia, </Typ3>
          <Typ3  style={{color:'#4b7f55'}}>disfruta de un sin fin de experiencias que te esperan.</Typ3>
          <Typ3  style={{color:'#4b7f55', marginBottom:'1.4rem'}}>¡Sonríe, están empezando tus vacaciones!</Typ3>
          <Box style={{display:'flex',justifyContent:'center',}}>
            <StyledButton>
                  ¡DESCUBRE MÁS!
            </StyledButton>
          </Box>
        </Box>
      
          <BoxImg style={{width: '55vw', height: '86vh', justifyItems: 'left'}} src={ImageHero} alt={"Foto of a girl"}/>
      
      
    </HeroBox>
    
     
    
    </> );
}
 
export default Hero;