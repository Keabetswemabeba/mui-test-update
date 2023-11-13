import React from "react";
import { Box, Button, FormControl, FormHelperText, OutlinedInput, Typography } from "@mui/material"

function Login() {

    return (
        <Box sx={{ padding: '40px 30px', backgroundColor: 'white', gap: '20px', justifyContent: 'center' }}>
            <form style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '40px', marginTop: '10px' }}>
                <Typography sx={{ fontSize: '36px', color: 'greys.dark', textAlign: 'center', textTransform: 'uppercase', marginBottom: '0px', fontWeight: '500', letterSpacing: -1 }}>Ezamazwe Edutech</Typography>
                <Typography sx={{ fontSize: '24px', color: 'greys.dark', textAlign: 'center', marginBottom: '0px', fontWeight: '300' }}>Login to your account</Typography>
                <Box sx={{width: '100%'}} style={{ }}>
                    <FormControl sx={{ width: 1, margin: '10px 0'}}>
                        <Typography variant="subtitle1" component='div' style={{ fontSize: '14px', color: '#1C3F53' }}> Email </Typography>
                        <OutlinedInput id={'email'} sx={{ borderRadius: '12px', height: '50px', width: 1 }}></OutlinedInput>
                        <FormHelperText sx={{ color: '#FF6347' }}>Email is invalid</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ width: 1, margin: '10px 0'}}>
                        <Typography variant="subtitle1" component='div' style={{ fontSize: '14px', color: '#1C3F53' }}> Password </Typography>
                        <OutlinedInput id={'password'} sx={{ borderRadius: '12px', height: '50px', width: 1 }}></OutlinedInput>
                        <FormHelperText sx={{ color: '#FF6347' }}>Password is invalid</FormHelperText>
                    </FormControl>
                    <Typography component='div' sx={{ fontSize: '14px', color: '#1C3F53', textAlign: 'right', textDecoration: 'underline', alignSelf: 'flex-end' }}>Forgot password</Typography>
                </Box>
                <Button variant="contained" sx={{ bgcolor: '#1C3F53', borderRadius: '30px', padding: '15px', color: 'white', width: '260px', fontSize: '14px', textTransform: 'uppercase' }} >Sign In</Button>
            </form>
        </Box>
    )
}

export default Login
