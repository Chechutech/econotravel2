import './App.css';
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import Catalogo from './componentes/Catalogo/Catalogo';
import FiltroUbicacion from './componentes/Filtros/FiltroUbicación';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Catalogo/>
      <FiltroUbicacion/>
      <Footer/>
    </div>
  );
}

export default App;
