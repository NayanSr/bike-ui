import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Reviews from '../Reviews/Reviews';




const Home = () => {
    return (
        <Container>
            <Navigation />
            <Banner />
            <Items />
            <Reviews />
            <Footer />
        </Container>
    );
};

export default Home;