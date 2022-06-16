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
import InfoEmpresa from './componentes/Footer/InfoEmpresa';
import { Login } from './componentes/Login/Login';
import CatalogoUbicacion from './componentes/Catalogo/Filtros/Ubicacion/CatalogoUbicacion';
import CatalogoTransporte from './componentes/Catalogo/Filtros/Transporte/CatalogoTransporte';
import CatalogoDuracion from './componentes/Catalogo/Filtros/Duracion/CatalogoDuracion';

function App() {
  
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [ubicacion, setUbicacion] = useState(null)
  const [transporte, setTransporte] = useState(null)
  const [duracion, setDuracion] = useState(null)
 
  useEffect(() => {
    setLoading(true)
    axios.get('https://econotravel-grupo3.herokuapp.com/experiencias')
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

    const filterer = (ubicacion) => {
        setUbicacion(ubicacion)
        console.log(ubicacion)
    }

    const filterUbicacion = filterCatalogo.filter((card) => {
      return card.etiquetas[0].ubicacion === ubicacion
    });

  return (
    <ThemeProvider theme={theme}>
     
    <BrowserRouter>
    <div className="App">
        <NavBar searcher={searchers} />
        {/* <CatalogoS/> */}

      {/* <Home/>         */}
      {/* <Login/> */}
         <Routes>    
            <Route index element={<Home />} />
            <Route path='/cartas/:id' element={<DetalleExperiencias/>} /> 
            <Route path='/cartas' element={<Catalogo data={filterCatalogo} />} />  
            <Route path='/destacadas' element={<ExpDestacadas/>}/>
            <Route path='/destacadas/:id' element={<DetalleExperiencias />} />
            <Route path='/ubicacion/:ubi' element={<CatalogoUbicacion/>}/>
            <Route path='/transporte/:trans' element={<CatalogoTransporte/>}/>
            <Route path='/duracion/:dur' element={<CatalogoDuracion/>}/>
        
          </Routes>
      {/* <DropdownUbicacion filterer={filterer}/>
      <DropdownTransporte />
      <DropdownDuracion/>  */}
      {/* <Filtro/> */}
         <Footer/>  

         
      
         </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;

{/* <Catalogo catalogo={filterCatalogo}></Catalogo>
<DetalleExperiencias i='4'/>
<Home/>
<Footer/> */}