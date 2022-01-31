import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ mt: 5, bgcolor: 'text.secondary' }} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="overline" display="block" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        History
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Contact Us
                    </Typography>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="overline" display="block" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        History
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Contact Us
                    </Typography>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;