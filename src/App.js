import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import theme from './componentes/Styles/Theme';
import DetalleExperiencias from './componentes/DetalleExperiencias/DetalleExperiencias';
import "@fontsource/roboto-mono";
import { ThemeProvider } from '@mui/material';
import Catalogo from './componentes/Catalogo/Catalogo';
import Filtro from './componentes/Filtros/Filtro';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
<<<<<<< HEAD
        <Filtro/>
        <Catalogo/>
         {/* <DetalleExperiencias i='4'/>  */}
         <Footer/>
=======
         {/* <Catalogo/>  */}
        {<DetalleExperiencias i='4'/>}
        <Footer/>
>>>>>>> 8aca28d0559c2e27bb7d8cfbbeb6f0f15b315339
      </ThemeProvider>
      
      
    </div>
  );
}

export default App;