import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Login from "./Components/Login";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Login />
    </Container>
  );
}

export default App;
