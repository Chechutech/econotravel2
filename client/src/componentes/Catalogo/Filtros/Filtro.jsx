import React, { useState, useEffect} from 'react';
import axios from "axios";
import { Box, Typography } from '@mui/material';
import DropdownUbicacion from './DropdownUbicacion';
import DropdownTransporte from './DropdownTransporte';
import DropdownDuracion from './DropdownDuracion';
import Catalogo from '../Catalogo'

function Filtro() {
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
    //   return card.etiquetas[1].transporte === transporte
    // });

    // const filterer3 = (duracion) => {
    //   setDuracion(duracion)
    //   console.log(duracion)
    // }

    // const filterDuracion = filterTransporte.filter((card) => {
    //   return card.etiquetas[2].duracion === duracion
    // });

  return (
    <>
      <Box sx={{ height: '400vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h4" fontSize="1.8rem" textAlign="center" color="#4B7F55">
          Experiencias en el área de Barcelona
        </Typography>
        <Box sx={{ height: '400vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0.5rem' }}>
        <DropdownUbicacion filterer={filterer}/>
        <DropdownTransporte />
        <DropdownDuracion />
        <Catalogo data={filterUbicacion}/>
        </Box>
      </Box>
    </>
  )
}
export default Filtro;