import React from "react";
import {Routes, Route} from "react-router-dom";
import {Box, Typography, styled, Paper, FormControlLabel,Checkbox, Button, TextField} from '@mui/material'




const BoxContacto= styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection:'column',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems:'center',
    backgroundColor: '#DE541E',
    color:'#FFFAFA',
    width: '60vw',
    height: '60vh',
    borderRadius: '10px',
    boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)',
    marginTop: '5rem',
   
    
  }));

export const Login = () => {
    return (
        <Box style={{height:'100vh', display:'flex',  width: '100vw',justifyContent:'center', alignItems:'center' }}>
        <BoxContacto className='contact-page'>
        <div className="wrapper" style={{ display: "flex",
      flexDirection: "column",
      border: "1px solid black",
      padding: 5,
      alignItems: "center"}}>
              <TextField
                hintText="Enter your email"
                floatingLabelText="Emal"
                floatingLabelFixed
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                floatingLabelFixed
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <div className="buttonsWrapper" style={{display: "flex",
      flexDirection: "row",
      padding: 5,
      alignItems: "center"}}>
                <Button
                  label="Login"
                  primary={true}
                  onClick={event => this.handleSubmit(event)}
                />
                <Button
                  label="Reset"
                  primary={true}
                  onClick={event => this.handleReset(event)}
                />
                <a href="./" alt="" title="">
                  Link
                </a>
              </div>
              </div>
           
        </BoxContacto>
        </Box>
    )
        ;
}
