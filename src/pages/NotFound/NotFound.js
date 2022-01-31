import React from 'react';
import Navigation from '../Shared/Navigation/Navigation'
import Footer from '../Shared/Footer/Footer';
import { Box } from '@mui/system';
import { Container, Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Container >
            <Navigation />
            <Box>
                <Typography style={{ backgroundColor: '#b3ffb3', padding: '100px 0', color: 'red' }} variant="h3" gutterBottom component="div">
                    404 <br /> Page Not Found
                </Typography>
            </Box>
            <Box style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                right: 0
            }}>
                <Footer />
            </Box>
        </Container>

    );
};

export default NotFound;