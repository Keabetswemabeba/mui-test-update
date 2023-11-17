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
                height: "62vh",
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
                  marginTop: "18px",
                  marginBottom: "10px",
                  fontWeight: "600",
                  color: "#1C3F53",
                  fontSize: "36px",
                  textAlign: "center",
                  fontFamily: "Roboto",
                }}
              >
                EZAMAZWE EDUTECH
              </Typography>
              <Typography
                sx={{
                  marginBottom: "40px",
                  marginTop: "15px",
                  fontWeight: "400",
                  color: "#1C3F53",
                  fontSize: "23px",
                  textAlign: "center",
                  fontFamily: "Roboto",
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
                    fontFamily: "Roboto",
                    fontWeight: "400"
                  }}
                >
                  Email
                </Typography>
                <OutlinedInput
                  placeholder="Email"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1C3F53",
                    },
                    "&:hover > .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1C3F53",
                    },
                    height: "50px",
                    borderRadius: "12px",
                    fontFamily: "Roboto",
                    fontSize: "16px"
                  }}
                />
                <FormHelperText
                  style={{ color: "red" }}
                  sx={{
                    textAlign: "left",
                    justifyContent: "left",
                    alignSelf: "flex-start",
                    marginTop: "10px",
                    fontFamily: "Roboto",
                    fontSize: "14px",
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
                    fontFamily: "Roboto",
                    fontWeight: "400"
                  }}
                >
                  Password
                </Typography>
                <OutlinedInput
                  placeholder="Password"
                  type="password"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1C3F53",
                    },
                    "&:hover > .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1C3F53",
                    },
                    height: "50px",
                    borderRadius: "12px",
                    fontFamily: "Roboto",
                    fontSize: "16px"
                  }}
                />
                <FormHelperText
                  style={{ color: "red" }}
                  sx={{
                    textAlign: "left",
                    justifyContent: "left",
                    alignSelf: "flex-start",
                    marginTop: "10px",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                  }}
                >
                  Password is invalid
                </FormHelperText>
              </FormControl>
              <Typography
                component="div"
                sx={{
                  fontSize: "17px",
                  color: "#1C3F53",
                  textAlign: "right",
                  textDecoration: "underline",
                  alignSelf: "flex-end",
                  marginBottom: "10px",
                  fontFamily: "Roboto",
                }}
              >
                Forgot password?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: "35px",
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
                  fontFamily: "Roboto",
                  textAlign: "center",
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
