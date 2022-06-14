import * as React from 'react';
import { useState, useEffect } from 'react';
import Experiencias from '../experiencias.json';
import { styled } from '@mui/material/styles';
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack, Container, Button, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "#4B7F55",
}));
const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(6),
  maxWidth: "lg",
  backgroundColor: "#FFFAFA",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",

}));


function FiltroUbicacion ({filterer}) {

  const [filteredList, setFilteredList] = useState(Experiencias);

  const [selectedExp, setSelectedExp] = useState("");

  const filterByExp = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedExp) {
      return filteredData;
    }

    const filteredExp = filteredData.filter(
      (exp) => exp.etiquetas[0].ubicacion.split(" ").indexOf(selectedExp) !== -1);

    return filteredExp;
  };

  const handleExpChange = (event) => {
    setSelectedExp(event.target.value);
  };

  useEffect(() => {
    const filteredData = filterByExp(Experiencias);
    setFilteredList(filteredData);
  }, [selectedExp]);

  return (
    <>
      <Container maxWidth="sm">

        <Box className='dropdown'
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0.5rem' }}
        >
          <Typography>Ubicación</Typography>

          <select id="ubi-input"value={selectedExp} onChange={handleExpChange}>
            <option value="Ciudad">Ciudad</option>
            <option value="Montaña">Montaña</option>
            <option value="Playa">Playa</option>
          </select>
        </Box>
      </Container>
    </>
  )
}
export default FiltroUbicacion