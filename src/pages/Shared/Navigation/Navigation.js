import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useauth';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <ThemeProvider theme={darkTheme}>
            <Box theme={darkTheme} sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        </Typography>

                        <NavLink style={{ textDecoration: 'none', color: '#33cc33' }}
                            to='/home'><Button color="inherit">Home</Button></NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#33cc33' }}
                            to='/products'><Button color="inherit">All Product</Button></NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#33cc33' }}
                            to='/aboutus'><Button color="inherit">About Us</Button></NavLink>

                        {
                            user?.email ?
                                <Box>
                                    <NavLink style={{ textDecoration: 'none', color: '#33cc33' }} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink>
                                    <Button onClick={logout} style={{ color: '#33cc33' }} >LogOut</Button>
                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none', color: '#33cc33' }} to='/login'><Button color="inherit">Login</Button></NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default Navigation;