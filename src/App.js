import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import theme from './componentes/Styles/Theme';
import DetalleExperiencias from './componentes/DetalleExperiencias/DetalleExperiencias';
import "@fontsource/roboto-mono";
import { ThemeProvider } from '@mui/material';
import Catalogo from './componentes/Catalogo/Catalogo'
import Home from './componentes/Home/Home';
import Filtro from './componentes/Filtros/Filtro'



function App() {
  
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:2500/experiencias')
      .then(res => {
        console.log(res.data)
        setData(res.data);
        setLoading(false)
      })
  }, [])



   const searchers = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
   
    const filterCatalogo = data.filter((card) => {
        return card.titulo.toLowerCase().includes(search.toLowerCase())
      });
      if (loading) return <section>Cargando...</section>

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
       
           
            <Route path='/cartas/:titulo' element={<DetalleExperiencias/>} /> 
          <Route path='/cartas' element={<Catalogo data={filterCatalogo} />}>
              
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