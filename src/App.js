import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import theme from './componentes/Styles/Theme';
import DetalleExperiencias from './componentes/DetalleExperiencias/DetalleExperiencias';
import "@fontsource/roboto-mono";
import { ThemeProvider } from '@mui/material';
import Catalogo from './componentes/Catalogo/Catalogo'




function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
<<<<<<< HEAD
         <Catalogo/> 
        {/* <DetalleExperiencias i='4'/> */}
=======
        <Catalogo/>
         {/* <DetalleExperiencias i='4'/>  */}
>>>>>>> 0a715af465ced638013b6c7a0ea55ee738da97ed
        <Footer/>
      </ThemeProvider>
      
      
    </div>
  );
}

export default App;
