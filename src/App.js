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
          <Catalogo/>  
        {<DetalleExperiencias i='4'/>}
        <Footer/>
      </ThemeProvider>
      
      
    </div>
  );
}

export default App;