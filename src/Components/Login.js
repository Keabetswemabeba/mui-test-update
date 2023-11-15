import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Typography,
  OutlinedInput,
  Grid,
} from "@mui/material";

function Login() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#1C3F53",
      }}
      fullWidth
    >
      <Grid container>
        <Grid item xs={4}>
          <Container
            sx={{
              bgcolor: "white",
              height: "100vh",
              paddingTop: "30vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={require("../assets/Logo.png")}
              alt="Ezamazwe Logo"
              width={"90%"}
            />
          </Container>
        </Grid>

        <Grid item xs={8} sx={{ width: "60%" }}>
          <Container
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "60%",
            }}
          >
            <Box
              sx={{
                height: "60vh",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                padding: "40px 40px",
                borderRadius: "10px",
                width: "50vh",
                boxShadow: "inherit",
              }}
            >
              <Typography
                sx={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  fontWeight: "600",
                  color: "#1C3F53",
                  fontSize: "36px",
                  textAlign: "center",
                }}
              >
                EZAMAZWE EDUTECH
              </Typography>
              <Typography
                sx={{
                  marginBottom: "40px",
                  marginTop: "15px",
                  fontWeight: "500",
                  color: "#1C3F53",
                  fontSize: "25px",
                  textAlign: "center",
                  fontFamily: 'Poppins',
                }}
              >
                Login to your account
              </Typography>
              <FormControl
                fullWidth
                sx={{
                  marginBottom: "2rem",
                  color: "#1C3F53",
                  fontWeight: "400",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "0.3rem",
                    color: "#1C3F53",
                    fontSize: "18px",
                    fontFamily: "Poppins",
                  }}
                >
                  Email
                </Typography>
                <OutlinedInput
                  fullWidth
                  sx={{
                    borderRadius: "12px",
                    height: "50px",
                    border: "#1C3F53",
                    borderColor: "#1C3F53",
                  }}
                />
                <FormHelperText
                  style={{ color: "red" }}
                  sx={{
                    textAlign: "left",
                    justifyContent: "left",
                    alignSelf: "flex-start",
                    marginTop: "10px",
                  }}
                >
                  Email address is invalid
                </FormHelperText>
              </FormControl>
              <FormControl
                fullWidth
                sx={{
                  marginBottom: "2rem",
                  color: "#1C3F53",
                  fontWeight: "400",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "0.3rem",
                    color: "#1C3F53",
                    fontSize: "18px",
                    fontFamily: "Poppins",
                  }}
                >
                  Password
                </Typography>
                <OutlinedInput
                  type="password"
                  fullWidth
                  sx={{
                    borderRadius: "12px",
                    height: "50px",
                    borderColor: "#1C3F53",
                  }}
                />
                <FormHelperText
                  style={{ color: "red" }}
                  sx={{
                    textAlign: "left",
                    justifyContent: "left",
                    alignSelf: "flex-start",
                    marginTop: "10px",
                  }}
                >
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
                  marginBottom: "10px",
                }}
              >
                Forgot password?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: "30px",
                  bgcolor: "#1C3F53",
                  borderRadius: "30px",
                  padding: "15px",
                  color: "white",
                  width: "200px",
                  height: "40px",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  alignSelf: "center",
                  marginLeft: "30%",
                  marginBottom: "20px",
                }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#1C3F53",
                  color: "white",
                }}
              >
                Login
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
