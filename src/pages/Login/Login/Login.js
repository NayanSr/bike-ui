import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useauth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handelLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    return (
        <Container>
            <Navigation />
            <Box>
                <Typography sx={{ mt: 5 }} variant="h4" gutterBottom component="div">
                    Please Login
                </Typography>
                {!isLoading && <form onSubmit={handelLoginSubmit}>
                    <TextField
                        sx={{ mt: 6, width: '30%' }}
                        id="outlined-basic"
                        label="Your Email"
                        type='email'
                        name='email'
                        onBlur={handleOnBlur}
                        variant="outlined" /> <br />
                    <TextField
                        sx={{ mt: 1, width: '30%' }}
                        id="outlined-password-input"
                        label="Your Password"
                        type="password"
                        name='password'
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                    /> <br />
                    <Button
                        sx={{ mt: 1, width: '20%' }}
                        type='submit'
                        variant="contained">
                        Login
                    </Button>
                    <br />
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to='/register'>New User? Register First.</NavLink>
                </form>}
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">Login Successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Box>
            <Footer ></Footer>
        </Container>
    );
};

export default Login;
