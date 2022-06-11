import React, { useState } from 'react';
import {BrowserRouter,  Routes, Route, useParams } from 'react-router-dom';
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
  
   const {titulo} = useParams()
 
 
  return (
    <ThemeProvider theme={theme}>
     
    <BrowserRouter>
    <div className="App">
     
      <NavBar searcher={searchers} />
        
       
          { /* <Home/>
        <Filtro/>
  <Catalogo catalogo={filterCatalogo}/> *
  <DetalleExperiencias i='3'/>  */}
        
       
     
     
       
        <Routes>
       
           
            <Route path='/cartas/:titulo' element={<DetalleExperiencias i={ titulo} />} /> 
          <Route path='/cartas' element={<Catalogo catalogo={filterCatalogo} />}>
              
            </Route>
            <Route index element={<Home />} />
           </Routes>
           <Footer/>
  
      </div> 
      </BrowserRouter>
      </ThemeProvider>
  );
}
export default App;