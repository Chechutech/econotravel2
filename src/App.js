import './App.css';
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import Catalogo from './componentes/Catalogo/Catalogo';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Catalogo/>
      <Footer/>
    </div>
  );
}

export default App;
