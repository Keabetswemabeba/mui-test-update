import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Typography,
  TextField,
} from "@mui/material";

function Login() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: "5px",
      }}
    >
      <Container
        sx={{ justifyContent: "center", alignItems: "center", width: "50%" }}
      >
        <img
          src={require("../assets/Logo.png")}
          alt="Ezamazwe Logo"
          style={{ alignSelf: "center", marginTop: "100px" }}
          width={"100%"}
        />
      </Container>
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          gap: "40px",
          marginTop: "10px",
        }}
      >
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Typography
            sx={{
              marginBottom: "20px",
              fontWeight: "600",
              color: "#1C3F53",
              fontSize: "36px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Ezamazwe Edutech
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
              fontWeight: "500",
              color: "#1C3F53",
              fontSize: "24px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Login to your account
          </Typography>
          <FormControl
            fullWidth
            sx={{ marginBottom: "2rem", fontWeight: '400' }}
          >
            <Typography sx={{marginBottom: "0.2rem", color: "#1C3F53"}}>Email</Typography>
            <TextField variant="outlined" fullWidth sx={{borderRadius: '12px'}} />
            <FormHelperText style={{ color: "red" }}>
              Email is invalid
            </FormHelperText>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ marginBottom: "2rem", color: "#1C3F53", fontWeight: '400' }}
          >
            <Typography sx={{marginBottom: "0.2rem", color: "#1C3F53"}}>Password</Typography>
            <TextField
              variant="outlined"
              type="password"
              fullWidth
              sx={{borderRadius: '12px'}}
            />
            <FormHelperText style={{ color: "red" }}>
              Password is invalid
            </FormHelperText>
          </FormControl>
          <Typography
            component="div"
            sx={{
              fontSize: "14px",
              color: "#1C3F53",
              textAlign: "right",
              textDecoration: "underline",
              alignSelf: "flex-end",
            }}
          >
            Forgot password?
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              bgcolor: "#1C3F53",
              borderRadius: "30px",
              padding: "15px",
              color: "white",
              width: "260px",
              fontSize: "14px",
              textTransform: "uppercase",
              alignSelf: 'center',
              marginLeft: "25%"
            }}
            style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#1C3F53", color: 'white'}}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Container>
  );
}

export default Login;
