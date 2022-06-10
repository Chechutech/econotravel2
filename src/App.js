import React, { useState } from 'react';
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import theme from './componentes/Styles/Theme';
import DetalleExperiencias from './componentes/DetalleExperiencias/DetalleExperiencias';
import "@fontsource/roboto-mono";
import { ThemeProvider } from '@mui/material';
import Catalogo from './componentes/Catalogo/Catalogo'
import Home from './componentes/Home/Home';
import Filtro from './componentes/Filtros/Filtro'
import catalogo from './componentes/experiencias.json'

function App() {
  const [search, setSearch] = useState('')
  
const searchers = (e) => {
  setSearch(e.target.value)
  console.log(e.target.value)
  
}
const filterCatalogo = catalogo.filter((card) => {
  return card.titulo.toLowerCase().includes(search.toLowerCase())
});
  
   
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar searcher={searchers} />
        {/*<Filtro/>*/}
        <Catalogo catalogo={filterCatalogo}/>
         {/* <DetalleExperiencias i='4'/>  */}
        <Home/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}
export default App;