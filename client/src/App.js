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
import Filtro from './componentes/Catalogo/Filtros/Filtro';
import InfoEmpresa from './componentes/Footer/InfoEmpresa';
import ExpDestacadas from './componentes/Home/ExpDestacadas';
import { Login } from './componentes/Login/Login';
import DropdownUbicacion from './componentes/Catalogo/Filtros/DropdownUbicacion';
import DropdownTransporte from './componentes/Catalogo/Filtros/DropdownTransporte';
import DropdownDuracion from './componentes/Catalogo/Filtros/DropdownDuracion'


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

    // const filterer2 = (transporte) => {
    //   setTransporte(transporte)
    //   console.log(transporte)
    // }

    // const filterTransporte = filterUbicacion.filter((card) => {
    //   return card.etiquetas[1].transporte == transporte
    // });

    // const filterer3 = (duracion) => {
    //   setDuracion(duracion)
    //   console.log(duracion)
    // }

    // const filterDuracion = filterTransporte.filter((card) => {
    //   return card.etiquetas[2].duracion === duracion
    // });

  return (
    <ThemeProvider theme={theme}>
     
    <BrowserRouter>
    <div className="App">
        <NavBar searcher={searchers} />


     
      {/* <InfoEmpresa/>
      <ComoFunciona/>
      <PagoSeguro/> */}
      {/* <Home/>        
      <Login/> */}
         <Routes>    
            <Route index element={<Home />} />

            <Route path='/cartas/:id' element={<DetalleExperiencias/>} /> 
            <Route path='/cartas' element={<Catalogo data={filterCatalogo} />} />  
            <Route path='/destacadas' element={<ExpDestacadas/>}/>
            <Route path='/destacadas/:id' element={<DetalleExperiencias />} />
         </Routes>
      <DropdownUbicacion filterer={filterer}/>
      <DropdownTransporte />
      <DropdownDuracion/>
      <Catalogo data={filterUbicacion}/>
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