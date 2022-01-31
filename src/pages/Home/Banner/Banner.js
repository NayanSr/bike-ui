import { Box, Container } from '@mui/material';
import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (

        <Box sx={{ mt: 2 }} >
            <img style={{ width: '100%', height: '100%' }} src={banner} alt="" />
        </Box>

    );
};

export default Banner;