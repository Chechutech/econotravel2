import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import theme from './componentes/Styles/Theme';
import DetalleExperiencias from './componentes/DetalleExperiencias/DetalleExperiencias';
import "@fontsource/roboto-mono";
import { ThemeProvider } from '@mui/material';
import Catalogo from './componentes/Catalogo/Catalogo';
import Home from './componentes/Home/Home';
import Filtro from './componentes/Filtros/Filtro';
import InfoEmpresa from './componentes/Footer/InfoEmpresa';
import ComoFunciona from './componentes/Footer/ComoFunciona';
import PagoSeguro from './componentes/Footer/PagoSeguro';
import { Contact } from './componentes/Footer/Contacto';
import { Login } from './componentes/Login/Login';

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

      <Filtro/>
      <InfoEmpresa/>
      <ComoFunciona/>
      <PagoSeguro/>
        {/*<Filtro/>*/}
        {/* <Catalogo catalogo={filterCatalogo}/> */}
         {/* <DetalleExperiencias i='4'/>  */}
        {/* < Contact/> */}
        {/* <Login/> */}
        {/* <Home/> */}        
         <Routes>    
         <Route index element={<Home />} />
         <Route path='/cartas/:id' element={<DetalleExperiencias/>} /> 
        <Route path='/cartas' element={<Catalogo data={filterCatalogo} />}/>
               
         </Routes>
         <Footer/>
  
       </div> 
      </BrowserRouter>
      </ThemeProvider>
  );
}
export default App;

{/*<Catalogo catalogo={filterCatalogo}></Catalogo>
<DetalleExperiencias i='4'/>
<Home/>
<Footer/>*/}