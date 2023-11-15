import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Login from "./Components/Login";

function App() {
  return (
    <Container sx={{display: 'flex', width: "100%"}}>
      <Login />
    </Container>
  );
}

export default App;
