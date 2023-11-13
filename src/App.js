import React from "react";
import './App.css';
import { Grid } from "@mui/material"
import Login from "./Components/Login"

function App() {
  return (
    <Grid xs={12} style={{ height: '100vh', display: 'flex', flexDirection: 'row', backgroundColor: 'blue'}}>
      <Grid item xs={4} md={4} sx={{ display: 'flex', bgcolor: 'white', justifyContent: 'center', alignItems: 'center'}} display={{ xs: 'none', md: 'flex' }}>
        <img src={require('./assets/Logo.png')} width={'80%'} style={{alignSelf: 'center'}} />
      </Grid>
      <Grid item xs={12} md={8} lg={8} sx={{bgcolor: '#1C3F53'}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Login />
      </Grid>
    </Grid>
  );
}

export default App;
